"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Blob config typed explicitly so we don't pass wrong shapes
interface BlobConfig {
  size: string;
  color: string;
  initialX: string;
  initialY: string;
  xPattern: number[];
  yPattern: number[];
  duration: number;
}

const blobs: BlobConfig[] = [
  // Primary colour — large, slow
  {
    color: "bg-[var(--color-primary)]",
    size: "w-[50vw] h-[50vw]",
    duration: 45,
    initialX: "-10vw",
    initialY: "-10vh",
    xPattern: [0, 300, -100, 200, 0],
    yPattern: [0, -200, 100, -300, 0],
  },
  {
    color: "bg-[var(--color-primary)]",
    size: "w-[40vw] h-[40vw]",
    duration: 50,
    initialX: "50vw",
    initialY: "50vh",
    xPattern: [0, -400, 200, -100, 0],
    yPattern: [0, 300, -200, 100, 0],
  },
  // White accent — smaller, faster
  {
    color: "bg-white",
    size: "w-[20vw] h-[20vw]",
    duration: 25,
    initialX: "20vw",
    initialY: "60vh",
    xPattern: [0, 400, -300, 500, 0],
    yPattern: [0, -400, 300, -200, 0],
  },
  {
    color: "bg-white",
    size: "w-[30vw] h-[30vw]",
    duration: 30,
    initialX: "70vw",
    initialY: "0vh",
    xPattern: [0, -500, 300, -400, 0],
    yPattern: [0, 400, -300, 200, 0],
  },
  {
    color: "bg-white",
    size: "w-[15vw] h-[15vw]",
    duration: 15,
    initialX: "80vw",
    initialY: "80vh",
    xPattern: [0, -600, 400, -500, 0],
    yPattern: [0, -500, 200, -300, 0],
  },
];

// Individual blob — uses CSS transform only (GPU-composited, no layout thrash)
function Blob({ color, size, duration, initialX, initialY, xPattern, yPattern }: BlobConfig) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-[0.45] mix-blend-screen ${color} ${size}`}
      style={{
        left: initialX,
        top: initialY,
        // Promote to its own GPU layer — avoids triggering layout/paint on siblings
        willChange: "transform",
      }}
      animate={{
        x: xPattern,
        y: yPattern,
        scale: [1, 1.15, 0.92, 1.08, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        // Each property gets its own sub-transition so scale doesn't stutter
        x: { duration, repeat: Infinity, ease: "easeInOut" },
        y: { duration, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: duration * 0.6, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
}

export default function BackgroundBlobs() {
  // Avoid SSR/hydration mismatch — blobs are purely decorative
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background"
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <Blob key={i} {...blob} />
      ))}

      {/* Frosted glass overlay — heavy blur creates depth without expensive filters on blobs */}
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-[120px]"
        style={{ willChange: "auto" }}
      />
    </div>
  );
}
