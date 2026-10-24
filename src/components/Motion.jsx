import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const reduced = useReducedMotion();
  const Component = as === "section" ? motion.section : motion.div;
  return (
    <Component
      className={className}
      initial={false}
      whileInView={reduced ? {} : { y: [18, 0], opacity: [0.72, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
export function HeroLine({ children, delay = 0, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      className={className}
      initial={false}
      animate={
        reduced ? {} : { y: [12, 0], filter: ["blur(5px)", "blur(0px)"] }
      }
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  );
}
