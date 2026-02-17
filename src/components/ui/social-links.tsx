"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { socialIconMap } from "@/lib/icons";
import { hoverScale, tapScale } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// SocialLinks — renders social icon links with optional bordered style.
// Replaces duplicated icon-map + render logic in Footer and Contact.
// ---------------------------------------------------------------------------

interface SocialLinksProps {
  /** "default" = bare icons, "bordered" = icons inside rounded border boxes */
  variant?: "default" | "bordered";
  className?: string;
}

export function SocialLinks({
  variant = "default",
  className,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      {socialLinks.map((link) => {
        const Icon = socialIconMap[link.icon];
        return (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={hoverScale}
            whileTap={tapScale}
            className={cn(
              "text-muted-foreground transition-colors hover:text-foreground",
              variant === "bordered" &&
                "rounded-lg border border-border p-2.5 hover:border-foreground/30"
            )}
            aria-label={link.name}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        );
      })}
    </div>
  );
}
