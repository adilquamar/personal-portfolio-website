"use client";

import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface CtaButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: LucideIcon;
}

interface HeroCtaProps {
  buttons: CtaButton[];
  variants: Variants;
}

export function HeroCta({ buttons, variants }: HeroCtaProps) {
  return (
    <motion.div variants={variants} className="flex flex-wrap gap-4">
      {buttons.map((button) => {
        const Icon = button.icon;

        if (button.variant === "primary") {
          return (
            <a
              key={button.label}
              href={button.href}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background transition-all duration-200 hover:opacity-90 hover:gap-3"
            >
              {button.label}
              {Icon && <Icon className="h-[18px] w-[18px]" />}
            </a>
          );
        }

        return (
          <a
            key={button.label}
            href={button.href}
            className="inline-flex items-center rounded-lg border border-white-20 px-6 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-white-5"
          >
            {button.label}
            {Icon && <Icon className="ml-2 h-[18px] w-[18px]" />}
          </a>
        );
      })}
    </motion.div>
  );
}
