"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });

  return (
    <motion.div
      className="fixed bottom-0 w-full h-1 bg-linear-to-r from-violet-700 to-violet-900 origin-left will-change-transform z-60"
      style={{ scaleX }}
    />
  );
}
