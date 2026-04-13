"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import MotionButton from "@/components/ui/motion-button";
import ProjectCard from "@/components/ui/ProjectCard";
import HorizontalProjects from "@/components/ui/HorizontalProjects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Code, Briefcase, Mail, MessageSquare } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } as const }
};

const typeWriterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const typeWriterChild = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

function TypeWriterText({ text }: { text: string }) {
  return (
    <motion.span variants={typeWriterVariants} initial="hidden" animate="visible" className="inline-block whitespace-nowrap text-primary/70">
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={typeWriterChild} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic Age Calculation (Birthday: Jan 04)
  const birthDate = new Date('2007-01-04');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="mx-auto w-[95%]">
        <div className="mx-auto w-[85%] md:w-[80%]">
          {/* Hero Section */}
          <SectionWrapper id="home" className="min-h-screen flex flex-col justify-center pt-20">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex-1 space-y-8"
            >
              <motion.h1 variants={itemVariants} className="text-5xl md:text-[70px] font-bold tracking-tight text-white leading-[1.1]">
                I'm <span className="text-white md:text-[72px]">Peacefull</span>, a <br />
                <span className="text-primary/90 md:text-[72px]">{age}</span>-year-old developer <br />
                who <TypeWriterText text="solves real problems." />
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed font-light">
                Full-stack Developer & UI Specialist. I turn complex ideas into seamless digital experiences through code and design.
              </motion.p>
              <motion.div variants={itemVariants} className="flex gap-4 pt-4 items-center">
                <MotionButton label="View Projects" href="#projects" />
                <MotionButton label="Contact Me" href="#contact" classes="ml-2 !w-max px-8" />
              </motion.div>
            </motion.div>

            {/* Floating Profile Picture */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 0.8, type: "spring", stiffness: 200, damping: 20 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border border-primary/20 shrink-0 bg-neutral-900 shadow-[0_0_80px_rgba(211,251,23,0.1)]"
            >
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop";
                }}
              />
            </motion.div>
          </div>
        </SectionWrapper>

        {/* About Section */}
        <SectionWrapper id="about">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-12 tracking-tight">
            About <span className="text-primary/70">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-neutral-400 leading-relaxed font-light text-lg">
            <div className="space-y-8">
              <p>
                My journey started with a fascination for building things that live on the internet. Fast-forward to today, and I've had the privilege of developing premium SaaS products, interactive web applications, and intuitive user interfaces.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients. I enjoy the challenge of solving high-level architectural problems while maintaining a pixel-perfect design system.
              </p>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/50"></span>
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'].map(skill => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-5 py-2.5 border border-white/5 rounded-full text-sm bg-white/5 text-neutral-300 hover:text-primary hover:border-primary/30 cursor-default transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary/50"></span>
                  Backend & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'Firebase', 'Supabase', 'PostgreSQL', 'Git', 'Figma'].map(skill => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-5 py-2.5 border border-white/5 rounded-full text-sm bg-white/5 text-neutral-300 hover:text-primary hover:border-primary/30 cursor-default transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Projects Horizontal Scroll Section */}
      <HorizontalProjects />

      {/* Contact Section */}
      <SectionWrapper id="contact" className="pb-32">
        <div className="max-w-3xl mx-auto text-center space-y-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
          
          <h2 className="text-4xl md:text-6xl font-medium text-foreground tracking-tighter">
            Let's build <span className="text-primary">something</span>
          </h2>
          <p className="text-muted-foreground font-light text-xl max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="pt-8 flex justify-center">
            <a href="mailto:hello@example.com">
              <MotionButton label="Say Hello" classes="w-64 h-20 text-2xl" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-12 border-t border-white/5">
            {/* WhatsApp */}
            <motion.a 
              whileHover={{ y: -8 }} 
              href="https://wa.me/250793011038" 
              target="_blank" 
              className="flex items-center gap-3 text-neutral-500 hover:text-white transition-all duration-300 group"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <span className="text-sm font-medium">WhatsApp</span>
            </motion.a>

            {/* Instagram */}
            <motion.a 
              whileHover={{ y: -8 }} 
              href="https://instagram.com/___manzi" 
              target="_blank" 
              className="flex items-center gap-3 text-neutral-500 hover:text-white transition-all duration-300 group"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-gradient-to-tr group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.42.42.679.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.42-.819.679-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.42-.42-.679-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227C2.012 15.584 2 15.204 2 12s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.42.819-.679 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.337 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.337 1.384-2.126c.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.337-1.078-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </motion.a>

            {/* X (Twitter) */}
            <motion.a 
              whileHover={{ y: -8 }} 
              href="https://x.com/__peacefull___" 
              target="_blank" 
              className="flex items-center gap-3 text-neutral-500 hover:text-white transition-all duration-300 group"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
              <span className="text-sm font-medium">X (Twitter)</span>
            </motion.a>

            {/* Email */}
            <motion.a 
              whileHover={{ y: -8 }} 
              href="mailto:peacefullmanzi@gmail.com" 
              className="flex items-center gap-3 text-neutral-500 hover:text-white transition-all duration-300 group"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a1.75 1.75 0 01-1.85 0L1.5 8.67zm0-2.324l8.94 5.5a.25.25 0 00.264 0l8.941-5.5A3 3 0 0019.5 3.75h-15a3 3 0 00-3 2.596z"/></svg>
              </div>
              <span className="text-sm font-medium">Email</span>
            </motion.a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  </div>
  );
}
