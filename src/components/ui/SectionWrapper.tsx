"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      // once:true prevents re-triggering; margin 0px means it animates exactly when it enters viewport
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.65, ease: [0.21, 1, 0.36, 1] }}
      className={cn("py-24 md:py-32", className)}
    >
      {children}
    </motion.section>
  );
}
