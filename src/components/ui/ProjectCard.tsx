"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Link href={link} target="_blank">
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative flex flex-col justify-between p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full"
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl md:text-4xl font-medium text-white pr-4">{title}</h3>
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0">
              <ArrowUpRight className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors" />
            </div>
          </div>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-4 py-1.5 bg-black rounded-full border border-white/5 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
