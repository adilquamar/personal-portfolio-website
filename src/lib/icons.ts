import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Shared mapping from social link `icon` key → Lucide component.
 * Used by SocialLinks, Footer, Contact, and any future consumer.
 */
export const socialIconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};
