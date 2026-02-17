"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectListItemProps {
  project: Project;
  index: number;
}

export function ProjectListItem({ project, index }: ProjectListItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="py-6 sm:py-8">
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
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                source
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                live
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
