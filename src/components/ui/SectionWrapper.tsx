"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }}
      className={`py-24 md:py-32 ${className || ""}`}
    >
      {children}
    </motion.section>
  );
}
