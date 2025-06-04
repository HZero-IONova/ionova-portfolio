"use client";
// components/ProjectsSection.jsx
import harcePortfolio from "@/assets/images/Harce_Portfolio.png";
import urbanBuild from "@/assets/images/UrbanBuild.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { motion } from "motion/react";

import { fadeIn } from "@/components/variants";

import ButtonProjects from "@/components/ButtonProjects";

const portfolioProjects = [
  {
    company: "Hiram Arce",
    year: "2025",
    title: "Web Portfolio",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://harce-portfolio.vercel.app",
    image: harcePortfolio,
  },
  {
    company: "UrbanBuild",
    year: "2025",
    title: "Landing Page",
    results: [
      { title: "Enhanced user experience by 50%" },
      { title: "Improved site speed by 80%" },
      { title: "Increased mobile traffic by 55%" },
    ],
    link: "https://construction-template-mu.vercel.app",
    image: urbanBuild,
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="pb-16 lg:py-24 bg-deepSpace text-lunarWhite"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 lg:max-w-5xl">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how we transformed concepts into engaging digital experiences."
        />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-10 md:mt-20 flex flex-col gap-20"
        >
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Project Info */}
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 font-poppins font-bold uppercase tracking-widest text-sm bg-gradient-to-r from-accent to-magenta text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-secondary text-light text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-light/20 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-light/60"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 text-accent" />
                        <span className="font-poppins">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 inline-flex items-center justify-center gap-2 h-12 px-6">
                    <ButtonProjects
                      text="Visit Live Site"
                      targetId={project.link}
                    />
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 border border-tesla/20 rounded-md md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
