import { useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PageIntro, ButtonLink } from "../components/UI";
import { Reveal } from "../components/Motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const categories = ["All projects", "Web apps", "Interactive", "E-commerce"];
export default function Projects() {
  const [params, setParams] = useSearchParams();
  const requested = params.get("category") || "All projects";
  const filter = categories.includes(requested) ? requested : "All projects";
  const selected = projects.find((p) => p.id === params.get("project"));
  const visible = projects.filter(
    (p) =>
      (filter === "All projects" || p.category === filter) &&
      (!selected || selected.id === p.id),
  );
  return (
    <div className="container page projects-page">
      <PageIntro title="Projects">
        From playful ideas to purposeful experiences. Here’s a selection of my
        work.
      </PageIntro>
      <div className="filter-row" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            className={`filter ${filter === category && !selected ? "active" : ""}`}
            aria-pressed={filter === category && !selected}
            key={category}
            onClick={() =>
              setParams(category === "All projects" ? {} : { category })
            }
          >
            {category}
          </button>
        ))}
      </div>
      {selected && (
        <button
          className="back-projects text-link"
          onClick={() => setParams({})}
        >
          <ArrowLeft size={16} />
          Back to all projects
        </button>
      )}
      <div className="project-grid">
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.06}>
            <ProjectCard project={project} selected={!!selected} />
          </Reveal>
        ))}
      </div>
      {selected && (
        <section className="project-detail glass-panel">
          <h2>About this concept</h2>
          <p>
            {selected.description} This is an illustrative presentation based on
            the supplied project title.
          </p>
          <p>
            A verified case study, technology details, and live/source
            destinations will be added here when supplied.
          </p>
          <ButtonLink to="/contact">Talk about this project</ButtonLink>
        </section>
      )}
      <p className="subtle-note">
        Project images are illustrative concepts, not screenshots of deployed
        products. Demo and GitHub buttons appear when verified URLs are
        configured.
      </p>
    </div>
  );
}
