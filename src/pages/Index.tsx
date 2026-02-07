import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import RequirementsSection from "@/components/landing/RequirementsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import UrgencySection from "@/components/landing/UrgencySection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <RequirementsSection />
        <BenefitsSection />
        <WhyUsSection />
        <ProcessSection />
        <UrgencySection />
        <ContactFormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
