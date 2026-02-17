"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { SectionShell } from "@/components/section-shell";
import { SocialLinks } from "@/components/ui/social-links";
import { fadeInUp } from "@/lib/motion";

export function ContactSection() {
  return (
    <SectionShell id="contact">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left - CTA */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[48px] lg:leading-[48px]">
            Contact me
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-body sm:text-lg">
            If you would like to get in touch, please use the form or contact me
            through the links below.
          </p>
          <SocialLinks variant="bordered" className="mt-8" />
        </motion.div>

        {/* Right - Form */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </SectionShell>
  );
}
