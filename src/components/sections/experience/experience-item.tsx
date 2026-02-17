"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import type { Experience } from "@/data/experience";
import { fadeInLeft } from "@/lib/motion";
import { TechTagList } from "@/components/ui/tech-tag";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <motion.div
      {...fadeInLeft}
      transition={{ ...fadeInLeft.transition, delay: index * 0.15 }}
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
        <TechTagList items={experience.technologies} className="pt-1" />
      </div>
    </motion.div>
  );
}
