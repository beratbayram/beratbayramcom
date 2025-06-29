"use client";

// https://kokonutui.com/docs/components/background-paths
// TODO add mention to the author

import { motion } from "motion/react";

const position = 0;
const PATHS = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
    380 - i * 5 * position
  } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
    152 - i * 5 * position
  } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
    684 - i * 5 * position
  } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
  color: `rgba(15,23,42,${0.1 + i * 0.03})`,
  width: 0.5 + i * 0.03,
}));

export function BgAnimation() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-[-1] flex min-h-screen w-full items-center justify-center overflow-hidden">
      <svg
        className="h-[100vh] translate-y-[200px] text-black dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
        aria-hidden="true"
      >
        <title>Background Paths</title>
        {PATHS.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
