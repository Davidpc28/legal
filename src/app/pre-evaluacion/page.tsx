"use client";

import { useState, useCallback } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stepper, type StepperStep } from "@/components/pre-eval/Stepper";
import {
  Step1DateArrival,
  Step2Permanence,
  Step3CriminalRecord,
  Step4CurrentStatus,
  Step5Result,
  Step6Contact,
} from "@/components/pre-eval/steps";
import {
  TEXTS,
  type PreEvalFormValues,
  computeEligibility,
} from "@/lib/pre-eval-schema";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS: StepperStep[] = [
  { id: 1, label: TEXTS.steps.dateArrival },
  { id: 2, label: TEXTS.steps.permanence },
  { id: 3, label: TEXTS.steps.criminalRecord },
  { id: 4, label: TEXTS.steps.currentStatus },
  { id: 5, label: TEXTS.steps.result },
  { id: 6, label: TEXTS.steps.contact },
];

const defaultValues: PreEvalFormValues = {
  dateArrival: "",
  monthsInSpain: 0,
  hasCriminalRecord: "no",
  currentStatus: "irregular",
  fullName: "",
  email: "",
  phone: "",
  consent: false,
};

const stepTransition = {
  enter: (direction: number) => ({
    x: direction === 0 ? 0 : direction > 0 ? 24 : -24,
    opacity: 0,
    filter: direction === 0 ? "blur(0px)" : "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction: number) => ({
    x: direction === 0 ? 0 : direction > 0 ? -24 : 24,
    opacity: 0,
    filter: direction === 0 ? "blur(0px)" : "blur(4px)",
    transition: { duration: 0.2 },
  }),
};

function StepContent({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: number;
}) {
  return (
    <motion.div
      custom={direction}
      variants={stepTransition}
      initial="enter"
      animate="center"
      exit="exit"
      className="min-h-[200px]"
    >
      {children}
    </motion.div>
  );
}

export default function PreEvaluacionPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PreEvalFormValues>({
    defaultValues,
    mode: "onChange",
  });

  const goNext = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const submitLead = useCallback(async () => {
    const values = form.getValues();
    const { result } = computeEligibility(values);
    

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateArrival: values.dateArrival,
          monthsInSpain: String(values.monthsInSpain),
          hasCriminalRecord: values.hasCriminalRecord,
          currentStatus: values.currentStatus,
          eligibilityResult: result,
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data?.message || "Error al enviar. Inténtalo de nuevo.",
        );
      }
      setSubmitted(true);
    } catch (err) {
      form.setError("root", {
        type: "manual",
        message: err instanceof Error ? err.message : "Error al enviar",
      });
    } finally {
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [form]);

  const stepsWithState = STEPS.map((s, i) => ({
    ...s,
    completed: i < step,
    active: i === step,
  }));

  if (submitted) {
    return (
      <div className="container max-w-lg py-24 px-4 min-h-screen">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-10 w-10 text-[hsl(var(--success))]" />
              <div>
                <CardTitle>Datos enviados correctamente</CardTitle>
                <CardDescription>
                  Te contactaremos lo antes posible para analizar tu caso.
                  Revisa tu correo y teléfono.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-24 px-4 min-h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Pre-evaluación de regularización extraordinaria</CardTitle>
          <CardDescription>
            Responde a unas preguntas para conocer tu situación. No bloqueamos
            el flujo; al final podrás dejar tus datos.
          </CardDescription>
          <Stepper steps={stepsWithState} currentStep={step} className="mt-4" />
        </CardHeader>
        <CardContent className="overflow-hidden space-y-6">
          <FormProvider {...form}>
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                {step === 0 && (
                  <StepContent key="step-0" direction={direction}>
                    <Step1DateArrival onNext={goNext} />
                  </StepContent>
                )}
                {step === 1 && (
                  <StepContent key="step-1" direction={direction}>
                    <Step2Permanence onNext={goNext} />
                  </StepContent>
                )}
                {step === 2 && (
                  <StepContent key="step-2" direction={direction}>
                    <Step3CriminalRecord onNext={goNext} />
                  </StepContent>
                )}
                {step === 3 && (
                  <StepContent key="step-3" direction={direction}>
                    <Step4CurrentStatus onNext={goNext} />
                  </StepContent>
                )}
                {step === 4 && (
                  <StepContent key="step-4" direction={direction}>
                    <Step5Result onNext={goNext} />
                  </StepContent>
                )}
                {step === 5 && (
                  <StepContent key="step-5" direction={direction}>
                    {form.formState.errors.root && (
                      <p className="text-sm font-medium text-destructive">
                        {form.formState.errors.root.message}
                      </p>
                    )}
                    <Step6Contact
                      onSubmit={submitLead}
                      isSubmitting={isSubmitting}
                    />
                  </StepContent>
                )}
              </AnimatePresence>
            </div>

            {step <= 4 && (
              <div className="flex justify-between items-center gap-4 pt-2">
                <div className="min-w-[100px]">
                  {step > 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Button type="button" variant="ghost" onClick={goPrev}>
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Anterior
                      </Button>
                    </motion.div>
                  ) : null}
                </div>
                <Button type="submit" form="pre-eval-step-form">
                  Siguiente
                </Button>
              </div>
            )}
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
