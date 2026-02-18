"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { LinkButton } from "@/components/ui/link-button";
import { fadeInUp } from "@/lib/motion";

interface ProjectListItemProps {
  project: Project;
  index: number;
}

export function ProjectListItem({ project, index }: ProjectListItemProps) {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="py-6 sm:py-8 first:pt-0 group-last:pb-0">
        {/* Tech Stack */}
        <div className="mb-3 flex flex-wrap gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={tech} className="flex items-center gap-2">
              {tech}
              {i < Math.min(project.technologies.length, 4) - 1 && (
                <span className="text-muted-foreground/50">/</span>
              )}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>

        {/* Action Buttons */}
        {(project.githubUrl || project.websiteUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <LinkButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                source
              </LinkButton>
            )}
            {project.websiteUrl && (
              <LinkButton
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                live
              </LinkButton>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
