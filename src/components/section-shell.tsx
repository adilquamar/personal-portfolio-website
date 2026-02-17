"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface SectionShellProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionShell({
  id,
  title,
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-10", className)}>
      <div className="mx-auto max-w-[857px] px-6 lg:px-12">
        {title && (
          <motion.div
            {...fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 flex items-center gap-3"
          >
            <div className="h-[2px] w-8 bg-slate-accent" />
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              {title}
            </h2>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
