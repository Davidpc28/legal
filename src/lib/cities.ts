/**
 * Datos compartidos de ciudades: listado para /ciudades y páginas en /regularizacion-extranjeria/[city].
 * Imágenes: Unsplash (uso gratuito).
 */
const IMG_BASE = "https://images.unsplash.com";

export type CityData = {
  name: string;
  region: string;
  description: string;
  image: string;
  requirements: string[];
  benefits: string[];
};

export const cities: Record<string, CityData> = {
  madrid: {
    name: "Madrid",
    region: "Madrid",
    description:
      "Regularización de extranjería 2026 en Madrid. Asesoramiento legal especializado para obtener tu permiso de residencia y trabajo.",
    image: `${IMG_BASE}/photo-1539037116277-4db20889f2d4?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Madrid de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de trabajo en Madrid",
      "Seguridad jurídica",
      "Acceso a Seguridad Social",
      "Oportunidad de reunificación familiar",
    ],
  },
  barcelona: {
    name: "Barcelona",
    region: "Cataluña",
    description:
      "Regularización de extranjería 2026 en Barcelona. Consulta legal especializada en el proceso de regularización extraordinaria.",
    image: `${IMG_BASE}/photo-1583422409516-2895a77efded?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Barcelona de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de trabajo en Barcelona",
      "Seguridad jurídica garantizada",
      "Acceso a servicios sociales",
      "Posibilidad de regularizar a familiares",
    ],
  },
  valencia: {
    name: "Valencia",
    region: "Comunidad Valenciana",
    description:
      "Asesoramiento legal en regularización de extranjería 2026 en Valencia. Tramitación profesional de tu proceso de regularización.",
    image: `${IMG_BASE}/photo-1605649487212-47bdab064df7?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Valencia de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de residencia y trabajo",
      "Protección legal completa",
      "Acceso a prestaciones sociales",
      "Derecho a reagrupación familiar",
    ],
  },
  sevilla: {
    name: "Sevilla",
    region: "Andalucía",
    description:
      "Regularización de extranjería 2026 en Sevilla. Consulta con abogada especializada en procesos de regularización extraordinaria.",
    image: `${IMG_BASE}/photo-1551884170-09fb70a3a2ed?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Sevilla de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de trabajo autorizado",
      "Seguridad legal",
      "Inclusión en la Seguridad Social",
      "Oportunidades de reunificación",
    ],
  },
  zaragoza: {
    name: "Zaragoza",
    region: "Aragón",
    description:
      "Asesoramiento legal especializado en regularización de extranjería 2026 en Zaragoza. Tramitación rápida y segura.",
    image: `${IMG_BASE}/photo-1578645510444-e5b5e30864ed?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Zaragoza de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Autorización de residencia y trabajo",
      "Seguridad jurídica",
      "Acceso a servicios públicos",
      "Derecho a familiar directo",
    ],
  },
  malaga: {
    name: "Málaga",
    region: "Andalucía",
    description:
      "Regularización extraordinaria 2026 en Málaga. Consulta legal profesional para tu proceso de regularización.",
    image: `${IMG_BASE}/photo-1596484552834-3242e1c8e76d?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Málaga de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de residencia autorizado",
      "Trabajo legal garantizado",
      "Protección social completa",
      "Posibilidad de reagrupación",
    ],
  },
  bilbao: {
    name: "Bilbao",
    region: "País Vasco",
    description:
      "Asesoramiento legal en regularización de extranjería 2026 en Bilbao. Tramitación especializada.",
    image: `${IMG_BASE}/photo-1518699945903-46e028f82f3b?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Bilbao de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de trabajo",
      "Seguridad legal",
      "Acceso a prestaciones",
      "Derecho de familia",
    ],
  },
  alicante: {
    name: "Alicante",
    region: "Comunidad Valenciana",
    description:
      "Regularización de extranjería 2026 en Alicante. Consulta profesional con abogada especializada.",
    image: `${IMG_BASE}/photo-1507525428034-b723cf961d3e?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Alicante de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de residencia y trabajo",
      "Seguridad jurídica",
      "Inclusión en la Seguridad Social",
      "Reunificación familiar",
    ],
  },
  cordoba: {
    name: "Córdoba",
    region: "Andalucía",
    description:
      "Asesoramiento legal en regularización extraordinaria 2026 en Córdoba.",
    image: `${IMG_BASE}/photo-1558642452-9d2a7deb7f62?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Córdoba de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Autorización de residencia",
      "Permiso de trabajo",
      "Seguridad legal",
      "Beneficios sociales",
    ],
  },
  murcia: {
    name: "Murcia",
    region: "Región de Murcia",
    description:
      "Regularización de extranjería 2026 en Murcia. Consulta especializada.",
    image: `${IMG_BASE}/photo-1543783207-ec64e4d95325?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Murcia de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de residencia",
      "Autorización de trabajo",
      "Protección legal",
      "Acceso a servicios",
    ],
  },
  palma: {
    name: "Palma",
    region: "Islas Baleares",
    description:
      "Asesoramiento legal en regularización de extranjería 2026 en Palma.",
    image: `${IMG_BASE}/photo-1506929562872-bb421503ef21?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Palma de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Residencia autorizada",
      "Permiso de trabajo",
      "Seguridad jurídica",
      "Beneficios familiares",
    ],
  },
  oviedo: {
    name: "Oviedo",
    region: "Asturias",
    description:
      "Regularización extraordinaria 2026 en Oviedo. Consulta profesional.",
    image: `${IMG_BASE}/photo-1513326738677-9646ab0f8f58?w=800&q=80`,
    requirements: [
      "Haber llegado a España antes del 31 de diciembre de 2025",
      "Residencia continuada en Oviedo de al menos 2 años",
      "No tener antecedentes penales",
      "Demostrar medios económicos suficientes",
    ],
    benefits: [
      "Permiso de residencia y trabajo",
      "Protección legal",
      "Acceso a seguridad social",
      "Derecho familiar",
    ],
  },
};

/** Listado para la página /ciudades (slug, name, region, image) */
export const citiesList = Object.entries(cities).map(([slug, data]) => ({
  slug,
  name: data.name,
  region: data.region,
  image: data.image,
}));
