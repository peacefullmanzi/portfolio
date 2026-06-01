'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  label: string
  classes?: string
  href?: string
}

const MotionButton: FC<Props> = ({ label, classes, href }) => {
  const commonProps = {
    initial: "initial",
    whileHover: "hover",
    whileTap: "tap",
    className: cn(
      'relative inline-flex items-center justify-center h-14 min-w-40 cursor-pointer rounded-full border border-white/20 overflow-hidden outline-none bg-transparent transition-colors hover:border-primary no-underline',
      classes
    )
  };

  const content = (
    <>
      {/* Expanding pill background */}
      <motion.span
        variants={{
          initial: {
            scale: 1,
            width: '2.8rem',
            height: '2.8rem',
            left: '0.35rem',
            top: '50%',
            y: '-50%',
            borderRadius: '100%'
          },
          hover: {
            scale: 1,
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            y: 0,
            borderRadius: '999px'
          },
          tap: { scale: 0.96 }
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.8
        }}
        className="absolute bg-primary pointer-events-none origin-center"
        aria-hidden="true"
      />

      {/* Arrow icon */}
      <motion.div
        variants={{
          initial: { x: 0, scale: 1 },
          hover: { x: 5, scale: 1.1 }
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="absolute top-1/2 left-3 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10"
      >
        <ArrowRight className="text-black size-6 md:size-7" />
      </motion.div>

      {/* Label */}
      <motion.span
        variants={{
          initial: { color: "#fff", x: 0 },
          hover: { color: "#000", x: 4 }
        }}
        transition={{ duration: 0.25 }}
        className="relative z-10 font-sans text-center text-lg font-medium tracking-tight whitespace-nowrap pl-12 pr-6"
      >
        {label}
      </motion.span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} {...(commonProps as any)}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...(commonProps as any)}>
      {content}
    </motion.button>
  );
}

export default MotionButton
