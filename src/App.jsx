import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Atom,
  Braces,
  Database,
  Cloud,
  GitBranch,
  Wrench,
  LayoutTemplate,
  Server,
  Github,
  Mail,
  Linkedin,
  Check,
  AlertCircle,
  LoaderCircle,
  GraduationCap,
  Lightbulb,
  Target,
  Layers,
  Copy,
  Send,
} from "lucide-react";
import { Header, Footer, RouteEffects } from "./components/Layout";
import { CodeWorkspace } from "./components/Visuals";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { experience } from "./data/experience";
import { profile } from "./data/profile";
import { validateContact } from "./lib/contact";

const ButtonLink = ({ to, children, secondary = false }) => (
  <Link
    className={`button ${secondary ? "button-secondary" : "button-primary"}`}
    to={to}
  >
    {children}
    <ArrowUpRight size={17} />
  </Link>
);
function PageIntro({ title, children }) {
  return (
    <div className="page-intro">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
function ContactBanner() {
  return (
    <section className="contact-banner">
      <div>
        <h2>
          Great things start
          <br />
          with a conversation.
        </h2>
        <p>Have an idea in mind? Let's explore it together.</p>
      </div>
      <ButtonLink to="/contact">Let's build something</ButtonLink>
    </section>
  );
}
function Timeline({ compact = false }) {
  return (
    <div className="timeline">
      {experience.map((job, i) => (
        <article className="timeline-item" key={job.role + job.company}>
          <div className="timeline-node">
            {i === 0 ? <Code2 size={18} /> : <span />}
          </div>
          <div className="timeline-top">
            <div>
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
            </div>
            <span className="date-label">{job.dates}</span>
          </div>
          {!compact && (
            <ul>
              {job.duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <h1>
            I turn ideas into
            <br />
            <span>digital experiences.</span>
          </h1>
          <p className="hero-description">
            I am Tejaswini, a software developer with a creative mindset.
            <br className="desktop-break" /> Building thoughtful interfaces, one
            detail at a time.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/projects">Explore my work</ButtonLink>
            <ButtonLink to="/contact" secondary>
              Get in touch
            </ButtonLink>
          </div>
          <div className="hero-footnote">
            <span className="tiny-dot" /> Code with purpose. Create with care.
          </div>
        </div>
        <CodeWorkspace />
        <a
          className="scroll-cue"
          href="#selected-work"
          onClick={(event) => {
            event.preventDefault();
            document
              .getElementById("selected-work")
              ?.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              });
          }}
        >
          <span /> Scroll to explore
        </a>
      </section>
      <section
        className="tech-strip container"
        aria-label="Technology showcase"
      >
        <span>Ideas come to life with</span>
        <div>
          <span>
            <Atom /> React
          </span>
          <span>
            <Braces /> JavaScript
          </span>
          <span>
            <Code2 /> Tailwind CSS
          </span>
          <span>
            <Server /> Node.js
          </span>
          <span>
            <GitBranch /> Git
          </span>
          <span>
            <Database /> MongoDB
          </span>
        </div>
      </section>
      <section id="selected-work" className="section container">
        <div className="section-heading">
          <div>
            <h2>
              A few things I've been building<span>.</span>
            </h2>
            <p>From playful ideas to purposeful digital experiences.</p>
          </div>
          <Link className="text-link" to="/projects">
            View all projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <p className="content-note">
          Illustrative interface concepts. Project details and links are being
          curated.
        </p>
      </section>
      <section className="about-home container section">
        <div>
          <h2>
            Curiosity drives me.
            <br />
            <span>Craft keeps me going.</span>
          </h2>
          <p>
            I enjoy connecting the dots between design and development,
            exploring how a small interaction can make an experience feel more
            intuitive.
          </p>
          <Link className="text-link" to="/about">
            A little more about me <ArrowRight size={17} />
          </Link>
        </div>
        <div className="portfolio-stats">
          <div>
            <strong>04</strong>
            <span>Project concepts</span>
          </div>
          <div>
            <strong>06</strong>
            <span>Technology areas</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Career roles</span>
          </div>
          <p>A growing collection of work, learning, and ideas.</p>
        </div>
      </section>
      <div className="container">
        <ContactBanner />
      </div>
    </>
  );
}
function About() {
  return (
    <div className="container page">
      <PageIntro
        title={
          <>
            A curious mind.
            <br />
            <span>A builder at heart.</span>
          </>
        }
      >
        I’m Tejaswini, a software developer interested in the space where
        thoughtful design meets useful technology.
      </PageIntro>
      <section className="about-layout">
        <div className="biography">
          <h2>Making ideas tangible.</h2>
          <p>
            I enjoy exploring interfaces, breaking ideas into manageable pieces,
            and shaping them into experiences people can use. This portfolio
            brings together project concepts, a technology showcase, and my
            career journey.
          </p>
          <p>
            My approach is simple: understand the problem, care about the
            details, and keep learning along the way.
          </p>
          <div className="education">
            <GraduationCap size={27} />
            <div>
              <h3>{profile.education.qualification}</h3>
              <p>{profile.education.institution}</p>
            </div>
          </div>
        </div>
        <div className="about-code">
          <Code2 size={36} />
          <p>
            Think it through.
            <br />
            Make it work.
            <br />
            <span>Make it feel right.</span>
          </p>
          <span>DESIGN × DEVELOPMENT</span>
        </div>
      </section>
      <section className="section">
        <h2>What shapes my approach</h2>
        <div className="strength-grid">
          {[
            [
              Lightbulb,
              "Curiosity",
              "Ask questions, explore possibilities, and keep room for a better idea.",
            ],
            [
              Target,
              "Attention to detail",
              "Give the small interactions as much thought as the big picture.",
            ],
            [
              Layers,
              "Clear thinking",
              "Turn complex ideas into understandable, manageable pieces.",
            ],
          ].map(([Icon, title, copy]) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>The journey so far</h2>
          <Link className="text-link" to="/experience">
            Explore experience <ArrowUpRight size={16} />
          </Link>
        </div>
        <Timeline compact />
      </section>
      <ContactBanner />
    </div>
  );
}
function Skills() {
  const icons = {
    frontend: LayoutTemplate,
    backend: Server,
    database: Database,
    cloud: Cloud,
    devops: GitBranch,
    tools: Wrench,
  };
  return (
    <div className="container page">
      <PageIntro
        title={
          <>
            The tools behind
            <br />
            <span>the experience.</span>
          </>
        }
      >
        A connected toolkit for turning a rough idea into something you can
        interact with.
      </PageIntro>
      <p className="notice">
        <AlertCircle size={17} /> Editable technology showcase; professional
        proficiency is not yet verified.
      </p>
      <div className="skills-grid">
        {skills.map((group) => {
          const Icon = icons[group.icon];
          return (
            <section className="skill-group" key={group.title}>
              <Icon size={27} />
              <h2>{group.title}</h2>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>
                    <Check size={14} />
                    {item}
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <ContactBanner />
    </div>
  );
}
function Projects() {
  const [params, setParams] = useSearchParams();
  const [filter, setFilter] = useState("All projects");
  const categories = ["All projects", "Web apps", "Interactive", "E-commerce"];
  const selected = projects.find(
    (project) => project.id === params.get("project"),
  );
  const visible = projects.filter(
    (project) =>
      (filter === "All projects" || project.category === filter) &&
      (!selected || project.id === selected.id),
  );
  return (
    <div className="container page">
      <PageIntro
        title={
          <>
            Ideas, brought
            <br />
            <span>into focus.</span>
          </>
        }
      >
        A selection of project concepts across learning, rewards, connection,
        and commerce.
      </PageIntro>
      <div className="filter-row" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            key={category}
            aria-pressed={filter === category && !selected}
            onClick={() => {
              setFilter(category);
              setParams({});
            }}
            className={
              filter === category && !selected ? "filter active" : "filter"
            }
          >
            {category}
          </button>
        ))}
      </div>
      {selected && (
        <div className="selected-project">
          <span>Exploring {selected.title}</span>
          <button
            className="text-link"
            onClick={() => {
              setFilter("All projects");
              setParams({});
            }}
          >
            Show all projects <ArrowRight size={16} />
          </button>
        </div>
      )}
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p className="content-note">
        Artwork and descriptions are illustrative concepts based on the supplied
        project names. Verified stacks, case studies, and destination links can
        be added to the project data.
      </p>
      <ContactBanner />
    </div>
  );
}
function Experience() {
  return (
    <div className="container page experience-page">
      <PageIntro
        title={
          <>
            Every role,
            <br />
            <span>a new perspective.</span>
          </>
        }
      >
        A career journey across technical execution and software development.
      </PageIntro>
      <Timeline />
      <p className="notice">
        <AlertCircle size={18} /> Role titles and employers were supplied.
        Employment dates, duties, and achievements will be published after
        verification.
      </p>
      <ContactBanner />
    </div>
  );
}

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
  async function submit(event) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("invalid");
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }
  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(
        `From: ${values.name} <${values.email}>\n\n${values.message}`,
      );
      setStatus("copied");
    } catch {
      setStatus("copy-error");
    }
  }
  return (
    <div className="container page">
      <PageIntro
        title={
          <>
            Have something in mind?
            <br />
            <span>Let’s talk.</span>
          </>
        }
      >
        A project, a collaboration, or a good conversation. It all starts with
        hello.
      </PageIntro>
      <div className="contact-layout">
        <aside className="contact-details">
          <h2>Connect with me</h2>
          <p>Explore my work on GitHub, or leave a message using the form.</p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github />
            <span>
              GitHub<small>@tejaswini02523</small>
            </span>
            <ArrowUpRight size={18} />
          </a>
          {profile.email ? (
            <a href={`mailto:${profile.email}`}>
              <Mail />
              <span>
                Email<small>{profile.email}</small>
              </span>
              <ArrowUpRight size={18} />
            </a>
          ) : (
            <div className="contact-pending">
              <Mail />
              <span>
                Public email<small>To be added after confirmation</small>
              </span>
            </div>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin />
              LinkedIn
              <ArrowUpRight size={18} />
            </a>
          )}
        </aside>
        <form className="contact-form" onSubmit={submit} noValidate>
          <h2>Let's hear your idea.</h2>
          <div className="form-pair">
            {[
              ["name", "Your name", "Alex Morgan", "text"],
              ["email", "Email address", "alex@example.com", "email"],
            ].map(([name, label, placeholder, type]) => (
              <div className="field" key={name}>
                <label htmlFor={name}>
                  {label} <span aria-hidden="true">*</span>
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  required
                  autoComplete={name}
                  maxLength={name === "name" ? 100 : 254}
                  placeholder={placeholder}
                  value={values[name]}
                  aria-invalid={!!errors[name]}
                  aria-describedby={errors[name] ? `${name}-error` : undefined}
                  onChange={(e) =>
                    setValues({ ...values, [name]: e.target.value })
                  }
                />
                {errors[name] && (
                  <span className="field-error" id={`${name}-error`}>
                    {errors[name]}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="field">
            <label htmlFor="message">
              Your message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              minLength={20}
              maxLength={5000}
              placeholder="Tell me a little about what you have in mind…"
              value={values.message}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              onChange={(e) =>
                setValues({ ...values, message: e.target.value })
              }
            />
            {errors.message && (
              <span className="field-error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>
          <p className="form-note">
            {endpoint
              ? "Your message will be submitted to the configured contact service."
              : "Message delivery is not connected yet. You can validate and copy your draft, or connect on GitHub."}
          </p>
          <div className="form-actions">
            <button
              className="button button-primary"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <LoaderCircle className="spinner" size={17} /> Sending…
                </>
              ) : (
                <>
                  {endpoint ? "Send message" : "Check message"}
                  <Send size={16} />
                </>
              )}
            </button>
            <button
              className="button button-secondary"
              type="button"
              onClick={copyDraft}
            >
              <Copy size={16} />
              Copy draft
            </button>
          </div>
          <div
            className={`form-status ${status === "error" || status === "invalid" || status === "copy-error" ? "status-error" : ""}`}
            role="status"
            aria-live="polite"
          >
            {
              {
                invalid: "Please correct the highlighted fields.",
                unconfigured:
                  "Your draft is valid. Delivery is not configured; no message was sent. Copy the draft to keep it.",
                sending: "Submitting your message…",
                success:
                  "The contact service accepted your message. Thank you for reaching out.",
                error:
                  "The message could not be submitted. Please try again or use a contact link.",
                copied: "Draft copied to your clipboard. No message was sent.",
                "copy-error":
                  "Clipboard access is unavailable. Select and copy your message manually.",
              }[status]
            }
          </div>
        </form>
      </div>
    </div>
  );
}
function NotFound() {
  return (
    <div className="container page not-found">
      <h1>
        This page took
        <br />a different path.
      </h1>
      <p>Let's get you back to the work.</p>
      <ButtonLink to="/">Back to home</ButtonLink>
    </div>
  );
}
export default function App() {
  return (
    <>
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
        className="skip-link"
      >
        Skip to content
      </a>
      <RouteEffects />
      <Header />
      <motion.main id="main-content" tabIndex={-1} initial={false}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
      <Footer />
    </>
  );
}
