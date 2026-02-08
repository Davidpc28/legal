"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedMarkerProps {
  children: ReactNode;
  color?: "accent" | "secondary" | "primary";
  delay?: number;
}

export const AnimatedMarker = ({
  children,
  color = "accent",
}: AnimatedMarkerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  const bgColor = {
    accent: "bg-accent/30",
    secondary: "bg-secondary/30",
    primary: "bg-primary/30",
  };

  return (
    <motion.span ref={ref} className="relative inline-block">
      <motion.span
        className={`relative px-1 py-0.5 ${bgColor[color]}`}
        initial={{ backgroundSize: "0% 100%" }}
        animate={
          isInView
            ? { backgroundSize: "100% 100%" }
            : { backgroundSize: "0% 100%" }
        }
        transition={{
          backgroundSize: { duration: 0.8, ease: "easeInOut" },
        }}
        style={{
          background: isInView
            ? {
                accent:
                  "linear-gradient(90deg, transparent 0%, rgba(168, 142, 84, 0.3) 50%, transparent 100%)",
                secondary:
                  "linear-gradient(90deg, transparent 0%, rgba(111, 168, 155, 0.3) 50%, transparent 100%)",
                primary:
                  "linear-gradient(90deg, transparent 0%, rgba(39, 61, 92, 0.3) 50%, transparent 100%)",
              }[color]
            : "transparent",
          backgroundSize: "200% 100%",
          backgroundPosition: isInView ? "100% 0" : "0% 0",
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};
