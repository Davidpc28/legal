"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconCheck, IconShield, IconArrowRight } from "@tabler/icons-react";

const ContactFormSection = () => {
  return (
    <section id="pre-evaluacion" className="section-padding bg-section-accent">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprueba si puedes optar a la regularización
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Responde a unas preguntas en menos de 2 minutos y descubre si
              cumples los requisitos para la regularización extraordinaria 2026.
              Sin compromiso. Al final podrás dejar tus datos y te contactamos.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <IconCheck size={20} className="text-secondary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">
                    Pre-evaluación gratuita
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Basada en criterios oficiales del Ministerio de Inclusión
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <IconShield size={20} className="text-secondary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">
                    Resultado al instante
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Sabrás si cumples requisitos o si podemos estudiar tu caso
                  </p>
                </div>
              </li>
            </ul>

      
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 card-elevated flex flex-col justify-center sticky top-20"
          >
            <p className="text-muted-foreground mb-6">
              Te guiamos paso a paso: fecha de llegada, permanencia, antecedentes
              y situación actual. No bloqueamos el flujo; siempre podrás dejar tus
              datos para que te contactemos.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground cta-glow text-lg py-6 font-semibold w-full sm:w-auto"
            >
              <Link href="/pre-evaluacion" className="inline-flex items-center gap-2">
                Hacer mi pre-evaluación
                <IconArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
