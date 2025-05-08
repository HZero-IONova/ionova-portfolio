"use client";
import { motion } from "motion/react";

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center"
      >
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-accent to-magenta bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-secondary text-3xl md:text-5xl text-center mt-6"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto"
      >
        {description}
      </motion.p>
    </>
  );
};
