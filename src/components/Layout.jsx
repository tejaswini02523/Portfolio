import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Github, Menu, X, Code2 } from "lucide-react";
import { profile } from "../data/profile";
import { ResumeLink } from "./UI";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/contact", "Contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" className="wordmark" aria-label="Tejaswini home">
          <span className="signature">Tejaswini</span>
          <span className="signature-dot">.</span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          {links.map(([path, label]) => (
            <NavLink
              onClick={() => setOpen(false)}
              key={path}
              to={path}
              end={path === "/"}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <ResumeLink className="nav-resume" />
        <Link className="nav-contact" to="/contact">
          Let's talk <ArrowUpRight size={15} />
        </Link>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer container">
      <div>
        <Link to="/" className="footer-name">
          tejaswini<span>.</span>
        </Link>
        <p>Thoughtfully designed. Built with React.</p>
      </div>
      <span>© {new Date().getFullYear()} Tejaswini</span>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="Tejaswini on GitHub"
      >
        <Github size={19} /> GitHub <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}
export function RouteEffects() {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    const page =
      pathname === "/"
        ? "Home"
        : pathname.slice(1).replace(/^./, (c) => c.toUpperCase());
    document.title = `${page} — Tejaswini | Software Developer`;
    document.querySelector('meta[name="description"]').content =
      `${page}: explore Tejaswini's developer portfolio, projects, skills and career.`;
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!first.current)
      document.querySelector("main")?.focus({ preventScroll: true });
    first.current = false;
  }, [pathname]);
  return null;
}
