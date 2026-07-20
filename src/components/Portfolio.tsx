"use client";

import { CSSProperties, FormEvent, PointerEvent as ReactPointerEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
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
const creatorLinks = [
  { name: "Beacons", url: "https://beacons.ai/sagarsahu?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnpCBqzLDHlZql3LGJK8TLsQAREiQenQOsmEqk_IIxpzNn9MTFNJPJle0d8g0_aem_4DTpW-I6B7OTIgdDAVikkg" },
  { name: "Instagram", url: "https://www.instagram.com/morebysagar" },
  { name: "TikTok", url: "https://www.tiktok.com/@sagarsahu8749" },
];
const knowledgeCards = [
  ...education.coursework.slice(0, 10),
  education.coursework[education.coursework.length - 1],
].filter((course): course is string => Boolean(course));
const heroNameWords = ["Sagar", "Sahu"] as const;
const cipherGlyphs = "0123456789ABCDEF";

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

interface ProjectParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
}

function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function scrambleHeroWord(word: string, frame: number, totalFrames: number) {
  const resolveStart = Math.floor(totalFrames * 0.45);
  const resolution = clamp((frame - resolveStart) / Math.max(totalFrames - resolveStart, 1));
  const resolvedCharacters = Math.floor(resolution * word.length);

  return Array.from(word).map((character, index) => (
    index < resolvedCharacters ? character : cipherGlyphs[Math.floor(Math.random() * cipherGlyphs.length)]
  )).join("");
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

function MonochromeLogo({ src, alt, className = "", dropLight = false }: { src: string; alt: string; className?: string; dropLight?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (cancelled) return;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) return;

      const size = 220;
      canvas.width = size;
      canvas.height = size;
      context.clearRect(0, 0, size, size);
      context.drawImage(image, 0, 0, size, size);

      const pixels = context.getImageData(0, 0, size, size);
      const { data } = pixels;
      const cornerOffsets = [0, size - 1, (size - 1) * size, size * size - 1];
      const background = cornerOffsets.reduce<[number, number, number]>((total, pixelIndex) => {
        const offset = pixelIndex * 4;
        return [total[0] + data[offset], total[1] + data[offset + 1], total[2] + data[offset + 2]];
      }, [0, 0, 0]).map((channel) => channel / cornerOffsets.length);

      for (let offset = 0; offset < data.length; offset += 4) {
        const red = data[offset];
        const green = data[offset + 1];
        const blue = data[offset + 2];
        const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
        const distance = Math.hypot(red - background[0], green - background[1], blue - background[2]);
        const foreground = dropLight && luminance > 225 ? 0 : clamp((distance - 34) / 102, 0, 1);

        data[offset] = 7;
        data[offset + 1] = 17;
        data[offset + 2] = 31;
        data[offset + 3] = Math.round(data[offset + 3] * foreground);
      }

      context.putImageData(pixels, 0, 0);
    };
    image.src = src;

    return () => {
      cancelled = true;
      image.onload = null;
    };
  }, [dropLight, src]);

  return <canvas ref={canvasRef} className={`monochrome-logo ${className}`.trim()} width="220" height="220" role="img" aria-label={alt} />;
}

