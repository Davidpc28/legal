import { Metadata } from "next";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import RequirementsSection from "@/components/landing/RequirementsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import UrgencySection from "@/components/landing/UrgencySection";
import ContactFormSection from "@/components/landing/ContactFormSection";

export const metadata: Metadata = {
  title: "Regularización Extraordinaria 2026 | Consulta Legal Especializada",
  description:
    "Oportunidad única: regulariza tu situación en España del 1 de abril al 30 de junio de 2026. Asesoramiento legal especializado en extranjería.",
  keywords: [
    "regularización 2026",
    "extranjería España",
    "permiso de residencia",
    "abogada extranjería",
  ],
  alternates: {
    canonical: "https://puerta-legal.es",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatIsSection />
      <BenefitsSection />
      <RequirementsSection />
      <WhyUsSection />
      <ProcessSection />
      <UrgencySection />
      <ContactFormSection />
    </main>
  );
}
