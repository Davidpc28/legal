import { Metadata } from "next";
import Link from "next/link";
import { Cards } from "./cards";

export const metadata: Metadata = {
  title:
    "Regularización de Extranjería 2026 por Ciudades | Abogada Especializada",
  description:
    "Consulta la regularización extraordinaria de extranjería 2026 por ciudades en España. Asesoramiento legal rápido y profesional en tu ciudad.",
  keywords: [
    "regularización extranjería 2026 por ciudades",
    "abogada extranjería por ciudad",
    "regularización Madrid",
    "regularización Barcelona",
  ],
  alternates: {
    canonical: "https://puerta-legal.es/ciudades",
  },
};

export default function CitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="section-padding bg-section-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Regularización de Extranjería 2026 por Ciudades
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Asesoramiento legal especializado en regularización extraordinaria
              de extranjería 2026 en todas las ciudades de España. Consulta con
              nuestra abogada experta en tu localidad.
            </p>
          </div>

          <Cards />
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            ¿Tu ciudad no está listada?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Nos desplazamos por toda España para ofrecerte asesoramiento legal
            especializado. Haz tu pre-evaluación gratuita para saber si cumples
            los requisitos y te contactamos.
          </p>
          <Link
            href="/pre-evaluacion"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Haz tu pre-evaluación gratuita
          </Link>
        </div>
      </section>
    </main>
  );
}
