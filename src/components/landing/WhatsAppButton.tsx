"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/34600000000?text=Hola,%20quiero%20información%20sobre%20la%20regularización%20extraordinaria%202026",
      "_blank",
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <IconBrandWhatsapp size={28} className="text-white" />
    </button>
  );
};

export default WhatsAppButton;
