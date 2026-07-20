"use client";

import { CSSProperties, FormEvent, PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLink, FaLinkedinIn } from "react-icons/fa";
import TechIcon from "@/components/ui/TechIcon";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { technologies } from "@/data/technologies";

const binary = "01001101 01000001 01001011 01000101 00100000 /////////// 01010011 01000001 01000111 01000001 01010010 00100000 /////////// BUILDING USEFUL SYSTEMS /////////// NEW YORK, NY";
const systemMessages = [
  "REFRACTORING THE SOLVER...",
  "OPTIMIZING FOR CLARITY...",
  "RUNNING PRODUCT SYSTEMS...",
  "PLEASE HOLD",
];
const BIRTH_DATE = new Date("2004-03-01T10:00:00");

type VariableStyle = CSSProperties & Record<`--${string}`, string | number>;

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface SignalMotion {
  phase: number;
  x: number;
  y: number;
  velocity: number;
}

function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function calculateTimeElapsed(): TimeElapsed {
  const now = new Date();
  let years = now.getFullYear() - BIRTH_DATE.getFullYear();
  let months = now.getMonth() - BIRTH_DATE.getMonth();
  let days = now.getDate() - BIRTH_DATE.getDate();
  let hours = now.getHours() - BIRTH_DATE.getHours();
  let minutes = now.getMinutes() - BIRTH_DATE.getMinutes();
  let seconds = now.getSeconds() - BIRTH_DATE.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) { days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); months--; }
  if (months < 0) { months += 12; years--; }

  return { years, months, days, hours, minutes, seconds };
}

function signalPath(index: number, motion: SignalMotion) {
  const x = 10 + index * (1000 / 55);
  const coordinate = (value: number) => Number(value.toFixed(3));
  const drift = (progress: number) => {
    const outerWave = Math.sin(index * 0.18 + progress * Math.PI * 1.62 + motion.phase * 0.92) * 24;
    const contour = Math.sin(index * 0.31 - progress * Math.PI * 4.1 + motion.phase * 1.32) * 6;
    const breathing = Math.sin(progress * Math.PI) * Math.cos(index * 0.22 + motion.phase * 0.45) * 11;
    const leftWave = Math.exp(-Math.pow((index - 7) / 8, 2)) * Math.sin(progress * Math.PI) * Math.sin(Math.PI * (progress - 0.12) + index * 0.12 + motion.phase * 0.5) * 28;
    const centerWave = Math.exp(-Math.pow((index - 31) / 13, 2)) * Math.sin(progress * Math.PI) * Math.sin(progress * Math.PI * 2.2 + index * 0.09 + motion.phase * 0.82) * 19;
    const rightWave = Math.exp(-Math.pow((index - 50) / 10, 2)) * Math.sin(progress * Math.PI) * Math.cos(progress * Math.PI * 1.65 - index * 0.11 + motion.phase * 0.6) * 16;
    const cursorColumn = motion.x * 56;
    const pointerPull = Math.exp(-Math.pow((index - cursorColumn) / 8.6, 2)) * Math.exp(-Math.pow((progress - motion.y) / 0.29, 2)) * (8 + motion.velocity * 24);
    return outerWave + contour + breathing + leftWave + centerWave + rightWave + pointerPull;
  };

  return Array.from({ length: 65 }, (_, step) => {
    const progress = step / 64;
    return `${step === 0 ? "M" : "L"} ${coordinate(x + drift(progress))} ${coordinate(progress * 640)}`;
  }).join(" ");
}

