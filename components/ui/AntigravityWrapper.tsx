"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AntigravityWrapperProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function AntigravityWrapper({
  children,
  className = "",
  duration = 5,
}: AntigravityWrapperProps) {
  // Define variants combining the vertical movement and the synchronized shadow
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      boxShadow: [
        "8px 8px 16px #c8ccd0, -8px -8px 16px #ffffff", // Base state (y: 0) tighter shadow
        "15px 15px 30px #b8bec4, -15px -15px 30px #ffffff", // Elevated state (y: -15) wider, softer shadow
        "8px 8px 16px #c8ccd0, -8px -8px 16px #ffffff", // Back to Base (y: 0)
      ],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    // The "Hover to Anchor" effect
    hover: {
      y: 0,
      // Switch to a tight inset shadow to simulate being "pressed" or "caught"
      boxShadow: "inset 6px 6px 12px #c8ccd0, inset -6px -6px 12px #ffffff",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={floatingVariants}
      animate="animate"
      whileHover="hover"
      // Default rounded corners and background color included to maintain the Neumorphic illusion
      className={`rounded-3xl bg-[#F0F4F8] overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
