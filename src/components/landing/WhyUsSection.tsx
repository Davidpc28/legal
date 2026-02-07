import { motion } from "framer-motion";
import { Scale, Zap, Users, Award, Heart } from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Especialistas en extranjería",
    description: "Nos dedicamos exclusivamente al derecho de extranjería. Conocemos la ley a fondo.",
  },
  {
    icon: Zap,
    title: "Preparación rápida",
    description: "Agilizamos la preparación de tu expediente para presentarlo a tiempo.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Cada caso es único. Te acompañamos de forma cercana en todo el proceso.",
  },
  {
    icon: Award,
    title: "Experiencia probada",
    description: "Más de 500 casos de extranjería gestionados con éxito.",
  },
  {
    icon: Heart,
    title: "Trato humano y cercano",
    description: "Entendemos lo que significa este proceso para ti. Estamos contigo.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="por-que-nosotros" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Somos abogados especializados en extranjería. Nuestro objetivo es que consigas 
            tu regularización con la máxima seguridad jurídica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
