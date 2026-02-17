"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { fadeInUp } from "@/lib/motion";

export function AboutSection() {
  return (
    <SectionShell id="about" title="About Me">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
        {/* Photo */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          className="flex-shrink-0"
        >
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border border-border lg:mx-0 lg:h-72 lg:w-72">
            <Image
              src="/headshot.png"
              alt="Adil Quamar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 256px, 288px"
              priority
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl border border-slate-accent -z-10" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <p className="text-lg leading-relaxed text-text-body">
            I am a Software Development Engineer at{" "}
            <strong className="text-foreground">Amazon Web Services (AWS)</strong>,
            specializing in building and scaling management infrastructure for{" "}
            <strong className="text-foreground">Tier 1 cloud services</strong>.
            Currently, I lead full-stack initiatives for the{" "}
            <strong className="text-foreground">AWS API Gateway</strong> console,
            where I engineer the management interfaces for features ranging from{" "}
            <strong className="text-foreground">Generative AI tool discovery (MCP)</strong>{" "}
            to dynamic routing systems that process millions of invocations daily.
          </p>

          <p className="text-lg leading-relaxed text-text-body">
            Before AWS, I graduated{" "}
            <strong className="text-foreground">Magna Cum Laude</strong> from{" "}
            <strong className="text-foreground">UC Irvine</strong> and led a
            computer vision team developing autonomous drone software. I thrive at
            the intersection of complex cloud architecture and intuitive developer
            experience.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
