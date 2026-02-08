import Link from "next/link";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClipboardCheck,
} from "@tabler/icons-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo.src} alt="Logo" className="w-44 h-auto" />
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              Despacho especializado en derecho de extranjería. Ayudamos a
              inmigrantes a regularizar su situación en España con
              profesionalidad y cercanía.
            </p>
          </div>

          {/* Pre-evaluación + Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Pre-evaluación</h4>
            <p className="text-primary-foreground/70 mb-4">
              Comprueba en pocos pasos si puedes optar a la regularización
              extraordinaria 2026.
            </p>
            <Link
              href="/pre-evaluacion"
              className="inline-flex items-center gap-2 text-accent-foreground bg-accent/90 hover:bg-accent px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              <IconClipboardCheck size={18} />
              Haz tu pre-evaluación gratuita
            </Link>
            <h4 className="font-semibold mb-4 mt-8">Contacto</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <IconPhone size={18} />
                <span>600 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <IconMail size={18} />
                <span>info@abogadaextranjeria.es</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-1 space-y-3 text-primary-foreground/70">
            <h4 className="font-semibold mb-4">Ubicación</h4>
            <li className="flex items-start gap-2">
              <IconMapPin size={18} className="mb-0.5" />
              <span>Madrid, España</span>
            </li>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.6469592716644!2d-3.803779524628362!3d40.292649963182896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418ba3d8442cfb%3A0x9f260791e79920e7!2sAv.%20de%20Espa%C3%B1a%2C%20%3A9-11%2C%2028941%20Fuenlabrada%2C%20Madrid!5e1!3m2!1ses!2ses!4v1770484336929!5m2!1ses!2ses"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} Abogada Extranjería. Todos los derechos
              reservados.
            </p>
            <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Aviso legal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
