import { motion } from "framer-motion";
import { AlertTriangle, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-urgency-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-urgency/10 text-urgency mb-6 urgency-pulse">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">IMPORTANTE: Plazo limitado</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            No dejes pasar esta oportunidad
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            El plazo de solicitud es del <span className="font-semibold text-foreground">1 de abril al 30 de junio de 2026</span>. 
            No habrá prórroga ni segunda oportunidad. Te recomendamos empezar a preparar tu documentación cuanto antes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card rounded-xl p-6 card-elevated">
              <Calendar className="w-8 h-8 text-urgency mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Solo 3 meses</h3>
              <p className="text-sm text-muted-foreground">Para presentar tu solicitud</p>
            </div>
            <div className="bg-card rounded-xl p-6 card-elevated">
              <AlertTriangle className="w-8 h-8 text-urgency mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Sin prórroga</h3>
              <p className="text-sm text-muted-foreground">No habrá extensión del plazo</p>
            </div>
            <div className="bg-card rounded-xl p-6 card-elevated">
              <Clock className="w-8 h-8 text-urgency mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Prepárate ya</h3>
              <p className="text-sm text-muted-foreground">Empieza antes de abril 2026</p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-urgency hover:bg-urgency/90 text-primary-foreground text-lg px-10 py-6 font-semibold"
          >
            Quiero preparar mi caso ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
