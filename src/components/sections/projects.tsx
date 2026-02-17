"use client";

import { projects } from "@/data/projects";
import { SectionShell } from "@/components/section-shell";
import { ProjectCard } from "./projects/project-card";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" title="Featured Projects">
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
