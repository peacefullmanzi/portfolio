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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <nav className="flex items-center gap-6 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] shadow-black/50">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
