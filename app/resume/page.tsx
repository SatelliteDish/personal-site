import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AccentStripe from "@/components/AccentStripe";
import SkillMarquee from "@/components/SkillMarquee";
import {
  contact,
  summary,
  accomplishments,
  experience,
  skillGroups,
} from "@/lib/resume";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Resume — Michael Vitale",
};

export default function ResumePage() {
  return (
    <>
      <Nav />

      <main className="container">
        <header className={styles.header}>
          <h1 className={styles.heading}>Resume</h1>
          <p className={styles.roleLine}>Full Stack Engineer - {contact.location}</p>
          <div className={styles.contactRow}>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`https://${contact.website}`} target="_blank" rel="noreferrer">
              {contact.website}
            </a>
            <a href={`https://${contact.github}`} target="_blank" rel="noreferrer">
              {contact.github}
            </a>
            <a href={`https://${contact.linkedIn}`} target="_blank" rel="noreferrer">
              {contact.linkedIn}
            </a>
          </div>
        </header>

        <AccentStripe />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Summary</h2>
          <p className={styles.summary}>{summary}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <SkillMarquee />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Accomplishments</h2>
          <ul className={styles.accList}>
            {accomplishments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          {experience.map((job) => (
            <div className={styles.job} key={`${job.company}-${job.title}`}>
              <div className={styles.jobHead}>
                <span className={styles.jobTitle}>{job.title}</span>
                <span className={styles.jobDates}>{job.dates}</span>
              </div>
              <p className={styles.jobCompany}>
                {job.company} · {job.location}
              </p>
              <p className={styles.jobDesc}>{job.description}</p>
              <ul className={styles.jobBullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>All skills</h2>
          {skillGroups.map((group) => (
            <div className={styles.skillGroup} key={group.label}>
              <p className={styles.skillGroupLabel}>{group.label}</p>
              <p className={styles.skillPlain}>{group.items.join(" · ")}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
