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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  TEXTS,
  step3Schema,
  isCriminalRecordEligible,
  type PreEvalFormValues,
} from "@/lib/pre-eval-schema";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Step3Props = {
  onNext: () => void;
};

export function Step3CriminalRecord({ onNext }: Step3Props) {
  const form = useFormContext<PreEvalFormValues>();
  const value = form.watch("hasCriminalRecord");
  const eligible = value ? isCriminalRecordEligible(value) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = step3Schema.safeParse(form.getValues());
    if (!parsed.success) {
      const err = parsed.error.flatten().fieldErrors.hasCriminalRecord?.[0];
      form.setError("hasCriminalRecord", {
        message: err || "Selecciona una opción",
      });
      return;
    }
    form.clearErrors("hasCriminalRecord");
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
          name="hasCriminalRecord"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{TEXTS.criminalRecord.label}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col gap-3 sm:flex-row sm:gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="criminal-no" />
                    <label
                      htmlFor="criminal-no"
                      className="cursor-pointer text-sm font-medium"
                    >
                      {TEXTS.criminalRecord.no}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id="criminal-si" />
                    <label
                      htmlFor="criminal-si"
                      className="cursor-pointer text-sm font-medium"
                    >
                      {TEXTS.criminalRecord.yes}
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {eligible === true && (
          <Alert className="border-[hsl(var(--success))] bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))] [&>svg]:text-[hsl(var(--success))]">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>{TEXTS.criminalRecord.success}</AlertTitle>
            <AlertDescription>
              Sin antecedentes penales en España.
            </AlertDescription>
          </Alert>
        )}
        {eligible === false && (
          <Alert className="border-[hsl(var(--warning))] bg-[hsl(var(--warning)/0.1)] [&>svg]:text-[hsl(var(--warning))]">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{TEXTS.criminalRecord.warning}</AlertTitle>
            <AlertDescription>
              Tu caso requiere un análisis personalizado. Te podemos orientar;
              continúa y déjanos tus datos.
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
}
