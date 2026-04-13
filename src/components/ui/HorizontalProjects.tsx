"use client";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Tablio",
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

export default function HorizontalProjects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  // Track scroll depth of this 300vh section to drive the horizontal scroll percentage
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Apply a spring physics layer to make the scroll incredibly buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Calculate the horizontal shift based on the smoothed progress
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] scroll-mt-20">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Sticky Title */}
        <div className="absolute top-24 md:top-32 left-0 right-0 w-full pointer-events-none z-10">
          <div className="w-full text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-medium text-white drop-shadow-lg"
            >
              Selected <span className="text-primary/90">Projects</span>
            </motion.h2>
          </div>
        </div>

        {/* Horizontal Card Deck - Smaller Cards, Wide Span */}
        <motion.div 
          style={{ x }} 
          className="flex gap-8 pl-[2.5vw] pt-16 md:pt-40 pb-8 h-[65vh] md:h-[70vh] max-h-[750px] min-h-[450px]"
        >
          {projects.map((project, idx) => (
            <div key={idx} className="w-[85vw] md:w-[480px] h-full shrink-0">
               <ProjectCard {...project} />
            </div>
          ))}
          {/* Subtle spacer block at the end */}
          <div className="w-[5vw] shrink-0" />
        </motion.div>

      </div>
    </section>
  );
}
