import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectArt } from "./Visuals";
import { TechIcon } from "./TechIcon";

export default function ProjectCard({
  project,
  compact = false,
  selected = false,
}) {
  return (
    <article
      className={`project-card ${compact ? "project-card-compact" : ""}`}
    >
      <Link
        className="project-preview"
        to={`/projects?project=${project.id}`}
        aria-label={`Explore ${project.title}`}
      >
        <ProjectArt theme={project.theme} />
        <span className="preview-arrow">
          <ArrowUpRight size={18} />
        </span>
      </Link>
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>
              <TechIcon name={tag} />
              {tag}
            </span>
          ))}
        </div>
        {!compact && <p>{project.description}</p>}
        {!compact && (
          <div className="project-links">
            {project.demo && (
              <a
                className="button button-primary"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
                <ExternalLink size={13} />
              </a>
            )}
            {project.github && (
              <a
                className="button button-secondary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {!selected && (
              <Link
                className="button button-secondary"
                to={`/projects?project=${project.id}`}
              >
                Explore concept
                <ArrowUpRight size={14} />
              </Link>
            )}
            {!project.demo && !project.github && (
              <span className="links-pending">External links to be added</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
