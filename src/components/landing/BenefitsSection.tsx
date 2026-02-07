import { motion } from "framer-motion";
import { Briefcase, Shield, Heart, Home } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Permiso de trabajo",
    description: "Podrás trabajar legalmente con contrato y acceso a la Seguridad Social.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Shield,
    title: "Seguridad jurídica",
    description: "Vivirás sin miedo a sanciones, con todos tus derechos garantizados.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Home,
    title: "Residencia legal",
    description: "Tendrás un permiso de residencia renovable y la opción de reagrupar familia.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Heart,
    title: "Estabilidad familiar",
    description: "Tus familiares directos también pueden beneficiarse del proceso.",
    color: "bg-warning/10 text-warning",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-section-subtle">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Beneficios de la regularización
          </h2>
          <p className="text-lg text-muted-foreground">
            Regularizar tu situación te abre las puertas a una vida plena en España, 
            con derechos, seguridad y oportunidades para ti y tu familia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 card-elevated flex gap-6"
            >
              <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
