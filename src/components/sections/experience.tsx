"use client";

import { experiences } from "@/data/experience";
import { SectionShell } from "@/components/section-shell";
import { ExperienceItem } from "./experience/experience-item";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" title="Experience">
      <div className="relative ml-6 border-l border-border pl-10">
        {experiences.map((exp, index) => (
          <ExperienceItem key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
