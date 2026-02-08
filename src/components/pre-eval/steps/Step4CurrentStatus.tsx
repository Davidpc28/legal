"use client";

import { useFormContext } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TEXTS,
  CURRENT_STATUS_OPTIONS,
  step4Schema,
  type PreEvalFormValues,
} from "@/lib/pre-eval-schema";

type Step4Props = {
  onNext: () => void;
};

export function Step4CurrentStatus({ onNext }: Step4Props) {
  const form = useFormContext<PreEvalFormValues>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = step4Schema.safeParse(form.getValues());
    if (!parsed.success) {
      const err = parsed.error.flatten().fieldErrors.currentStatus?.[0];
      form.setError("currentStatus", {
        message: err || "Selecciona tu situación",
      });
      return;
    }
    form.clearErrors("currentStatus");
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
          name="currentStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{TEXTS.currentStatus.label}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu situación" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CURRENT_STATUS_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                {TEXTS.currentStatus.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
