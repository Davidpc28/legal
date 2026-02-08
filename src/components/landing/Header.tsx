"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "¿Qué es?", href: "/#que-es" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Beneficios", href: "/#beneficios" },
  { label: "Por qué nosotros", href: "/#por-que-nosotros" },
  { label: "Proceso", href: "/#proceso" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePreEvalClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  const isDarkMode = pathname === "/" || pathname.includes('regularizacion-extranjeria');


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo.src}
              alt="Logo"
              className={`w-full max-w-44 h-full `}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isDarkMode ?
                    isScrolled
                      ? "text-foreground"
                      : "text-primary-foreground/90"
                      :'text-foreground'

                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/pre-evaluacion" onClick={handlePreEvalClick}>
                Pre-evaluación gratuita
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <IconX
                size={24}
                className={`${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
              />
            ) : (
              <IconMenu2
                size={24}
                className={`${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-card border-t"
        >
          <nav className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-foreground font-medium py-2 hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2"
            >
              <Link href="/pre-evaluacion" onClick={handlePreEvalClick}>
                Pre-evaluación gratuita
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
