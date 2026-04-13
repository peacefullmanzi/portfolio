"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Individual blob with dynamic physics
const Blob = ({ 
  color, 
  size, 
  duration, 
  initialX, 
  initialY,
  xPattern,
  yPattern 
}: { 
  color: string; 
  size: string; 
  duration: number; 
  initialX: string; 
  initialY: string;
  xPattern: number[];
  yPattern: number[];
}) => {
  return (
    <motion.div
      className={`absolute rounded-full opacity-50 mix-blend-screen ${color} ${size}`}
      style={{ left: initialX, top: initialY }}
      animate={{
        x: xPattern,
        y: yPattern,
        scale: [1, 1.2, 0.9, 1.1, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default function BackgroundBlobs() {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      
      {/* Primary Color Blobs - Larger and slower */}
      <Blob 
        color="bg-[var(--color-primary)]" 
        size="w-[50vw] h-[50vw]" 
        duration={45} 
        initialX="-10vw" 
        initialY="-10vh" 
        xPattern={[0, 300, -100, 200, 0]} 
        yPattern={[0, -200, 100, -300, 0]} 
      />
      <Blob 
        color="bg-[var(--color-primary)]" 
        size="w-[40vw] h-[40vw]" 
        duration={50} 
        initialX="50vw" 
        initialY="50vh" 
        xPattern={[0, -400, 200, -100, 0]}
        yPattern={[0, 300, -200, 100, 0]}
      />
      
      {/* Whitish Color Blobs - Smaller and faster */}
      <Blob 
        color="bg-white" 
        size="w-[20vw] h-[20vw]" 
        duration={25} 
        initialX="20vw" 
        initialY="60vh" 
        xPattern={[0, 400, -300, 500, 0]}
        yPattern={[0, -400, 300, -200, 0]}
      />
      <Blob 
        color="bg-white" 
        size="w-[30vw] h-[30vw]" 
        duration={30} 
        initialX="70vw" 
        initialY="0vh" 
        xPattern={[0, -500, 300, -400, 0]}
        yPattern={[0, 400, -300, 200, 0]}
      />
      <Blob 
        color="bg-white" 
        size="w-[15vw] h-[15vw]" 
        duration={15} 
        initialX="80vw" 
        initialY="80vh" 
        xPattern={[0, -600, 400, -500, 0]}
        yPattern={[0, -500, 200, -300, 0]}
      />

      {/* Extreme Glass Mirror Overlay - Heavily blurs the blobs beneath to feel like peering through frosted glass */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[120px]" />
    </div>
  );
}
