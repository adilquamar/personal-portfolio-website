"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

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
        className="group overflow-hidden rounded-2xl border border-white-5 bg-card"
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-dark-card to-dark-card opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8">
            <span className="text-2xl font-bold text-foreground/30 text-center">
              {project.title}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 sm:p-8">
          {/* Title & Links */}
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-xl font-bold text-foreground">
              {project.title}
            </h3>
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white-10 p-2 text-muted-foreground transition-colors hover:border-white-20 hover:text-foreground"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white-10 p-2 text-muted-foreground transition-colors hover:border-white-20 hover:text-foreground"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="mb-5 text-sm leading-relaxed text-text-body">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-white-5 bg-white-5 px-2.5 py-1 text-xs font-medium text-text-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
