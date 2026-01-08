"use client";

import { FaUsers, FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { leadership } from "@/data/leadership";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Leadership & Involvement" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item) => (
            <div
              key={item.id}
              className="card p-6 hover:border-rose-500/30 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500/20 transition-colors">
                <FaUsers className="w-6 h-6 text-rose-400" />
              </div>

              {/* Title & Organization */}
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-rose-400 font-medium text-sm mb-2">
                {item.organization}
              </p>

              {/* Date */}
              <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                <FaCalendarAlt className="w-3 h-3" />
                <span>
                  {item.startDate} - {item.endDate}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
