"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { LinkButton } from "@/components/ui/link-button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
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
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

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
