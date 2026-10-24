import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { PageIntro } from "../components/UI";
import { Reveal } from "../components/Motion";
import Timeline from "../components/Timeline";
import { profile } from "../data/profile";
export default function Experience() {
  return (
    <div className="container page experience-page">
      <PageIntro title="Experience">
        My professional journey, one chapter at a time.
      </PageIntro>
      <div className="experience-layout">
        <section className="career-column">
          <h2 className="column-heading">
            <BriefcaseBusiness size={19} />
            Professional experience
          </h2>
          <Timeline />
        </section>
        <aside>
          <Reveal className="education-panel glass-panel">
            <GraduationCap size={28} />
            <div>
              <h2>Education</h2>
              <h3>{profile.education.qualification}</h3>
              <p>{profile.education.institution}</p>
            </div>
          </Reveal>
          <div className="verification-note">
            <span className="tiny-dot" />
            <p>
              Role titles and employers were supplied. Dates, responsibilities,
              and achievements remain editable until verified.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