function SignalField() {
  const svgRef = useRef<SVGSVGElement>(null);
  const targetRef = useRef({ x: 0.5, y: 0.5, velocity: 0, lastX: 0.5, lastY: 0.5 });
  const [isActive, setIsActive] = useState(true);
  const [motion, setMotion] = useState<SignalMotion>({ phase: 0, x: 0.5, y: 0.5, velocity: 0 });

  useEffect(() => {
    const element = svgRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.02 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = svgRef.current;
    if (!element) return;

    const trackPointer = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const nextX = clamp((event.clientX - rect.left) / Math.max(rect.width, 1));
      const nextY = clamp((event.clientY - rect.top) / Math.max(rect.height, 1));
      const target = targetRef.current;
      const distance = Math.hypot(nextX - target.lastX, nextY - target.lastY);
      target.velocity = clamp(target.velocity + distance * 6, 0, 1);
      target.x = nextX;
      target.y = nextY;
      target.lastX = nextX;
      target.lastY = nextY;
    };
    const resetPointer = () => {
      const target = targetRef.current;
      target.x = 0.5;
      target.y = 0.5;
      target.lastX = 0.5;
      target.lastY = 0.5;
    };
    element.addEventListener("pointermove", trackPointer, { passive: true });
    element.addEventListener("pointerleave", resetPointer, { passive: true });
    return () => {
      element.removeEventListener("pointermove", trackPointer);
      element.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  useEffect(() => {
    if (!isActive || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const startedAt = performance.now();
    const current = { x: motion.x, y: motion.y, velocity: motion.velocity };
    const animate = (now: number) => {
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.085;
      current.y += (target.y - current.y) * 0.085;
      current.velocity += (target.velocity - current.velocity) * 0.14;
      target.velocity *= 0.91;
      setMotion({ phase: ((now - startedAt) / 1000) * 0.52, x: current.x, y: current.y, velocity: current.velocity });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isActive]);

  return (
    <svg ref={svgRef} className="signal" viewBox="0 0 1020 640" preserveAspectRatio="none" aria-hidden="true">
      {Array.from({ length: 56 }, (_, index) => <path key={index} d={signalPath(index, motion)} />)}
    </svg>
  );
}

function TimeOnEarth() {
  const [elapsed, setElapsed] = useState<TimeElapsed | null>(null);

  useEffect(() => {
    const update = () => setElapsed(calculateTimeElapsed());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (!elapsed) return null;
  const units = [[elapsed.years, "YR"], [elapsed.months, "MO"], [elapsed.days, "DAY"], [elapsed.hours, "HR"], [elapsed.minutes, "MIN"], [elapsed.seconds, "SEC"]];

  return (
    <div className="earth-counter">
      <span className="earth-label mono">Time on Earth</span>
      <div>{units.map(([value, unit]) => <span className="earth-unit" key={String(unit)}><b>{String(value).padStart(2, "0")}</b><small>{unit}</small></span>)}</div>
    </div>
  );
}

function CareerScene() {
  return (
    <div className="career-scroll-scene" data-career-scene style={{ "--career-scene-height": `${105 + experiences.length * 58}svh`, "--career-progress": 0, "--career-cursor-y": "0px" } as VariableStyle}>
      <div className="career-sticky">
        <p className="career-watermark" aria-hidden="true">Work</p>
        <div className="career-axis" aria-hidden="true"><i /><span className="mono">Career / 2023 — now</span></div>
        <ol className="career-index mono" aria-label="Experience index">
          {experiences.map((item, index) => <li data-career-node key={item.id}><b>{String(index + 1).padStart(2, "0")}</b><span>{item.company}</span><i>{item.startDate}</i></li>)}
        </ol>
        <div className="career-dossier-layer">
          {experiences.map((item, index) => (
            <article className={`career-dossier career-dossier--${index % 2 === 0 ? "left" : "right"}`} data-career-card key={item.id}>
              <header><span className="mono">Role / {String(index + 1).padStart(2, "0")}</span><span className="mono">{item.startDate} — {item.endDate}</span></header>
              <div className="career-logo">{item.logo ? <img src={item.logo} alt={`${item.company} logo`} /> : <span aria-hidden="true">✦</span>}</div>
              <div className="career-title-block"><h3>{item.title}</h3><p>{item.company} · {item.location}</p></div>
              <div className="career-detail"><p>{item.description}</p>{item.skills && <div className="skills">{item.skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div>}</div>
              <span className="career-edge mono">{item.type}</span>
            </article>
          ))}
        </div>
        <p className="career-readout mono">Scroll to advance / {String(experiences.length).padStart(2, "0")} positions</p>
      </div>
    </div>
  );
}

function ProjectCaseSignal({ index }: { index: number }) {
  const bars = Array.from({ length: 10 }, (_, barIndex) => 28 + ((index * 17 + barIndex * 19) % 58));

  return (
    <span className="project-case-signal" aria-hidden="true">
      <span className="project-signal-ring" />
      <span className="project-signal-cross" />
      <span className="project-signal-bars">{bars.map((height, barIndex) => <i key={barIndex} style={{ "--signal-height": `${height}%`, "--signal-delay": `${(index * 37 + barIndex * 71) % 480}ms` } as VariableStyle} />)}</span>
      <span className="project-signal-meta mono"><span>Signal / {String(index + 1).padStart(2, "0")}</span><span>Build in motion</span></span>
    </span>
  );
}

function ProjectScene({ onProjectOpen }: { onProjectOpen: (id: string) => void }) {
  const scanRings = Array.from({ length: 5 }, (_, index) => index);
  const particleFieldRef = useRef<HTMLDivElement>(null);
  const particleCursorRef = useRef(0);
  const lastParticleBurstRef = useRef(0);

  const burstProjectParticles = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const now = performance.now();
    if (now - lastParticleBurstRef.current < 62) return;
    lastParticleBurstRef.current = now;

    const field = particleFieldRef.current;
    if (!field) return;
    const fieldRect = field.getBoundingClientRect();
    const particles = Array.from(field.querySelectorAll<HTMLElement>("[data-project-particle]"));
    const originX = event.clientX - fieldRect.left;
    const originY = event.clientY - fieldRect.top;

    Array.from({ length: 2 }, (_, burstIndex) => {
      const particle = particles[particleCursorRef.current % particles.length];
      particleCursorRef.current += 1;
      if (!particle) return;
      const seed = particleCursorRef.current * 1.618 + burstIndex * 0.72;
      const angle = seed * 2.39;
      const distance = 30 + (particleCursorRef.current % 7) * 11;
      particle.getAnimations().forEach((animation) => animation.cancel());
      particle.style.left = `${originX}px`;
      particle.style.top = `${originY}px`;
      particle.animate(
        [
          { opacity: 0, transform: "translate(-50%, -50%) scale(0.35)" },
          { opacity: 0.96, offset: 0.16, transform: "translate(-50%, -50%) scale(1)" },
          { opacity: 0, transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0.45)` },
        ],
        { duration: 460 + (particleCursorRef.current % 4) * 70, easing: "cubic-bezier(0.22, 0.9, 0.25, 1)", fill: "both" }
      );
    });
  };

  return (
    <div className="project-scroll-scene" data-project-scene style={{ "--project-scene-height": `${110 + projects.length * 54}svh`, "--project-progress": 0 } as VariableStyle}>
      <div className="project-sticky">
        <div className="project-arc-field" aria-hidden="true">{scanRings.map((ring) => <i key={ring} style={{ "--ring-index": ring } as VariableStyle} />)}</div>
        <div ref={particleFieldRef} className="project-particle-field" aria-hidden="true">{Array.from({ length: 20 }, (_, index) => <i data-project-particle key={index} />)}</div>
        <div className="project-console mono" aria-hidden="true"><span>Archive / 04</span><span data-project-readout>01 / {String(projects.length).padStart(2, "0")}</span></div>
        <ol className="project-node-rail mono" aria-label="Project index">
          {projects.map((project, index) => <li data-project-node key={project.id}><b>{String(index + 1).padStart(2, "0")}</b><span>{project.title}</span></li>)}
        </ol>
        <div className="project-case-layer">
          {projects.map((project, index) => (
            <button
              type="button"
              className="project-case"
              data-project-card
              key={project.id}
              aria-label={`Open ${project.title}`}
              onClick={() => onProjectOpen(project.id)}
              onPointerMove={burstProjectParticles}
              style={{ "--project-index": index } as VariableStyle}
            >
              <span className="project-case-top mono"><span>Case / {String(index + 1).padStart(2, "0")}</span><span>System / {String(index + 1).padStart(2, "0")}</span></span>
              <span className="project-case-preview"><ProjectCaseSignal index={index} /></span>
              <span className="project-case-copy"><span className="project-case-title">{project.title}</span><span className="project-case-tagline">{project.tagline}</span></span>
              <span className="project-case-action mono">Open case file <b>↗</b></span>
            </button>
          ))}
        </div>
        <p className="project-scroll-prompt mono">Scroll through archive · click the active case</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [ready, setReady] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedMessage, setTypedMessage] = useState("");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isThemeWiping, setIsThemeWiping] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const canControlRestoration = "scrollRestoration" in window.history;
    const previousRestoration = canControlRestoration ? window.history.scrollRestoration : undefined;
    if (canControlRestoration) window.history.scrollRestoration = "manual";

    const resetToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    resetToTop();
    const frame = window.requestAnimationFrame(resetToTop);

    return () => {
      window.cancelAnimationFrame(frame);
      if (canControlRestoration && previousRestoration) window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer = 0;
    let character = 0;
    const message = systemMessages[messageIndex];
    setTypedMessage("");

    const typeNextCharacter = () => {
      character += 1;
      setTypedMessage(message.slice(0, character));
      if (character < message.length) {
        const current = message[character - 1];
        timer = window.setTimeout(typeNextCharacter, current === " " ? 52 : /[.]/.test(current) ? 95 : 21);
      } else {
        timer = window.setTimeout(() => setMessageIndex((index) => (index + 1) % systemMessages.length), 920);
      }
    };

    timer = window.setTimeout(typeNextCharacter, 90);
    return () => window.clearTimeout(timer);
  }, [messageIndex]);

  useEffect(() => {
    document.body.classList.toggle("light-page", isLightMode);
    return () => document.body.classList.remove("light-page");
  }, [isLightMode]);

  useEffect(() => {
    if (!activeProjectId) return;
    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProjectId(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProjectId]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.13, rootMargin: "0px 0px -8%" }
    );
    items.forEach((item) => observer.observe(item));

    const stages = Array.from(document.querySelectorAll<HTMLElement>("[data-stage]"));
    const careerScene = document.querySelector<HTMLElement>("[data-career-scene]");
    const projectScene = document.querySelector<HTMLElement>("[data-project-scene]");
    let frame = 0;
    let careerSettleTimer = 0;
    let careerSettleFrame = 0;
    let projectSettleTimer = 0;
    let projectSettleFrame = 0;

    const renderCareer = (scene: HTMLElement, cards: HTMLElement[], nodes: HTMLElement[], position: number) => {
      const safePosition = clamp(position, 0, Math.max(cards.length - 1, 0));
      scene.style.setProperty("--career-progress", (cards.length > 1 ? safePosition / (cards.length - 1) : 0).toFixed(3));
      scene.style.setProperty("--career-cursor-y", `${(safePosition * 40).toFixed(1)}px`);
      cards.forEach((card, index) => {
        const delta = index - safePosition;
        const visibility = clamp(1 - Math.abs(delta) / 0.78);
        const clip = clamp(Math.abs(delta) * 58, 0, 100);
        card.style.setProperty("--dossier-x", `${(delta * 78).toFixed(2)}vw`);
        card.style.setProperty("--dossier-y", `${(Math.abs(delta) * 3.4).toFixed(2)}vh`);
        card.style.setProperty("--dossier-opacity", visibility.toFixed(3));
        card.style.setProperty("--dossier-clip", `${clip.toFixed(1)}%`);
        card.style.setProperty("--dossier-scale", `${(0.92 + visibility * 0.08).toFixed(3)}`);
      });
      nodes.forEach((node, index) => node.classList.toggle("is-current", Math.round(safePosition) === index));
    };

    const settleCareer = () => {
      if (!careerScene || window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 640px)").matches) return;
      const cards = Array.from(careerScene.querySelectorAll<HTMLElement>("[data-career-card]"));
      const nodes = Array.from(careerScene.querySelectorAll<HTMLElement>("[data-career-node]"));
      const rect = careerScene.getBoundingClientRect();
      const isPinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (cards.length < 2 || !isPinned) return;

      const travel = Math.max(rect.height - window.innerHeight, 1);
      const rawPosition = clamp(-rect.top / travel) * (cards.length - 1);
      careerScene.dataset.careerSettled = "true";
      careerSettleFrame = window.requestAnimationFrame(() => renderCareer(careerScene, cards, nodes, Math.round(rawPosition)));
    };

    const renderProject = (scene: HTMLElement, cards: HTMLElement[], nodes: HTMLElement[], position: number) => {
      const safePosition = clamp(position, 0, Math.max(cards.length - 1, 0));
      const activeIndex = Math.round(safePosition);
      scene.style.setProperty("--project-progress", (cards.length > 1 ? safePosition / (cards.length - 1) : 0).toFixed(3));
      const readout = scene.querySelector<HTMLElement>("[data-project-readout]");
      if (readout) readout.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
      cards.forEach((card, index) => {
        const delta = index - safePosition;
        const distance = Math.abs(delta);
        const visibility = clamp(1 - distance / 1.16);
        card.style.setProperty("--case-x", `${(delta * 74).toFixed(2)}vw`);
        card.style.setProperty("--case-y", `${(Math.sin(delta * 1.35) * 2.6 + Math.min(distance, 1.25) * 4).toFixed(2)}vh`);
        card.style.setProperty("--case-rotation", `${(delta * -7).toFixed(2)}deg`);
        card.style.setProperty("--case-scale", `${(1 - Math.min(distance, 1) * 0.15).toFixed(3)}`);
        card.style.setProperty("--case-opacity", visibility.toFixed(3));
        card.style.pointerEvents = visibility > 0.8 ? "auto" : "none";
        card.tabIndex = visibility > 0.8 ? 0 : -1;
      });
      nodes.forEach((node, index) => node.classList.toggle("is-current", index === activeIndex));
    };

    const settleProject = () => {
      if (!projectScene || window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 640px)").matches) return;
      const cards = Array.from(projectScene.querySelectorAll<HTMLElement>("[data-project-card]"));
      const nodes = Array.from(projectScene.querySelectorAll<HTMLElement>("[data-project-node]"));
      const rect = projectScene.getBoundingClientRect();
      const isPinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (cards.length < 2 || !isPinned) return;

      const travel = Math.max(rect.height - window.innerHeight, 1);
      const rawPosition = clamp(-rect.top / travel) * (cards.length - 1);
      projectScene.dataset.projectSettled = "true";
      projectSettleFrame = window.requestAnimationFrame(() => renderProject(projectScene, cards, nodes, Math.round(rawPosition)));
    };

    const updateScroll = () => {
      frame = 0;
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
      stages.forEach((stage) => {
        const rect = stage.getBoundingClientRect();
        const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.35));
        stage.style.setProperty("--stage-progress", progress.toFixed(3));
        if (stage.classList.contains("about-section")) stage.style.setProperty("--about-grid-offset", `${(rect.top * 0.18).toFixed(1)}px`);
      });

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (careerScene) {
        const cards = Array.from(careerScene.querySelectorAll<HTMLElement>("[data-career-card]"));
        const nodes = Array.from(careerScene.querySelectorAll<HTMLElement>("[data-career-node]"));
        if (reduceMotion) {
          cards.forEach((card) => { card.style.pointerEvents = "auto"; });
        } else {
          const rect = careerScene.getBoundingClientRect();
          const progress = clamp(-rect.top / Math.max(rect.height - window.innerHeight, 1));
          const position = progress * Math.max(cards.length - 1, 1);
          careerScene.removeAttribute("data-career-settled");
          renderCareer(careerScene, cards, nodes, position);
        }
      }

      if (projectScene) {
        const cards = Array.from(projectScene.querySelectorAll<HTMLElement>("[data-project-card]"));
        const nodes = Array.from(projectScene.querySelectorAll<HTMLElement>("[data-project-node]"));
        const isCompact = window.matchMedia("(max-width: 640px)").matches;
        if (reduceMotion || isCompact) {
          cards.forEach((card) => { card.style.pointerEvents = "auto"; card.tabIndex = 0; });
        } else {
          const rect = projectScene.getBoundingClientRect();
          const travel = Math.max(rect.height - window.innerHeight, 1);
          const progress = clamp(-rect.top / travel);
          const position = progress * Math.max(cards.length - 1, 1);
          projectScene.removeAttribute("data-project-settled");
          renderProject(projectScene, cards, nodes, position);
        }
      }
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };
    const scheduleCareerSettle = () => {
      window.clearTimeout(careerSettleTimer);
      window.cancelAnimationFrame(careerSettleFrame);
      careerSettleTimer = window.setTimeout(settleCareer, 160);
    };
    const scheduleProjectSettle = () => {
      window.clearTimeout(projectSettleTimer);
      window.cancelAnimationFrame(projectSettleFrame);
      projectSettleTimer = window.setTimeout(settleProject, 160);
    };

    scheduleUpdate();
    const onScroll = () => {
      scheduleUpdate();
      scheduleCareerSettle();
      scheduleProjectSettle();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(careerSettleTimer);
      window.cancelAnimationFrame(careerSettleFrame);
      window.clearTimeout(projectSettleTimer);
      window.cancelAnimationFrame(projectSettleFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const scrollToHash = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#']");
      const href = anchor?.getAttribute("href");
      if (!href || href.length < 2) return;
      const destination = document.querySelector<HTMLElement>(href);
      if (!destination) return;
      event.preventDefault();

      const start = window.scrollY;
      const target = start + destination.getBoundingClientRect().top;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        window.scrollTo(0, target);
        window.history.replaceState(null, "", href);
        return;
      }

      const duration = Math.min(1550, Math.max(620, Math.abs(target - start) * 0.34));
      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = clamp((now - startedAt) / duration);
        const eased = progress < 0.5 ? 16 * Math.pow(progress, 5) : 1 - Math.pow(-2 * progress + 2, 5) / 2;
        window.scrollTo(0, start + (target - start) * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else window.history.replaceState(null, "", href);
      };
      window.cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };
    document.addEventListener("click", scrollToHash);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("click", scrollToHash);
    };
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!response.ok) throw new Error("Failed");
      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const toggleTheme = () => {
    if (isThemeWiping) return;
    setIsThemeWiping(true);
    window.setTimeout(() => setIsLightMode((value) => !value), 340);
    window.setTimeout(() => setIsThemeWiping(false), 890);
  };

  const activeProject = projects.find((project) => project.id === activeProjectId);

  return (
    <main className={`portfolio${isLightMode ? " light-mode" : ""}${ready ? " ready" : ""}`}>
      {isThemeWiping && <div className="theme-wipe" aria-hidden="true" />}
      <div className="site-frame">
        <div className="boot-screen" aria-hidden="true"><span>SS</span></div>
        <header className="topbar">
          <a className="monogram" href="#home" aria-label="Sagar Sahu home">SS</a>
          <div className="microcopy mono" aria-live="polite"><span>{typedMessage}<b>_</b></span><span>SYNC / 09:41:36</span><span>BUILD / HUMAN-CENTRED</span><span>STATUS / ONLINE</span></div>
          <nav className="site-nav" aria-label="Primary navigation"><a className="nav-link" href="#about">About</a><a className="nav-link" href="#work">Work</a><a className="nav-link" href="#contact">Contact</a></nav>
          <div className="socials" aria-label="Social links">
            {socialLinks.filter((link) => link.id !== "linktree").map((link) => <a key={link.id} className="icon-link" href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}>{link.id === "github" ? <FaGithub /> : <FaLinkedinIn />}</a>)}
            <a className="icon-link" href="#projects" aria-label="View projects"><FaLink /></a><a className="icon-link" href="#contact" aria-label="Send an email"><FaEnvelope /></a>
          </div>
          <button className="contrast-toggle" onClick={toggleTheme} aria-label="Toggle light and dark theme">{isLightMode ? "◑" : "◐"}</button>
          <div className="headline-note"><span className="headline-role">Software engineer & AI product builder working in fintech</span><span className="headline-message"><span>Designing clear software for ambitious ideas</span><a className="headline-cta" href="#contact"><span aria-hidden="true">→</span><span>Start a conversation</span></a></span></div>
        </header>

        <section id="home">
          <div className="hero-field"><SignalField /><TimeOnEarth /></div>
          <div className="data-strip"><span>▸ {binary} &nbsp;&nbsp;&nbsp; {binary} &nbsp;&nbsp;&nbsp; {binary}</span></div>
          <div className="hero-name"><h1 aria-label="Sagar"><span aria-hidden="true">S</span><span aria-hidden="true">a</span><span aria-hidden="true">g</span><span aria-hidden="true">a</span><span aria-hidden="true">r</span></h1><div className="spark">✦</div><h1 aria-label="Sahu"><span aria-hidden="true">S</span><span aria-hidden="true">a</span><span aria-hidden="true">h</span><span aria-hidden="true">u</span></h1></div>
          <div className="data-strip"><span>▸ {binary} &nbsp;&nbsp;&nbsp; {binary} &nbsp;&nbsp;&nbsp; {binary}</span></div>
        </section>

        <section className="section perspective-section about-section" id="about" data-stage>
          <div className="section-label mono"><span>01 / About</span><span>Who I am</span></div>
          <div className="about-grid">
            <aside className="about-rail" data-reveal>
              <span className="about-rail-index mono">01</span>
              <div className="eyebrow mono">Current trajectory<br />New York · 2026</div>
              <span className="about-status mono"><i aria-hidden="true" />Status / online</span>
            </aside>
            <div className="about-copy" data-reveal><h2 className="about-title"><span>About</span><span>me.</span></h2><p className="about-lead">I&apos;m Sagar — a full-stack software engineer and computer scientist who enjoys shaping messy, high-stakes problems into software people can actually use.</p></div>
            <div className="about-operating-field" data-reveal aria-label="Operating fields: product engineering, software development, applied AI, and financial technology."><span className="mono">Operating field</span><div className="field-diagram"><i className="field-link field-link--one" aria-hidden="true" /><i className="field-link field-link--two" aria-hidden="true" /><i className="field-link field-link--three" aria-hidden="true" /><span className="field-node field-node--one"><b>01</b><em>Product<br />engineering</em></span><span className="field-node field-node--two"><b>02</b><em>Applied AI</em></span><span className="field-node field-node--three"><b>03</b><em>Financial<br />technology</em></span><span className="field-node field-node--four"><b>04</b><em>Software<br />development</em></span></div></div>
            <p className="about-side" data-reveal>I work across product engineering, software development, applied AI, and financial technology. From intelligent workflows to consumer tools, I care about thoughtful systems that feel clear, quick, and human.</p>
            <div className="about-records" data-reveal>
              <article className="about-education-record"><span className="mono">Education / 01</span><div className="about-record-heading"><img src={education.logo} alt="Rensselaer Polytechnic Institute" /><div><h3>{education.degree}</h3><p>{education.school}</p></div></div><p className="about-record-meta">{education.location} · {education.startDate} — {education.endDate}<br />{education.concentration} · Minor in {education.minor}</p></article>
              <article className="about-creator-record"><span className="mono">Content / UGC</span><h3>Creator<br />work.</h3><p>Find my content, UGC work, professional updates, and the things I&apos;m building outside the code editor.</p><div className="about-creator-links">{socialLinks.map((link) => <a key={link.id} href={link.url} target="_blank" rel="noreferrer">{link.id === "linktree" ? "Content & UGC" : link.name} <b>↗</b></a>)}</div></article>
            </div>
          </div>
        </section>

        <section className="section tech-section technology-section" id="technologies" data-stage>
          <div className="section-label mono"><span>02 / Technologies</span><span>Tools I use</span></div>
          <div className="section-masthead technology-masthead" data-reveal><span className="mono">System index / 02</span><h2>Technologies</h2><p>Systems are made from small, sharp tools — languages, frameworks, data systems, and AI tooling I reach for when turning an idea into a working product.</p></div>
          <div className="tech-groups">{(["language", "library", "tool", "ai"] as const).map((category, index) => <div className="tech-group" data-reveal key={category} style={{ transitionDelay: `${index * 85}ms` }}><h3>{category === "library" ? "Frameworks & libraries" : category === "tool" ? "Tools & platforms" : category === "ai" ? "AI & automation" : "Languages"}</h3><div>{technologies.filter((technology) => technology.category === category).map((technology) => <span className="tech-item" key={technology.name}><b>{technology.name}</b><TechIcon compact icon={technology.icon} name={technology.name} className="technology-logo" /></span>)}</div></div>)}</div>
        </section>

        <section className="section perspective-section work-experience-section" id="work" data-stage>
          <div className="section-label mono"><span>03 / Work</span><span>Selected roles</span></div>
          <div className="section-masthead work-masthead" data-reveal><span className="mono">Career record / 03</span><h2>Work</h2><p>A practical record of the systems, research, and product teams I&apos;ve helped move forward.</p></div>
          <CareerScene />
        </section>

        <section className="section perspective-section projects-section" id="projects" data-stage>
          <div className="section-label mono"><span>04 / Projects</span><span>Things I&apos;ve made</span></div>
          <div className="section-masthead projects-masthead" data-reveal><span className="mono">Project archive / 04</span><h2>Projects</h2><p>Products, experiments, and prototypes built to make a particular problem a little clearer.</p></div>
          <ProjectScene onProjectOpen={setActiveProjectId} />
        </section>

        {activeProject && <div className="project-detail-backdrop" role="presentation" onClick={() => setActiveProjectId(null)}><article className="project-detail" role="dialog" aria-modal="true" aria-labelledby="project-detail-title" onClick={(event) => event.stopPropagation()}><button className="project-detail-close" onClick={() => setActiveProjectId(null)} aria-label="Close project details">×</button><span className="mono">Project file / {activeProject.id}</span><h2 id="project-detail-title">{activeProject.title}</h2><p className="project-detail-tagline">{activeProject.tagline}</p><p>{activeProject.description}</p>{activeProject.technologies.length > 0 && <div className="skills">{activeProject.technologies.map((technology) => <span className="skill" key={technology}>{technology}</span>)}</div>}{(activeProject.githubUrl || activeProject.liveUrl) && <a className="project-detail-link" href={activeProject.liveUrl || activeProject.githubUrl} target="_blank" rel="noreferrer">Open project ↗</a>}</article></div>}

        <section className="section contact" id="contact" data-stage>
          <div className="section-label mono"><span>05 / Contact me</span><span>Open to conversation</span></div>
          <div className="section-masthead contact-masthead" data-reveal><span className="masthead-icon" aria-hidden="true"><FaEnvelope /></span><h2>Contact<br />me.</h2><p>Have a product, an engineering challenge, or a great idea? Send a note. I&apos;m always interested in meeting people who are building with intention.</p></div>
          <div className="contact-grid">
            <div className="contact-links"><span className="mono">Find me elsewhere</span><div className="contact-social">{socialLinks.map((link) => <a key={link.id} href={link.url} target="_blank" rel="noreferrer">{link.name} ↗</a>)}</div></div>
            <form className="contact-form" onSubmit={submit}><input className="field" required placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /><input className="field" type="email" required placeholder="Email address" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /><input className="field" required placeholder="What&apos;s this about?" value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} /><textarea className="field" required placeholder="Your message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} /><button className="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message →"}</button>{status === "success" && <p className="form-status success">Message received — I&apos;ll be in touch.</p>}{status === "error" && <p className="form-status error">Something went wrong. Please try again.</p>}</form>
          </div>
        </section>
        <footer className="footer"><span>© {new Date().getFullYear()} Sagar Sahu</span><span>Built in New York · Next.js</span></footer>
      </div>
    </main>
  );
}
