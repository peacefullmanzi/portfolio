"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "temfy",
    description: "A modern SaaS application for streamlining table management in restaurants. Built with Next.js, Tailwind, and Firebase.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    link: "#",
  },
  {
    title: "LANTY Dashboard",
    description: "High-fidelity property management dashboard with complex state management and seamless Framer Motion animations.",
    tags: ["React", "Framer Motion", "Stripe", "Supabase"],
    link: "#",
  },
  {
    title: "Qorasoft SaaS",
    description: "A premium, dark-mode focused landing page for a SaaS product showcasing subtle micro-interactions and performance optimization.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  {
    title: "Friendship Quiz",
    description: "An interactive quiz application with real-time scoring and anonymous authentication via Firebase. Built completely Vanilla.",
    tags: ["Vanilla JS", "Firebase Auth", "Firestore", "CSS3"],
    link: "#",
  },
];

const marqueeProjects = [...projects, ...projects];

export default function HorizontalProjects() {
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    // Speed up on mobile (lower duration = faster)
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(15);
      } else {
        setDuration(35);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="relative pt-24 md:pt-32 pb-16 md:pb-0 overflow-hidden">
      <div className="w-full text-center px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
        >
          Selected <span className="text-primary italic">Projects</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
          className="flex gap-6 md:gap-8 px-4 w-fit"
        >
          {marqueeProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="w-[75vw] md:w-[500px] h-[350px] md:h-[450px] shrink-0"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
