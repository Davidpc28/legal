import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cities } from "@/lib/cities";

interface Props {
  params: {
    city: string;
  };
}

export function generateMetadata({ params }: Props): Metadata {
  const cityData = cities[params.city];

  if (!cityData) {
    return {
      title: "Ciudad no encontrada",
    };
  }

  return {
    title: `Regularización Extranjería 2026 en ${cityData.name} | Abogada Especializada`,
    description: cityData.description,
    keywords: [
      `regularización extranjería 2026 ${cityData.name}`,
      `abogada ${cityData.name}`,
      `permiso residencia ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://puerta-legal.es/regularizacion-extranjeria/${params.city}`,
    },
    openGraph: {
      type: "website",
      title: `Regularización Extranjería 2026 en ${cityData.name}`,
      description: cityData.description,
      url: `https://puerta-legal.es/regularizacion-extranjeria/${params.city}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(cities).map((slug) => ({
    city: slug,
  }));
}

export default function CityPage({ params }: Props) {
  const cityData = cities[params.city];

  if (!cityData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero con imagen de la ciudad y degradado (mismo estilo que home) */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={cityData.image}
            alt={cityData.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <Link
            href="/ciudades"
            className="inline-block text-primary-foreground/90 hover:text-primary-foreground mb-6 font-semibold transition-colors"
          >
            ← Volver a ciudades
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Regularización de Extranjería 2026 en {cityData.name}
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {cityData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Requisitos para la Regularización en {cityData.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cityData.requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-section-subtle rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-secondary text-secondary-foreground font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">{req}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-section-subtle">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Beneficios de Regularizarte en {cityData.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cityData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border card-elevated"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Acceso completo a todos los derechos y beneficios de una
                    persona regularizada.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(16,36,80,0.85) 10%, rgba(64,174,139,0.60) 90%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <img
          src="/assets/section-contact.jpg"
          alt="Regularización Extranjería"
          className="object-cover absolute inset-0"
        />
        <div className="container-custom text-center max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Regularizarte?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            No esperes más. El plazo es limitado: 1 de abril al 30 de junio de
            2026. Comprueba si cumples los requisitos con nuestra pre-evaluación
            gratuita y te contactamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pre-evaluacion"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Haz tu pre-evaluación gratuita
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
