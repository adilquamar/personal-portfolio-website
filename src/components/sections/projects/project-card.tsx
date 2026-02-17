"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { LinkButton } from "@/components/ui/link-button";
import { TechTagList } from "@/components/ui/tech-tag";
import { fadeInUpLg, hoverLift } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      {...fadeInUpLg}
      transition={{ ...fadeInUpLg.transition, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={hoverLift}
        transition={{ duration: 0.2 }}
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        {/* Title */}
        <h3 className="mb-4 text-xl font-bold text-foreground">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech Tags */}
        <TechTagList items={project.technologies} className="mb-6" />

        {/* Action Buttons */}
        {(project.githubUrl || project.websiteUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <LinkButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </LinkButton>
            )}
            {project.websiteUrl && (
              <LinkButton
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </LinkButton>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
