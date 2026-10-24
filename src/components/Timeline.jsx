import { Code2, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { experience } from "../data/experience";
import { Reveal } from "./Motion";

export default function Timeline({ compact = false }) {
  return (
    <div className={`timeline ${compact ? "timeline-compact" : ""}`}>
      {experience.map((job, i) => (
        <Reveal
          className="timeline-item"
          key={job.role + job.company}
          delay={i * 0.08}
        >
          <span className="timeline-node">
            {i === 0 ? <BriefcaseBusiness size={16} /> : <Code2 size={15} />}
          </span>
          <article>
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
        </Reveal>
      ))}
    </div>
  );
}
