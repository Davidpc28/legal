import { z } from "zod";

// ——— i18n-friendly: texts in one place ———
export const TEXTS = {
  steps: {
    dateArrival: "Fecha de llegada a España",
    permanence: "Permanencia continuada",
    criminalRecord: "Antecedentes penales",
    currentStatus: "Situación administrativa actual",
    result: "Resultado preliminar",
    contact: "Datos de contacto",
  },
  dateArrival: {
    label: "¿Cuándo llegaste a España?",
    success: "Puedes optar",
    warning: "No cumples el requisito, pero podemos analizar tu caso",
  },
  permanence: {
    label: "¿Cuántos meses llevas de forma continuada en España?",
    success: "Cumples",
    warning: "Aún no cumples, pero seguimos analizando",
  },
  criminalRecord: {
    label: "¿Tienes antecedentes penales en España?",
    yes: "Sí",
    no: "No",
    success: "Cumples",
    warning: "El caso requiere análisis personalizado",
  },
  currentStatus: {
    label: "¿Cuál es tu situación administrativa actual?",
    options: {
      irregular: "En situación irregular",
      solicitante_asilo: "Solicitante de asilo",
      visado_caducado: "Visado caducado",
      otros: "Otros",
    },
    description:
      "El proceso está pensado para personas ya en España. Cualquier situación puede ser valorada.",
  },
  result: {
    highProbability: "Alta probabilidad de poder optar",
    studyCase: "No cumples todos los requisitos, pero podemos estudiar tu caso",
    cta: "Déjanos tus datos y te contactamos",
    requirementsMet: "Requisitos cumplidos",
    requirementsNotMet: "Requisitos no cumplidos",
  },
  contact: {
    fullName: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono (con prefijo internacional, ej. +34...)",
    consent:
      "Acepto la política de privacidad y el uso de mis datos para ser contactado (GDPR).",
    submit: "Enviar y solicitar contacto",
  },
  eligibility: {
    high: "alta_probabilidad",
    study: "estudio_caso",
  },
} as const;

const CUTOFF_DATE = "2025-12-31";
const MIN_MONTHS = 5;

export const CURRENT_STATUS_OPTIONS = [
  { value: "irregular", label: TEXTS.currentStatus.options.irregular },
  {
    value: "solicitante_asilo",
    label: TEXTS.currentStatus.options.solicitante_asilo,
  },
  {
    value: "visado_caducado",
    label: TEXTS.currentStatus.options.visado_caducado,
  },
  { value: "otros", label: TEXTS.currentStatus.options.otros },
] as const;

// ——— Step-level validation (per step, no block) ———
export const step1Schema = z.object({
  dateArrival: z.string().min(1, "Indica la fecha de llegada"),
});

export const step2Schema = z.object({
  monthsInSpain: z.coerce
    .number()
    .min(0, "Indica los meses")
    .max(600, "Valor no válido"),
});

export const step3Schema = z.object({
  hasCriminalRecord: z.enum(["si", "no"], {
    required_error: "Selecciona una opción",
  }),
});

export const step4Schema = z.object({
  currentStatus: z.enum(
    ["irregular", "solicitante_asilo", "visado_caducado", "otros"],
    {
      required_error: "Selecciona tu situación",
    },
  ),
});

export const step6Schema = z.object({
  fullName: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email no válido"),
  phone: z
    .string()
    .regex(
      /^\+?[0-9\s-]{10,20}$/,
      "Teléfono con prefijo internacional (ej. +34...)",
    ),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
  }),
});

// ——— Full form type (accumulated state) ———
export type PreEvalFormValues = {
  dateArrival: string;
  monthsInSpain: number;
  hasCriminalRecord: "si" | "no";
  currentStatus:
    | "irregular"
    | "solicitante_asilo"
    | "visado_caducado"
    | "otros";
  fullName: string;
  email: string;
  phone: string;
  consent: boolean;
};

// ——— Eligibility result (computed) ———
export type EligibilityResult = "alta_probabilidad" | "estudio_caso";

export function computeEligibility(values: Partial<PreEvalFormValues>): {
  result: EligibilityResult;
  met: string[];
  notMet: string[];
} {
  const met: string[] = [];
  const notMet: string[] = [];

  if (values.dateArrival) {
    const beforeCutoff = values.dateArrival <= CUTOFF_DATE;
    if (beforeCutoff) met.push(TEXTS.steps.dateArrival);
    else notMet.push(TEXTS.steps.dateArrival);
  }

  if (typeof values.monthsInSpain === "number") {
    if (values.monthsInSpain >= MIN_MONTHS) met.push(TEXTS.steps.permanence);
    else notMet.push(TEXTS.steps.permanence);
  }

  if (values.hasCriminalRecord) {
    if (values.hasCriminalRecord === "no") met.push(TEXTS.steps.criminalRecord);
    else notMet.push(TEXTS.steps.criminalRecord);
  }

  const allMet = notMet.length === 0;
  const result: EligibilityResult = allMet
    ? "alta_probabilidad"
    : "estudio_caso";

  return { result, met, notMet };
}

export function isDateArrivalEligible(dateStr: string): boolean {
  return dateStr <= CUTOFF_DATE;
}

export function isPermanenceEligible(months: number): boolean {
  return months >= MIN_MONTHS;
}

export function isCriminalRecordEligible(
  hasCriminalRecord: "si" | "no",
): boolean {
  return hasCriminalRecord === "no";
}

// ——— Full form schema (for React Hook Form resolver) ———
export const preEvalFormSchema = z.object({
  dateArrival: z.string().min(1, "Indica la fecha de llegada"),
  monthsInSpain: z.coerce
    .number()
    .min(0, "Indica los meses")
    .max(600, "Valor no válido"),
  hasCriminalRecord: z.enum(["si", "no"], {
    required_error: "Selecciona una opción",
  }),
  currentStatus: z.enum(
    ["irregular", "solicitante_asilo", "visado_caducado", "otros"],
    {
      required_error: "Selecciona tu situación",
    },
  ),
  fullName: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email no válido"),
  phone: z
    .string()
    .regex(
      /^\+?[0-9\s-]{10,20}$/,
      "Teléfono con prefijo internacional (ej. +34...)",
    ),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
  }),
});

export type PreEvalFormSchema = z.infer<typeof preEvalFormSchema>;
