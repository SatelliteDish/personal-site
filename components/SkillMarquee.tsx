"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiRust,
  SiPostgresql,
  SiGithubactions,
  SiNfc,
} from "react-icons/si";
import { CloudIcon, LayersIcon, ArchitectureIcon, ShieldIcon } from "./icons/GenericIcons";
import styles from "./SkillMarquee.module.css";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface Skill {
  label: string;
  Icon: IconComponent;
}

const skills: Skill[] = [
  { label: "TypeScript", Icon: SiTypescript },
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "Expo", Icon: SiExpo },
  { label: "Rust", Icon: SiRust },
  { label: "AWS", Icon: CloudIcon },
  { label: "Lambda / Aurora", Icon: LayersIcon },
  { label: "GitHub Actions", Icon: SiGithubactions },
  { label: "Cloud Architecture", Icon: ArchitectureIcon },
  { label: "Web Security", Icon: ShieldIcon },
  { label: "NFC / IoT", Icon: SiNfc },
  { label: "PostgreSQL", Icon: SiPostgresql },
];

const accentVars = [
  "var(--accent-amber)",
  "var(--accent-coral)",
  "var(--accent-pink)",
  "var(--accent-purple)",
  "var(--accent-teal)",
];

// Rendered twice back to back so a -50% translateX loops seamlessly.
const track = [...skills, ...skills];

export default function SkillMarquee() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className={styles.wrap}>
      <div className={styles.viewport}>
        <ul
          className={styles.track}
          style={{ animationPlayState: playing ? "running" : "paused" }}
        >
          {track.map(({ label, Icon }, i) => (
            <li
              key={`${label}-${i}`}
              className={styles.chip}
              style={{ color: accentVars[i % accentVars.length] }}
            >
              <Icon className={styles.icon} aria-hidden="true" />
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={styles.control}
        onClick={() => setPlaying((p) => !p)}
        aria-pressed={!playing}
      >
        {playing ? "Pause scrolling" : "Play scrolling"}
      </button>
    </div>
  );
}
