"use client";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiXcode,

  SiGnubash,
  SiR,
  SiCplusplus,
  SiC,
  SiKaggle,
  SiSpringboot,
  SiOracle,
  SiLooker,
  SiApachemaven,
  SiGooglegemini,
  SiClaude,
  SiOpenai,
  SiAppstore,
} from "react-icons/si";
import { FaAtom, FaICursor, FaJava, FaRobot } from "react-icons/fa";

interface TechIconProps {
  icon: string;
  name: string;
  className?: string;
  compact?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  java: FaJava,
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  docker: SiDocker,
  git: SiGit,
  linux: SiLinux,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  pandas: SiPandas,
  numpy: SiNumpy,
  scikitlearn: SiScikitlearn,
  html5: SiHtml5,
  css3: SiCss3,
  postman: SiPostman,
  xcode: SiXcode,
  appstore: SiAppstore,
  bash: SiGnubash,
  r: SiR,
  cplusplus: SiCplusplus,
  c: SiC,
  kaggle: SiKaggle,
  springboot: SiSpringboot,
  oracle: SiOracle,
  looker: SiLooker,
  maven: SiApachemaven,
  gemini: SiGooglegemini,
  claude: SiClaude,
  watsonx: FaRobot,
  cursor: FaICursor,
  openai: SiOpenai,
  antigravity: FaAtom,
};

export default function TechIcon({ icon, name, className = "", compact = false }: TechIconProps) {
  const IconComponent = iconMap[icon];

  if (compact) {
    return IconComponent ? <IconComponent className={className} aria-label={`${name} logo`} /> : <span className={className} aria-label={`${name} logo`}>?</span>;
  }

  if (!IconComponent) {
    return (
      <div
        className={`group flex flex-col items-center justify-center w-20 h-24 ${className}`}
      >
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-500 group-hover:border-rose-500/30 group-hover:bg-rose-500/5 transition-all">
          ?
        </div>
        <span className="mt-2 text-xs text-gray-400 text-center">{name}</span>
      </div>
    );
  }

  return (
    <div
      className={`group flex flex-col items-center justify-center w-20 h-24 ${className}`}
    >
      <div className="w-20 h-25 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-rose-500/30 group-hover:bg-rose-500/5 group-hover:-translate-y-1 transition-all duration-300">
        <IconComponent
          className={`${icon === "gemini" ? "w-12 h-12" : "w-10 h-10"} text-gray-400 group-hover:text-rose-400 transition-colors`}
        />
      </div>
      <span className="mt-2 text-xs text-gray-400 group-hover:text-gray-300 text-center transition-colors">{name}</span>
    </div>
  );
}
