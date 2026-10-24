import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { TechIcon } from "./TechIcon";
import { Code2, Check } from "lucide-react";

export function CodeWorkspace() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 70, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  function tilt(event) {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }
  return (
    <div
      className="workspace-scene"
      onPointerMove={tilt}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      role="img"
      aria-label="Futuristic laptop with colorful code and floating technology icons"
    >
      <div className="workspace-glow" />
      <div className="workspace-orbit orbit-one" />
      <div className="workspace-orbit orbit-two" />
      <motion.div
        className="laptop-tilt"
        style={reduced ? {} : { rotateX, rotateY }}
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}assets/developer-laptop.webp`}
          className="laptop-image"
          alt=""
          width="1200"
          height="800"
          fetchPriority="high"
          animate={reduced ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      {[
        ["React", "float-react"],
        ["TypeScript", "float-typescript"],
        ["Node.js", "float-node"],
        ["JavaScript", "float-javascript"],
      ].map(([name, className], i) => (
        <motion.div
          key={name}
          className={`floating-tech ${className}`}
          aria-hidden="true"
          animate={reduced ? {} : { y: [0, -8, 0], rotate: [-4, 3, -4] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        >
          <TechIcon name={name} />
        </motion.div>
      ))}
      <div className="code-caption" aria-hidden="true">
        <Code2 size={14} />
        <code>ideas.toReality()</code>
        <span>
          <Check size={11} /> building
        </span>
      </div>
      <span className="workspace-star star-one" />
      <span className="workspace-star star-two" />
      <span className="workspace-star star-three" />
    </div>
  );
}
export function ProjectArt({ theme }) {
  return (
    <div className={`project-art art-${theme}`}>
      <img
        src={`${import.meta.env.BASE_URL}assets/project-${theme}.webp`}
        width="960"
        height="640"
        loading="lazy"
        decoding="async"
        alt=""
      />
      <span className="concept-label">Concept preview</span>
    </div>
  );
}
