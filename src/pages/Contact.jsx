import { useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  LoaderCircle,
  Copy,
  Send,
  ArrowUpRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { profile } from "../data/profile";
import { validateContact } from "../lib/contact";
import { PageIntro } from "../components/UI";
import { Reveal } from "../components/Motion";

function ContactCard({ icon: Icon, title, value, href, tone }) {
  const content = (
    <>
      <span className={`contact-card-icon ${tone}`}>
        <Icon size={23} />
      </span>
      <span className="contact-card-copy">
        <strong>{title}</strong>
        <small>{value || "Details to be added"}</small>
      </span>
      {href && <ArrowUpRight size={16} className="contact-card-arrow" />}
    </>
  );
  return href ? (
    <a
      className="contact-card"
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
    >
      {content}
    </a>
  ) : (
    <div className="contact-card contact-card-pending">{content}</div>
  );
}
function Field({ name, label, value, error, onChange, multiline = false }) {
  const props = {
    id: name,
    name,
    required: true,
    value,
    onChange,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${name}-error` : undefined,
  };
  return (
    <div className="field">
      <label htmlFor={name}>
        {label} <span aria-hidden="true">*</span>
      </label>
      {multiline ? (
        <textarea
          {...props}
          rows={5}
          minLength={20}
          maxLength={5000}
          placeholder="Tell me about your idea…"
        />
      ) : (
        <input
          {...props}
          type={name === "email" ? "email" : "text"}
          autoComplete={name}
          maxLength={name === "name" ? 100 : 254}
          placeholder={name === "email" ? "you@example.com" : "Your name"}
        />
      )}{" "}
      {error && (
        <span className="field-error" id={`${name}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
export default function Contact() {
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
  const messages = {
    invalid: "Please correct the highlighted fields.",
    unconfigured:
      "Your draft is valid. Delivery is not configured, so no message was sent. Copy your draft to keep it.",
    sending: "Submitting your message…",
    success:
      "The contact service accepted your message. Thank you for reaching out.",
    error:
      "Your message could not be submitted. Please try again or use a contact link.",
    copied: "Draft copied. No message was sent.",
    "copy-error":
      "Clipboard access is unavailable. Please select and copy your message manually.",
  };
  return (
    <div className="container page contact-page">
      <PageIntro title="Contact me">
        Let’s connect and build something thoughtful together.
      </PageIntro>
      <div className="contact-layout">
        <Reveal className="contact-details">
          <h2>Start a conversation</h2>
          <p>
            Have a project in mind, or just want to say hello? I’d love to hear
            your ideas.
          </p>
          <div className="contact-cards">
            <ContactCard
              icon={Mail}
              title="Email"
              value={profile.email}
              href={profile.email ? `mailto:${profile.email}` : ""}
              tone="purple"
            />
            <ContactCard
              icon={MapPin}
              title="Location"
              value={profile.location}
              tone="violet"
            />
            <ContactCard
              icon={Linkedin}
              title="LinkedIn"
              value={profile.linkedin ? "Connect on LinkedIn" : ""}
              href={profile.linkedin}
              tone="blue"
            />
            <ContactCard
              icon={Github}
              title="GitHub"
              value="github.com/tejaswini02523"
              href={profile.github}
              tone="neutral"
            />
          </div>
          <p className="subtle-note">
            Only verified contact destinations are linked.
          </p>
        </Reveal>
        <Reveal className="form-reveal" delay={0.1}>
          <form
            className="contact-form glass-panel"
            onSubmit={submit}
            noValidate
          >
            <h2>Send me a message</h2>
            <div className="form-pair">
              <Field
                name="name"
                label="Name"
                value={values.name}
                error={errors.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <Field
                name="email"
                label="Email"
                value={values.email}
                error={errors.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <Field
              name="message"
              label="Message"
              multiline
              value={values.message}
              error={errors.message}
              onChange={(e) =>
                setValues({ ...values, message: e.target.value })
              }
            />
            <p className="form-note">
              {endpoint
                ? "Your message will be submitted to the configured contact service."
                : "Delivery is not connected yet. Check and copy your draft, or connect on GitHub."}
            </p>
            <div className="form-actions">
              <button
                className="button button-primary"
                disabled={status === "sending"}
                type="submit"
              >
                {status === "sending" ? (
                  <LoaderCircle className="spinner" size={17} />
                ) : (
                  <Send size={16} />
                )}{" "}
                {status === "sending"
                  ? "Sending…"
                  : endpoint
                    ? "Send message"
                    : "Check message"}
              </button>
              <button
                className="button button-secondary"
                onClick={copyDraft}
                type="button"
              >
                <Copy size={15} />
                Copy draft
              </button>
            </div>
            <div
              className={`form-status ${["invalid", "error", "copy-error"].includes(status) ? "status-error" : ""}`}
              role="status"
              aria-live="polite"
            >
              {status === "success" && <CheckCircle2 size={17} />}{" "}
              {messages[status]}
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
