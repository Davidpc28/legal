import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Send, Eye } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Evaluación de tu caso",
    description: "Analizamos tu situación y te indicamos si cumples los requisitos para la regularización.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Preparación del expediente",
    description: "Reunimos toda la documentación necesaria y preparamos tu solicitud al detalle.",
  },
  {
    number: "03",
    icon: Send,
    title: "Presentación",
    description: "Presentamos tu solicitud en tiempo y forma durante el plazo oficial (abril-junio 2026).",
  },
  {
    number: "04",
    icon: Eye,
    title: "Seguimiento",
    description: "Hacemos seguimiento de tu expediente hasta que recibas la resolución favorable.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="section-padding bg-section-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cómo trabajamos
          </h2>
          <p className="text-lg text-muted-foreground">
            Un proceso claro y transparente para que sepas en todo momento en qué punto está tu caso.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-card border-4 border-secondary flex items-center justify-center card-elevated">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
