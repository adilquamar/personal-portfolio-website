"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-[857px] px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex items-center gap-3"
        >
          <div className="h-[2px] w-8 bg-cyan" />
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-6 border-l border-border pl-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full border border-background bg-cyan shadow-[0_0_0_3px_rgba(0,211,243,0.1)]" />

              {/* Content */}
              <div className="space-y-3">
                {/* Title & Date */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-cyan-80">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Company */}
                <p className="text-lg font-medium text-text-muted">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-base leading-relaxed text-text-body">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white-5 bg-white-5 px-2 py-1 text-xs font-medium text-text-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
