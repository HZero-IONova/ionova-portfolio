"use client";

import memojiImage from "@/assets/images/memoji-nene.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip bg-deepSpace text-light"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* Hero rings */}
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {/* Orbits by Size */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-magenta/50" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-magenta/50" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-light/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-magenta/50" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-accent/60" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-accent/60" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-light/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-magenta/50" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-light/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-accent/60" />
        </HeroOrbit>
      </div>

      <div className="container">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center"
        >
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />

          <div className="bg-orbitSurface border border-light/20 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium text-light">
              Available for new Projects
            </div>
          </div>
        </motion.div>
        <div className="max-w-lg mx-auto">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-secondary text-3xl md:text-5xl text-center mt-8 tracking-wide text-light"
          >
            Building Exceptional User Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 text-center text-light/70 md:text-lg"
          >
            We specialize in transforming designs into functional,
            high-performing web applications. Let’s discuss your next project.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          {/* Ghost button */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="inline-flex items-center gap-2 border border-tesla px-6 h-12 rounded-xl transition-colors duration-200 hover:bg-orbitSurface"
          >
            <span className="font-poppins font-semibold text-light">
              Explore Our Work
            </span>
            <ArrowDown className="size-4" />
          </motion.button>

          {/* Primary CTA */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="inline-flex items-center gap-2 bg-light text-dark h-12 px-6 rounded-xl transition-colors duration-200 hover:bg-[#C2185B]"
          >
            <span className="text-lg">👋</span>
            <span className="font-poppins font-semibold">Let’s Connect</span>
          </motion.button>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
  //     <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
  //       <div
  //         className="absolute inset-0 -z-30 opacity-5"
  //         style={{
  //           backgroundImage: `url(${grainImage.src})`,
  //         }}
  //       ></div>
  //       <div className="size-[620px] hero-ring"></div>
  //       <div className="size-[820px] hero-ring"></div>
  //       <div className="size-[1020px] hero-ring"></div>
  //       <div className="size-[1220px] hero-ring"></div>
  //       <HeroOrbit size={800} rotation={-72}>
  //         <StarIcon className="size-28 text-accent" />
  //       </HeroOrbit>
  //       <HeroOrbit size={550} rotation={20}>
  //         <StarIcon className="size-12 text-accent" />
  //       </HeroOrbit>
  //       <HeroOrbit size={590} rotation={98}>
  //         <StarIcon className="size-8 text-accent" />
  //       </HeroOrbit>
  //       <HeroOrbit size={430} rotation={-14}>
  //         <SparkleIcon className="size-8 text-magenta/50" />
  //       </HeroOrbit>
  //       <HeroOrbit size={440} rotation={79}>
  //         <SparkleIcon className="size-5 text-magenta/50" />
  //       </HeroOrbit>
  //       <HeroOrbit size={530} rotation={178}>
  //         <SparkleIcon className="size-10 text-magenta/50" />
  //       </HeroOrbit>
  //       <HeroOrbit size={710} rotation={144}>
  //         <SparkleIcon className="size-14 text-magenta/50" />
  //       </HeroOrbit>
  //       <HeroOrbit size={720} rotation={85}>
  //         <div className="size-3 rounded-full bg-dark/20" />
  //       </HeroOrbit>
  //       <HeroOrbit size={520} rotation={-41}>
  //         <div className="size-2 rounded-full bg-dark/20" />
  //       </HeroOrbit>
  //       <HeroOrbit size={650} rotation={-5}>
  //         <div className="size-2 rounded-full bg-dark/20" />
  //       </HeroOrbit>
  //     </div>
  //     <div className="container">
  //       <div className="flex flex-col items-center">
  //         <Image
  //           src={memojiImage}
  //           className="size-[100px]"
  //           alt="Person peeking from behind laptop"
  //         />
  //         <div className="bg-light/30 border border-dark/20 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
  //           <div className="bg-green-500 size-2.5 rounded-full"></div>
  //           <div className="text-sm font-medium">
  //             Available for new Projects
  //           </div>
  //         </div>
  //       </div>
  //       <div className="max-w-lg mx-auto">
  //         <h1 className="font-secondary text-3xl md:text-5xl text-center mt-8 tracking-wide">
  //           Building Exceptional User Experiences
  //         </h1>
  //         <p className="mt-4 text-center text-light/60 md:text-lg">
  //           We specialize in transforming designs into functional,
  //           high-performing web applications. Let's discuss your next project.
  //         </p>
  //       </div>
  //       <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
  //         <button className="inline-flex items-center gap-2 border border-light/15 px-6 h-12 rounded-xl">
  //           <span className="font-semibold">Explore Our Work</span>
  //           <ArrowDown className="size-4" />
  //         </button>
  //         <button className="inline-flex items-center gap-2 border-dark bg-magenta text-dark h-12 px-6 rounded-xl">
  //           <span className="text-lg">👋</span>
  //           <span className="text-semibold">Let's Connect</span>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};
