'use client'

import { motion, useScroll } from 'framer-motion'

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-14 left-0 right-0 h-[3px] bg-navy origin-left z-40"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
