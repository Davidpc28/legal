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
  step1Schema,
  isDateArrivalEligible,
  type PreEvalFormValues,
} from "@/lib/pre-eval-schema";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Step1Props = {
  onNext: () => void;
};

export function Step1DateArrival({ onNext }: Step1Props) {
  const form = useFormContext<PreEvalFormValues>();
  const dateArrival = form.watch("dateArrival");
  const eligible = dateArrival ? isDateArrivalEligible(dateArrival) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = step1Schema.safeParse(form.getValues());
    if (!parsed.success) {
      const err = parsed.error.flatten().fieldErrors.dateArrival?.[0];
      form.setError("dateArrival", {
        message: err || "Indica la fecha de llegada",
      });
      return;
    }
    form.clearErrors("dateArrival");
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
          name="dateArrival"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{TEXTS.dateArrival.label}</FormLabel>
              <FormControl>
                <Input type="date" {...field} max="2026-12-31" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {eligible === true && (
          <Alert className="border-[hsl(var(--success))] bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))] [&>svg]:text-[hsl(var(--success))]">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>{TEXTS.dateArrival.success}</AlertTitle>
            <AlertDescription>
              {TEXTS.dateArrival.success}. Llegaste antes del 31/12/2025.
            </AlertDescription>
          </Alert>
        )}
        {eligible === false && (
          <Alert className="border-[hsl(var(--warning))] bg-[hsl(var(--warning)/0.1)] [&>svg]:text-[hsl(var(--warning))]">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{TEXTS.dateArrival.warning}</AlertTitle>
            <AlertDescription>
              Puedes continuar y dejarnos tus datos para que analicemos tu
              situación.
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
}
