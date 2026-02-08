"use client";

import { motion } from "framer-motion";
import { IconCheck, IconAlertCircle } from "@tabler/icons-react";

const requirements = [
  "Estar en situación irregular en España",
  "Haber llegado a España antes del 31 de diciembre de 2025",
  "Acreditar al menos 5 meses de estancia en el país",
  "No tener antecedentes penales en España ni en tu país de origen",
  "No estar sujeto a prohibición de entrada en el espacio Schengen",
];

const alsoApplies = [
  "Solicitantes de asilo cuya petición fue denegada",
  "Familiares directos de personas que cumplan los requisitos",
];

const RequirementsSection = () => {
  return (
    <section id="requisitos" className="section-padding bg-section-light">
      <div className="container-custom ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start  relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Quién puede solicitar la regularización?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comprueba si cumples los requisitos básicos. Si tienes dudas sobre
              tu caso particular, te ayudamos a evaluarlo sin compromiso.
            </p>

            <div className="space-y-4 mb-8">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconCheck size={16} className="text-success" />
                  </div>
                  <span className="text-foreground">{req}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-section-accent rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <IconAlertCircle
                  size={20}
                  className="text-secondary flex-shrink-0 mt-0.5"
                />
                <span className="font-semibold text-foreground">
                  También pueden solicitarlo:
                </span>
              </div>
              <ul className="space-y-2 ml-8">
                {alsoApplies.map((item, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-12 h-auto"
          >
            <div className="bg-card rounded-2xl p-8 card-elevated ">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Visa de búsqueda de empleo
              </h3>
              <p className="text-muted-foreground mb-6">
                La regularización extraordinaria incluye la posibilidad de
                obtener una
                <span className="font-semibold text-foreground">
                  {" "}
                  visa de búsqueda de empleo de hasta 12 meses
                </span>
                , dándote tiempo para encontrar trabajo y establecerte
                legalmente.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-success">
                  <IconCheck size={16} />
                  <span>Trabajo legal</span>
                </div>
                <div className="flex items-center gap-2 text-success">
                  <IconCheck size={16} />
                  <span>Seguridad Social</span>
                </div>
                <div className="flex items-center gap-2 text-success">
                  <IconCheck size={16} />
                  <span>Derechos laborales</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            {/* <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-secondary/10 rounded-2xl" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
