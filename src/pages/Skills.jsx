import {
  Code2,
  Server,
  Database,
  Cloud,
  GitBranch,
  Wrench,
} from "lucide-react";
import { PageIntro } from "../components/UI";
import { Reveal } from "../components/Motion";
import { TechTile } from "../components/TechIcon";
import { skills } from "../data/skills";

const icons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  cloud: Cloud,
  devops: GitBranch,
  tools: Wrench,
};
export default function Skills() {
  return (
    <div className="container page skills-page">
      <PageIntro title="Skills">
        Technologies, tools, and frameworks behind the work.
      </PageIntro>
      <div className="skills-grid">
        {skills.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal
              as="section"
              className="skill-group glass-panel"
              delay={i * 0.05}
              key={group.title}
            >
              <h2>
                <Icon size={18} />
                {group.title}
              </h2>
              <div className="skill-tiles">
                {group.items.map((name) => (
                  <TechTile key={name} name={name} />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="subtle-note">
        Editable technology showcase. Specific proficiency and professional use
        are awaiting confirmation.
      </p>
    </div>
  );
}
