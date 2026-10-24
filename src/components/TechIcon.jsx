import {
  Atom,
  Braces,
  Code2,
  Database,
  Cloud,
  GitBranch,
  Container,
  Figma,
  Terminal,
  Server,
  Layers,
  Send,
  Workflow,
  Box,
  Cpu,
  LayoutTemplate,
  Wind,
  Github,
} from "lucide-react";

const brands = {
  React: [Atom, "#61dafb"],
  "React Native": [Atom, "#61dafb"],
  JavaScript: ["JS", "#f7df1e"],
  TypeScript: ["TS", "#3178c6"],
  HTML5: ["5", "#ed6234"],
  CSS3: ["3", "#3e9ce8"],
  "Tailwind CSS": [Wind, "#38bdf8"],
  Bootstrap: ["B", "#a97aff"],
  "Node.js": [Server, "#6ec866"],
  Express: ["EX", "#d9dfed"],
  "REST APIs": [Workflow, "#a78bfa"],
  MongoDB: [Database, "#54c17b"],
  MySQL: [Database, "#63b6dc"],
  PostgreSQL: [Database, "#6c9cdd"],
  AWS: [Cloud, "#ffb347"],
  Vercel: ["V", "#f1f5ff"],
  Netlify: [Layers, "#40d9cf"],
  Docker: [Container, "#319aee"],
  "GitHub Actions": [Github, "#c6afff"],
  "CI / CD": [Workflow, "#a3b8ff"],
  Git: [GitBranch, "#ef775b"],
  GitHub: [Github, "#eef2ff"],
  "VS Code": [Code2, "#40a8ee"],
  Figma: [Figma, "#e696d1"],
  Postman: [Send, "#ff986f"],
  Vite: [Cpu, "#c394ff"],
  "Responsive design": [LayoutTemplate, "#b8a0ff"],
};
export function TechIcon({ name, className = "" }) {
  const [Icon, color] = brands[name] || [Terminal, "#bb9aff"];
  return (
    <span
      className={`tech-icon ${className}`}
      style={{ "--tech-color": color }}
      aria-hidden="true"
    >
      {typeof Icon === "string" ? (
        <b
          className={`tech-letter ${name === "HTML5" || name === "CSS3" ? "shield-letter" : ""}`}
        >
          {Icon}
        </b>
      ) : (
        <Icon strokeWidth={1.65} />
      )}
    </span>
  );
}
export function TechTile({ name }) {
  return (
    <div className="tech-tile">
      <TechIcon name={name} />
      <span>{name}</span>
    </div>
  );
}
