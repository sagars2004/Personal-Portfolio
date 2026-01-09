"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypingEffect({
  text,
  className = "",
  speed = 60,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    if (!text) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`inline-block w-[3px] h-[1em] bg-rose-500 ml-1 align-middle rounded-sm animate-cursor-blink`}
      />
    </span>
  );
}
