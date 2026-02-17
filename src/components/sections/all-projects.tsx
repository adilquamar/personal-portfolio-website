"use client";

import { allProjects } from "@/data/all-projects";
import { SectionShell } from "@/components/section-shell";
import { ProjectListItem } from "./all-projects/project-list-item";

export function AllProjectsSection() {
  return (
    <SectionShell id="all-projects" title="All Experience">
      <div className="divide-y divide-border">
        {allProjects.map((project, index) => (
          <ProjectListItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
