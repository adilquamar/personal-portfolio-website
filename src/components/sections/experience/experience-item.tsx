"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { Experience } from "@/data/experience";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full border border-background bg-slate-accent shadow-[0_0_0_3px_rgba(100,116,139,0.1)]" />

      {/* Content */}
      <div className="space-y-3">
        {/* Title & Date */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold text-foreground">
            {experience.title}
          </h3>
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-accent dark:text-slate-light">
            <Calendar className="h-3.5 w-3.5" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Company */}
        <p className="text-lg font-medium text-text-muted">
          {experience.company}
        </p>

        {/* Description */}
        <p className="text-base leading-relaxed text-text-body">
          {experience.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
