"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { education, coursework } from "@/data/education";
import { SectionShell } from "@/components/section-shell";
import { EducationCard } from "./education/education-card";
import { TechTag } from "@/components/ui/tech-tag";

export function EducationSection() {
  return (
    <SectionShell id="education" title="Education">
      <div className="grid gap-8 sm:grid-cols-2">
        {/* University Card */}
        <EducationCard icon={GraduationCap} title={education.institution}>
          <p className="mt-2 text-base text-text-body">{education.degree}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <TechTag>{education.gpa}</TechTag>
            <TechTag>{education.period}</TechTag>
            {education.honors.map((honor) => (
              <TechTag key={honor} variant="accent">
                {honor}
              </TechTag>
            ))}
          </div>
        </EducationCard>

        {/* Coursework Card */}
        <EducationCard icon={BookOpen} title="Notable Coursework" delay={0.1}>
          <ul className="mt-4 space-y-3">
            {coursework.map((course) => (
              <li
                key={course.id}
                className="flex items-center gap-3 text-sm text-text-body"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-accent" />
                {course.name}
              </li>
            ))}
          </ul>
        </EducationCard>
      </div>
    </SectionShell>
  );
}
