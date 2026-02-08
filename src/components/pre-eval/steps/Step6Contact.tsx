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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  TEXTS,
  step6Schema,
  type PreEvalFormValues,
} from "@/lib/pre-eval-schema";

type Step6Props = {
  onSubmit: () => void;
  isSubmitting?: boolean;
};

export function Step6Contact({ onSubmit, isSubmitting }: Step6Props) {
  const form = useFormContext<PreEvalFormValues>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = step6Schema.safeParse(form.getValues());
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      Object.entries(flat).forEach(([key, messages]) => {
        form.setError(key as keyof PreEvalFormValues, {
          message: messages?.[0] || "Error",
        });
      });
      return;
    }
    form.clearErrors();
    onSubmit();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{TEXTS.contact.fullName}</FormLabel>
              <FormControl>
                <Input placeholder="Nombre y apellidos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{TEXTS.contact.email}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{TEXTS.contact.phone}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+34 600 000 000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal cursor-pointer">
                  {TEXTS.contact.consent}
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando…" : TEXTS.contact.submit}
        </Button>
      </form>
    </Form>
  );
}
