import { motion } from "framer-motion";
import {
  IconCalendar,
  IconClock,
  IconFileCheck,
  IconUsers,
} from "@tabler/icons-react";
import { AnimatedMarker } from "@/components/AnimatedMarker";

const features = [
  {
    icon: IconCalendar,
    title: "Aprobada en enero 2026",
    description:
      "El Consejo de Ministros ha dado luz verde a esta medida extraordinaria.",
  },
  {
    icon: IconClock,
    title: "Plazo: 1 abril - 30 junio 2026",
    description: "Solo 3 meses para presentar tu solicitud. No habrá prórroga.",
  },
  {
    icon: IconFileCheck,
    title: "Resolución en ~3 meses",
    description:
      "Tiempo estimado para recibir tu autorización de residencia y trabajo.",
  },
  {
    icon: IconUsers,
    title: "Incluye familiares",
    description: "Familiares directos también pueden beneficiarse del proceso.",
  },
];

const WhatIsSection = () => {
  return (
    <section id="que-es" className="section-padding bg-section-subtle">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Qué es la Regularización Extraordinaria 2026?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Es una medida excepcional aprobada por el Gobierno español que
            permite a personas en situación irregular obtener un permiso de
            residencia y trabajo. Esta oportunidad{" "}
            <span className="font-semibold text-foreground">
              <AnimatedMarker color="accent">
                no se repetirá
              </AnimatedMarker>
            </span>
            .
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 card-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key dates highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-primary rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="text-primary-foreground">
              <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
                Llegada a España
              </p>
              <p className="text-2xl md:text-3xl font-serif font-bold">
                Antes del 31/12/2025
              </p>
            </div>
            <div className="text-primary-foreground">
              <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
                Estancia mínima
              </p>
              <p className="text-2xl md:text-3xl font-serif font-bold">
                5 meses
              </p>
            </div>
            <div className="text-primary-foreground">
              <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
                Plazo de solicitud
              </p>
              <p className="text-2xl md:text-3xl font-serif font-bold">
                Abril - Junio 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
