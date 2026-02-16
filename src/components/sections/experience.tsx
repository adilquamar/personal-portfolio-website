"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { ExperienceItem } from "./experience/experience-item";

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
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
