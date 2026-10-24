import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectArt } from "./Visuals";
export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        className="project-preview"
        to={`/projects?project=${project.id}`}
        aria-label={`Explore ${project.title}`}
      >
        <ProjectArt theme={project.theme} />
        <span className="preview-arrow">
          <ArrowUpRight size={22} />
        </span>
      </Link>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live demo <ExternalLink size={14} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              Source <Github size={14} />
            </a>
          )}
          {!project.demo && !project.github && (
            <span>Concept preview · links coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
