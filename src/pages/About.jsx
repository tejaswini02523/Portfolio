import {
  Code2,
  Puzzle,
  BookOpen,
  Users,
  Monitor,
  Cloud,
  PenTool,
  Heart,
  GraduationCap,
} from "lucide-react";
import { PageIntro } from "../components/UI";
import { Reveal } from "../components/Motion";
import Timeline from "../components/Timeline";
import { profile } from "../data/profile";

export default function About() {
  return (
    <div className="container page about-page">
      <PageIntro title="About me">
        Curious developer <span className="text-divider">|</span> Problem solver{" "}
        <span className="text-divider">|</span> Lifelong learner
      </PageIntro>
      <div className="about-columns">
        <div>
          <Reveal className="biography">
            <p>
              I’m {profile.name}, a software developer who enjoys turning ideas
              into intuitive digital experiences. I’m interested in the meeting
              point of thoughtful design and practical technology.
            </p>
            <p>
              I approach a problem with curiosity, break it into manageable
              pieces, and pay attention to the details that make a product feel
              easy to use.
            </p>
          </Reveal>
          <div className="strength-grid">
            {[
              [Code2, "Clean code"],
              [Puzzle, "Problem solving"],
              [BookOpen, "Continuous learning"],
              [Users, "Team collaboration"],
            ].map(([Icon, label], i) => (
              <Reveal className="strength-chip" delay={i * 0.05} key={label}>
                <Icon size={19} />
                <span>{label}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="education-panel">
            <GraduationCap size={25} />
            <div>
              <h2>Education</h2>
              <h3>{profile.education.qualification}</h3>
              <p>{profile.education.institution}</p>
            </div>
          </Reveal>
          <section className="interests-section">
            <h2>My interests</h2>
            <div className="interest-grid">
              {[
                [Monitor, "Web development"],
                [Cloud, "Cloud & DevOps"],
                [PenTool, "UI / UX design"],
                [Heart, "Learning new tech"],
              ].map(([Icon, label]) => (
                <div className="interest-tile" key={label}>
                  <Icon />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
        <section className="journey-section">
          <h2>My journey</h2>
          <Timeline compact />
          <p className="subtle-note">
            Dates and role details will be added after verification.
          </p>
        </section>
      </div>
    </div>
  );
}
