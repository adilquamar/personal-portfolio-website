"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <section id={id} className={cn("scroll-mt-20 py-16", className)}>
      <div className="mx-auto max-w-[857px] px-6 lg:px-12">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
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
