"use client";

import { useFormContext } from "react-hook-form";
import {
  TEXTS,
  computeEligibility,
  type PreEvalFormValues,
} from "@/lib/pre-eval-schema";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Step5Props = {
  onNext: () => void;
};

export function Step5Result({ onNext }: Step5Props) {
  const form = useFormContext<PreEvalFormValues>();
  const values = form.getValues();
  const { result, met, notMet } = computeEligibility(values);

  const isHighProbability = result === "alta_probabilidad";

  return (
    <form
      id="pre-eval-step-form"
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <div className="rounded-lg border bg-card p-4 space-y-4">
        {isHighProbability ? (
          <div className="flex gap-3 items-start">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-[hsl(var(--success))]" />
            <div>
              <h3 className="font-semibold text-[hsl(var(--success))]">
                {TEXTS.result.highProbability}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Según los datos indicados, cumples los requisitos de fecha,
                permanencia y antecedentes.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 items-start">
            <AlertCircle className="h-6 w-6 shrink-0 text-[hsl(var(--warning))]" />
            <div>
              <h3 className="font-semibold text-[hsl(var(--warning))]">
                {TEXTS.result.studyCase}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Podemos estudiar tu caso de forma personalizada. Déjanos tus
                datos y te contactamos.
              </p>
            </div>
          </div>
        )}

        {met.length > 0 && (
          <div>
            <p className="text-sm font-medium text-foreground">
              {TEXTS.result.requirementsMet}
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
              {met.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {notMet.length > 0 && (
          <div>
            <p className="text-sm font-medium text-foreground">
              {TEXTS.result.requirementsNotMet}
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
              {notMet.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p className="text-sm font-medium text-center">{TEXTS.result.cta}</p>
    </form>
  );
}