function HeroCipherWord({ word, displayText, isScrambling }: { word: string; displayText: string; isScrambling: boolean }) {
  return (
    <h1 className={`hero-cipher${isScrambling ? " is-scrambling" : ""}`} aria-label={word}>
      {Array.from(displayText).map((character, index) => <span aria-hidden="true" key={`${word}-${index}`}>{character}</span>)}
    </h1>
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
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<ProjectParticle[]>([]);
  const particleFrameRef = useRef(0);

  const animateProjectParticles = () => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;

    const bounds = canvas.getBoundingClientRect();
    if (bounds.width === 0 || bounds.height === 0) return;

    const pixelRatio = window.devicePixelRatio || 1;
    const canvasWidth = Math.round(bounds.width * pixelRatio);
    const canvasHeight = Math.round(bounds.height * pixelRatio);
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }

    const context = canvas.getContext("2d");
    if (!context) return;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, bounds.width, bounds.height);
    context.fillStyle = "#f3f0e8";

    particlesRef.current = particlesRef.current.filter((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.45;
      particle.scale = Math.min(1, particle.scale + Math.random() * 0.01);

      context.globalAlpha = particle.scale;
      context.beginPath();
      context.arc(particle.x, particle.y, 9 * particle.scale, 0, Math.PI * 2);
      context.fill();

      return particle.y <= bounds.height + 18;
    });
    context.globalAlpha = 1;

    particleFrameRef.current = particlesRef.current.length > 0
      ? window.requestAnimationFrame(animateProjectParticles)
      : 0;
  };

  const burstProjectParticles = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 640px)").matches) return;

    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const cardBounds = event.currentTarget.getBoundingClientRect();
    const canvasBounds = canvas.getBoundingClientRect();
    const burstSize = event.pointerType === "touch" ? 3 : 6;
    const originX = cardBounds.left + cardBounds.width / 2 - canvasBounds.left;
    const originY = cardBounds.top + cardBounds.height / 2 - canvasBounds.top;

    particlesRef.current.push(...Array.from({ length: burstSize }, () => ({
      x: originX,
      y: originY,
      vx: -5 + Math.random() * 10,
      vy: -15 + Math.random() * 10,
      scale: 0.25 + Math.random() * 0.75,
    })));

    if (!particleFrameRef.current) particleFrameRef.current = window.requestAnimationFrame(animateProjectParticles);
  };

  useEffect(() => () => {
    window.cancelAnimationFrame(particleFrameRef.current);
    particlesRef.current = [];
  }, []);

  return (
    <div className="project-scroll-scene" data-project-scene style={{ "--project-scene-height": `${110 + projects.length * 54}svh`, "--project-progress": 0 } as VariableStyle}>
      <div className="project-sticky">
        <div className="project-arc-field" aria-hidden="true">{scanRings.map((ring) => <i key={ring} style={{ "--ring-index": ring } as VariableStyle} />)}</div>
        <canvas ref={particleCanvasRef} className="project-particle-canvas" aria-hidden="true" />
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
              onPointerEnter={burstProjectParticles}
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
  const [heroCipherWords, setHeroCipherWords] = useState<string[]>(() => [...heroNameWords]);
  const [isHeroScrambling, setIsHeroScrambling] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedMessage, setTypedMessage] = useState("");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isThemeWiping, setIsThemeWiping] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useLayoutEffect(() => {
    const canControlRestoration = "scrollRestoration" in window.history;
    const previousRestoration = canControlRestoration ? window.history.scrollRestoration : undefined;
    if (canControlRestoration) window.history.scrollRestoration = "manual";

    const resetToHome = () => {
      if (window.location.hash) {
        window.history.replaceState(window.history.state, document.title, `${window.location.pathname}${window.location.search}`);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    resetToHome();
    const frame = window.requestAnimationFrame(resetToHome);
    const timer = window.setTimeout(resetToHome, 0);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      if (canControlRestoration && previousRestoration) window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cycleTimer = 0;
    let frameTimer = 0;

    const scheduleScramble = () => {
      cycleTimer = window.setTimeout(() => {
        const frameCount = 26;
        let frame = 0;
        setIsHeroScrambling(true);

        frameTimer = window.setInterval(() => {
          frame += 1;
          setHeroCipherWords(heroNameWords.map((word) => scrambleHeroWord(word, frame, frameCount)));

          if (frame >= frameCount) {
            window.clearInterval(frameTimer);
            setHeroCipherWords([...heroNameWords]);
            setIsHeroScrambling(false);
            scheduleScramble();
          }
        }, 48);
      }, 6800 + Math.random() * 5200);
    };

    scheduleScramble();
    return () => {
      window.clearTimeout(cycleTimer);
      window.clearInterval(frameTimer);
    };
  }, [ready]);

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
        card.style.pointerEvents = visibility > 0.8 ? "auto" : "none";
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
          <nav className="site-nav" aria-label="Primary navigation"><a className="nav-link" href="#about">About</a><a className="nav-link" href="#work">Experience</a><a className="nav-link" href="#contact">Contact</a></nav>
          <div className="socials" aria-label="Social links">
            {socialLinks.filter((link) => link.id !== "linktree").map((link) => <a key={link.id} className="icon-link" href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}>{link.id === "github" ? <FaGithub /> : <FaLinkedinIn />}</a>)}
            <a className="icon-link" href="#projects" aria-label="View projects"><FaLink /></a><a className="icon-link" href="#contact" aria-label="Send an email"><FaEnvelope /></a>
          </div>
          <button className="contrast-toggle" onClick={toggleTheme} aria-label="Toggle light and dark theme">{isLightMode ? "◑" : "◐"}</button>
          <div className="headline-note"><span className="headline-role">Software engineer & AI product builder working in fintech</span><span className="headline-message"><a className="headline-cta" href="#contact"><span aria-hidden="true">→</span><span>Let&apos;s start a conversation</span></a></span></div>
        </header>

        <section id="home">
          <div className="hero-field"><SignalField /><TimeOnEarth /></div>
          <div className="data-strip"><span>▸ {binary} &nbsp;&nbsp;&nbsp; {binary} &nbsp;&nbsp;&nbsp; {binary}</span></div>
          <div className="hero-name">
            <HeroCipherWord word={heroNameWords[0]} displayText={heroCipherWords[0]} isScrambling={isHeroScrambling} />
            <div className="hero-sparks" aria-hidden="true">
              <span className="spark spark--one"><i>✦</i></span>
              <span className="spark spark--two"><i>✧</i></span>
              <span className="spark spark--three"><i>✦</i></span>
            </div>
            <HeroCipherWord word={heroNameWords[1]} displayText={heroCipherWords[1]} isScrambling={isHeroScrambling} />
          </div>
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
            <div className="about-copy" data-reveal><h2 className="about-title"><span>About</span><span>Me</span></h2><p className="about-lead">I&apos;m Sagar — a full-stack software engineer and computer scientist who enjoys shaping messy, high-stakes problems into software people can actually use.</p></div>
            <div className="about-operating-field" data-reveal aria-label="Operating fields: product engineering, software development, applied AI, and financial technology."><span className="mono">Operating field</span><div className="field-diagram"><i className="field-link field-link--one" aria-hidden="true" /><i className="field-link field-link--two" aria-hidden="true" /><i className="field-link field-link--three" aria-hidden="true" /><span className="field-node field-node--one"><b>01</b><em>Product<br />engineering</em></span><span className="field-node field-node--two"><b>02</b><em>Applied AI</em></span><span className="field-node field-node--three"><b>03</b><em>Financial<br />technology</em></span><span className="field-node field-node--four"><b>04</b><em>Software<br />development</em></span></div></div>
            <p className="about-side" data-reveal>I work across product engineering, software development, applied AI, and financial technology. From intelligent workflows to consumer tools, I care about thoughtful systems that feel clear, quick, and human.</p>
            <div className="about-records" data-reveal>
              <article className="about-education-record"><span className="mono">Education / 01</span><div className="about-record-heading"><MonochromeLogo src={education.logo} alt="Rensselaer Polytechnic Institute logo" className="education-logo" dropLight /><div><h3>{education.degree}</h3><p>{education.school}</p></div></div><div className="about-record-meta"><span>{education.location}</span><span>{education.startDate} — {education.endDate}</span><span>{education.concentration}</span><span>Minor in {education.minor}</span></div><section className="education-knowledge" aria-label="Relevant knowledge"><span className="education-section-label mono">Relevant Knowledge</span><ul className="knowledge-list">{knowledgeCards.map((course) => <li key={course}>{course}</li>)}</ul></section><div className="education-support-grid"><section className="education-support-group"><h4 className="mono">Honors &amp; Awards</h4><ul>{education.honors.map((honor) => <li key={honor}>{honor}</li>)}</ul></section><section className="education-support-group"><h4 className="mono">Extracurriculars</h4><ul>{education.extracurriculars.map((activity) => <li key={activity}>{activity}</li>)}</ul></section><section className="education-support-group"><h4 className="mono">Certifications</h4><ul>{education.certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul></section></div></article>
              <article className="about-creator-record"><span className="mono">Content / UGC</span><h3>Creator<br />work.</h3><span className="creator-accolade mono">2× Hackathon winner</span><p>Find my content, UGC work, professional updates, and the things I&apos;m building outside the code editor.</p><p>Outside of the code editor, I share experiments, lessons, and the small creative systems that shape how I build.</p><div className="about-creator-links">{creatorLinks.map((link) => <a key={link.name} href={link.url} target="_blank" rel="noreferrer">{link.name} <b>↗</b></a>)}</div></article>
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
          <div className="section-masthead work-masthead" data-reveal><span className="mono">Career record / 03</span><h2>Experience</h2><p>A practical record of the systems, research, and product teams I&apos;ve helped move forward.</p></div>
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
          <div className="section-masthead contact-masthead" data-reveal><span className="masthead-icon" aria-hidden="true"><FaEnvelope /></span><h2>Let's connect</h2><p>Have a product, an engineering challenge, or a great idea? Send a note. I&apos;m always interested in meeting people who are building with intention.</p></div>
          <div className="contact-grid">
            <div className="contact-links"><span className="mono">Find me elsewhere</span><div className="contact-social">{socialLinks.map((link) => <a key={link.id} href={link.url} target="_blank" rel="noreferrer">{link.name} ↗</a>)}</div></div>
            <form className="contact-form" onSubmit={submit}><input className="field" required placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /><input className="field" type="email" required placeholder="Email address" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /><input className="field" required placeholder="What&apos;s this about?" value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} /><textarea className="field" required placeholder="Your message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} /><button className="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message →"}</button>{status === "success" && <p className="form-status success">Message received — I&apos;ll be in touch.</p>}{status === "error" && <p className="form-status error">Something went wrong. Please try again.</p>}</form>
          </div>
        </section>
        <footer className="footer"><span>© {new Date().getFullYear()} Sagar Sahu. All rights Reserved.</span><span>Built in New York</span></footer>
      </div>
    </main>
  );
}
