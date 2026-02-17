"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";

interface EducationCardProps {
  icon: LucideIcon;
  title: string;
  delay?: number;
  children: ReactNode;
}

export function EducationCard({
  icon: Icon,
  title,
  delay = 0,
  children,
}: EducationCardProps) {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay }}
      className="rounded-2xl border border-border bg-card p-8"
    >
      <div className="mb-6 inline-flex rounded-xl border border-border bg-muted p-3">
        <Icon className="h-6 w-6 text-slate-accent dark:text-slate-light" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      {children}
    </motion.div>
  );
}
