import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconHome, IconArrowLeft } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center section-padding bg-section-subtle">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 grande con estilo */}
          <div className="mb-8">
            <span
              className="font-serif text-[10rem] md:text-[14rem] font-bold leading-none text-gradient inline-block"
              aria-hidden
            >
              404
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Página no encontrada
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            La página que buscas no existe o ha sido movida. Puedes volver al
            inicio o explorar nuestros servicios de regularización de
            extranjería.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground cta-glow"
            >
              <Link href="/" className="inline-flex items-center gap-2">
                <IconHome size={20} />
                Volver al inicio
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/5"
            >
              <Link href="/ciudades" className="inline-flex items-center gap-2">
                <IconArrowLeft size={20} />
                Ver ciudades
              </Link>
            </Button>
          </div>

          <Link
            href="/pre-evaluacion"
            className="inline-block mt-8 text-sm text-secondary hover:text-secondary/80 font-medium underline underline-offset-4"
          >
            ¿Quieres saber si puedes optar? Haz tu pre-evaluación gratuita
          </Link>
        </div>
      </div>
    </main>
  );
}
