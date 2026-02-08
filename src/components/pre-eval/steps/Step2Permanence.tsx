"use client";

import { useFormContext } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  TEXTS,
  step2Schema,
  isPermanenceEligible,
  type PreEvalFormValues,
} from "@/lib/pre-eval-schema";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Step2Props = {
  onNext: () => void;
};

export function Step2Permanence({ onNext }: Step2Props) {
  const form = useFormContext<PreEvalFormValues>();
  const months = form.watch("monthsInSpain");
  const eligible =
    typeof months === "number" && months >= 0
      ? isPermanenceEligible(months)
      : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = step2Schema.safeParse(form.getValues());
    if (!parsed.success) {
      const err = parsed.error.flatten().fieldErrors.monthsInSpain?.[0];
      form.setError("monthsInSpain", { message: err || "Indica los meses" });
      return;
    }
    form.clearErrors("monthsInSpain");
    onNext();
  };

  return (
    <Form {...form}>
      <form
        id="pre-eval-step-form"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="monthsInSpain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{TEXTS.permanence.label}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  max={600}
                  placeholder="Ej. 6"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {eligible === true && (
          <Alert className="border-[hsl(var(--success))] bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))] [&>svg]:text-[hsl(var(--success))]">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>{TEXTS.permanence.success}</AlertTitle>
            <AlertDescription>
              Al menos 5 meses de permanencia continuada.
            </AlertDescription>
          </Alert>
        )}
        {eligible === false && (
          <Alert className="border-[hsl(var(--warning))] bg-[hsl(var(--warning)/0.1)] [&>svg]:text-[hsl(var(--warning))]">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{TEXTS.permanence.warning}</AlertTitle>
            <AlertDescription>
              Seguimos analizando tu caso. Continúa con el formulario.
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
}
