"use client";

import { FaUsers, FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { leadership } from "@/data/leadership";

export default function Leadership() {
  return (
    <section id="leadership" className="min-h-screen py-24 px-4 scroll-mt-16 relative overflow-hidden">
      {/* Background accents - animated */}
      <div className="absolute top-[15%] right-[5%] w-[380px] h-[380px] bg-rose-500/10 rounded-full blur-[75px] animate-blob-reverse animation-delay-1000" />
      <div className="absolute bottom-[15%] left-[15%] w-[320px] h-[320px] bg-red-500/10 rounded-full blur-[65px] animate-blob-drift animation-delay-5000" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading title="Leadership & Involvement" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item) => (
            <div
              key={item.id}
              className="card p-8 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 group-hover:bg-rose-500/20 transition-colors">
                <FaUsers className="w-7 h-7 text-rose-400" />
              </div>

              {/* Title & Organization */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-rose-400 font-medium text-sm mb-3">
                {item.organization}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <FaCalendarAlt className="w-3 h-3" />
                <span>
                  {item.startDate} - {item.endDate}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
