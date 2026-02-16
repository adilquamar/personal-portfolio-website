"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-white-5 bg-card p-8"
    >
      <div className="mb-6 inline-flex rounded-xl border border-white-5 bg-white-5 p-3">
        <Icon className="h-6 w-6 text-cyan" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      {children}
    </motion.div>
  );
}
