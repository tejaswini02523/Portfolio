import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal } from "./Motion";

export function ButtonLink({
  to,
  children,
  secondary = false,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
export function PageIntro({ title, children }) {
  return (
    <div className="page-intro">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
export function SocialLinks() {
  return (
    <div className="social-links">
      {[
        [Github, profile.github, "GitHub"],
        [Linkedin, profile.linkedin, "LinkedIn"],
        [Mail, profile.email ? `mailto:${profile.email}` : "", "Email"],
      ]
        .filter(([, url]) => url)
        .map(([Icon, url, label]) => (
          <a
            key={label}
            href={url}
            aria-label={label}
            target={label === "Email" ? undefined : "_blank"}
            rel="noreferrer"
          >
            <Icon size={18} />
          </a>
        ))}
      <Link to="/contact" aria-label="Contact Tejaswini">
        <Mail size={18} />
      </Link>
    </div>
  );
}
export function ResumeLink({ className = "" }) {
  const files = import.meta.glob("/public/**/*.pdf", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const available =
    profile.resume?.url && files[`/public${profile.resume.url}`];
  return available ? (
    <a
      className={`button button-secondary ${className}`}
      href={available}
      download={profile.resume.filename || true}
    >
      Download resume
      <Download size={16} />
    </a>
  ) : null;
}
export function ContactBanner() {
  return (
    <Reveal className="contact-banner">
      <div>
        <h2>Have an idea? Let’s build it.</h2>
        <p>Good conversations are where great projects begin.</p>
      </div>
      <ButtonLink to="/contact">Get in touch</ButtonLink>
    </Reveal>
  );
}
