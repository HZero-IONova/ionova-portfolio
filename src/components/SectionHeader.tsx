"use client";
import { motion } from "motion/react";

import { fadeIn } from "@/components/variants";

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
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-accent to-magenta bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </motion.div>
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="font-secondary text-3xl md:text-5xl text-center mt-6"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto"
      >
        {description}
      </motion.p>
    </>
  );
};
