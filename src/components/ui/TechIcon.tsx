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
  SiJira,
  SiGooglecloud,
  SiGnubash,
  SiR,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface TechIconProps {
  icon: string;
  name: string;
  className?: string;
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
  jira: SiJira,
  googlecloud: SiGooglecloud,
  bash: SiGnubash,
  r: SiR,
  cplusplus: SiCplusplus,
  c: SiC,
};

export default function TechIcon({ icon, name, className = "" }: TechIconProps) {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-4 rounded-xl bg-[#23232a] border border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-1 ${className}`}
      >
        <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-400">
          ?
        </div>
        <span className="mt-2 text-sm text-gray-300">{name}</span>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-xl bg-[#23232a] border border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <IconComponent className="w-10 h-10 text-gray-300 group-hover:text-rose-400" />
      <span className="mt-2 text-sm text-gray-300">{name}</span>
    </div>
  );
}
