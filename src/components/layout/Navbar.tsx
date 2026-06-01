"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    // Set initial state in case page starts mid-scroll (e.g. browser refresh)
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-center transition-all duration-300"
      style={{ paddingBlock: scrolled ? "1rem" : "1.5rem" }}
    >
      <nav
        className={cn(
          "flex items-center gap-6 px-8 py-3 rounded-full border transition-all duration-300",
          scrolled
            ? "border-white/15 bg-black/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "border-white/8 bg-white/5 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
