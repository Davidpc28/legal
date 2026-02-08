"use client";


import { citiesList } from "@/lib/cities";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { motion } from "framer-motion";

export const Cards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {citiesList.map((city, idx) => (
        <motion.div
          key={city.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.07 * idx, duration: 0.45, ease: "easeOut" }}
        >
          <Link
            href={`/regularizacion-extranjeria/${city.slug}`}
            className="block h-full group"
            tabIndex={0}
          >
            <div className="relative h-full rounded-xl overflow-hidden shadow-md bg-white dark:bg-section-subtle border border-border transition-all duration-200 hover:shadow-xl focus:shadow-xl cursor-pointer">
              {/* City Main Image and Overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80 group-focus:opacity-80" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 z-20">
                  <h2 className="font-serif text-2xl font-bold text-primary-foreground drop-shadow mb-1">
                    {city.name}
                  </h2>
                  <p className="text-base text-primary-foreground/85 font-medium drop-shadow">
                    {city.region}
                  </p>
                </div>
              </div>
              {/* Info Reveal */}
              <motion.div
                initial={false}
                animate={{
                  opacity: [0, 1],
                  y: [20, 0],
                  pointerEvents: "none", // until hovered
                }}
                className="pointer-events-none"
                style={{}}
              />
              <div
                className="absolute inset-0 flex flex-col justify-center items-center bg-white/95 dark:bg-section-subtle/95 p-7 z-30 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus:opacity-100 group-focus:pointer-events-auto transition-all duration-300"
              >
                <p className="text-muted-foreground text-base leading-relaxed text-center mb-5">
                  Asesoramiento legal en regularización de extranjería 2026 en <b>{city.name}</b>. Consulta especializada y profesional para tu proceso de regularización.
                </p>
                <div className="mt-2 text-accent font-semibold flex items-center gap-2">
                  Ver detalles <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
