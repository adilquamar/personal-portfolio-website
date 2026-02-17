import type { Variants } from "framer-motion";

/*
 * Reusable Framer Motion animation presets.
 *
 * Usage — spread onto a motion component and override as needed:
 *   <motion.div {...fadeInUp} />
 *   <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} />
 */

// ---------------------------------------------------------------------------
// Viewport-triggered fade-in presets (spread as props)
// ---------------------------------------------------------------------------

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export const fadeInUpLg = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

// ---------------------------------------------------------------------------
// Hover & tap presets (pass to whileHover / whileTap)
// ---------------------------------------------------------------------------

export const hoverLift = { y: -4 };
export const hoverScale = { scale: 1.1, y: -2 };
export const tapScale = { scale: 0.95 };

// ---------------------------------------------------------------------------
// Hero stagger variants (use with variants={} / initial / animate)
// ---------------------------------------------------------------------------

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
