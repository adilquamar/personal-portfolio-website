"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { education, coursework } from "@/data/education";
import { SectionShell } from "@/components/section-shell";
import { EducationCard } from "./education/education-card";

export function EducationSection() {
  return (
    <SectionShell id="education" title="Education">
      <div className="grid gap-8 sm:grid-cols-2">
        {/* University Card */}
        <EducationCard icon={GraduationCap} title={education.institution}>
          <p className="mt-2 text-base text-text-body">{education.degree}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded border border-border bg-muted px-2.5 py-1 text-sm font-medium text-muted-foreground">
              {education.gpa}
            </span>
            <span className="rounded border border-border bg-muted px-2.5 py-1 text-sm font-medium text-muted-foreground">
              {education.period}
            </span>
            {education.honors.map((honor) => (
              <span
                key={honor}
                className="rounded border border-slate-accent/30 bg-slate-accent/10 px-2.5 py-1 text-sm font-medium text-slate-dark dark:text-slate-light"
              >
                {honor}
              </span>
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
