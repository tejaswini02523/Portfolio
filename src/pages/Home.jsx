import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  BriefcaseBusiness,
  Infinity as InfinityIcon,
} from "lucide-react";
import { CodeWorkspace } from "../components/Visuals";
import { HeroLine, Reveal } from "../components/Motion";
import { TechTile } from "../components/TechIcon";
import {
  ButtonLink,
  ResumeLink,
  SocialLinks,
  ContactBanner,
} from "../components/UI";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

export default function Home() {
  return (
    <div className="container home-page">
      <section className="hero">
        <div className="hero-copy">
          <h1>
            <HeroLine className="hero-salutation">Hi, I’m</HeroLine>
            <HeroLine delay={0.08}>{profile.name}</HeroLine>
            <HeroLine delay={0.16} className="gradient-text">
              {profile.fullName.split(" ").slice(1).join(" ")}
            </HeroLine>
          </h1>
          <HeroLine delay={0.24} className="hero-role">
            {profile.role} <span>·</span> Creative problem solver
          </HeroLine>
          <p className="hero-description">
            Turning ideas into thoughtful web experiences. I bring a curious
            mind, clean code, and a little creativity to every detail.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/projects">View my work</ButtonLink>
            <ResumeLink />
            <ButtonLink to="/contact" secondary>
              Let’s connect
            </ButtonLink>
          </div>
          <SocialLinks />
        </div>
        <CodeWorkspace />
      </section>
      <Reveal className="stats-grid">
        {[
          [Layers3, "04", "Project concepts"],
          [BriefcaseBusiness, "03", "Career roles"],
          [Code2, "06", "Technology areas"],
          [InfinityIcon, "Always", "Learning & growing"],
        ].map(([Icon, value, label]) => (
          <div className="stat-card" key={label}>
            <Icon size={19} />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </Reveal>
      <Reveal as="section" className="home-tech">
        <h2>Tech stack I work with</h2>
        <div className="home-tech-grid">
          {["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"].map(
            (name) => (
              <TechTile key={name} name={name} />
            ),
          )}
        </div>
        <p className="subtle-note">
          An editable technology showcase. Skills are being curated.
        </p>
      </Reveal>
      <section id="selected-work" className="section featured-section">
        <div className="section-heading">
          <div>
            <h2>Featured projects</h2>
            <p>A glimpse of ideas across learning, rewards, and connection.</p>
          </div>
          <Link className="small-outline-link" to="/projects">
            View all projects <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
        <p className="subtle-note">
          Illustrative concept artwork; verified case studies and links can be
          added.
        </p>
      </section>
      <ContactBanner />
    </div>
  );
}
