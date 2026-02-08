"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type StepperStep = {
  id: number;
  label: string;
  completed?: boolean;
  active?: boolean;
};

type StepperProps = {
  steps: StepperStep[];
  currentStep: number;
  className?: string;
};

const stepItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.3 },
  }),
};

const circleVariants = {
  inactive: { scale: 1 },
  active: {
    scale: 1.08,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
  completed: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const lineVariants = {
  empty: { scaleX: 0, originX: 0 },
  filled: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <nav aria-label="Progreso" className={cn("w-full pt-6", className)}>
      <ol className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.completed ?? index < currentStep;
          const isActive = step.active ?? index === currentStep;
          const isPast = index < currentStep;

          return (
            <motion.li
              key={step.id}
              custom={index}
              variants={stepItemVariants}
              initial="hidden"
              animate="visible"
              className={cn(
                "flex flex-1 flex-col items-center last:flex-none h-24",
                index < steps.length - 1 && "relative",
              )}
              aria-current={isActive ? "step" : undefined}
            >
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-4 -translate-y-1/2 h-0.5 w-full -translate-x-1/2 overflow-hidden rounded-full bg-muted"
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary"
                    variants={lineVariants}
                    initial="empty"
                    animate={isPast ? "filled" : "empty"}
                  />
                </span>
              )}
              <motion.span
                variants={circleVariants}
                animate={
                  isActive ? "active" : isCompleted ? "completed" : "inactive"
                }
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium",
                  isCompleted &&
                    "border-primary bg-primary text-primary-foreground",
                  isActive &&
                    !isCompleted &&
                    "border-primary bg-background text-primary ring-2 ring-primary/30 ring-offset-2",
                  !isActive &&
                    !isCompleted &&
                    "border-muted bg-muted/50 text-muted-foreground",
                )}
              >
                <AnimatePresence mode="wait">
                  {isCompleted ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                    >
                      <Check className="h-4 w-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="num"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-semibold"
                    >
                      {step.id}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.span>
              <motion.span
                className={cn(
                  "mt-2 text-xs font-medium text-center max-w-[80px] sm:max-w-none",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
                layout
              >
                {step.label}
              </motion.span>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}
