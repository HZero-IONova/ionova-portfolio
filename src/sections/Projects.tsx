"use client";
// components/ProjectsSection.jsx
import harcePortfolio from "@/assets/images/Harce_Portfolio.png";
import urbanBuild from "@/assets/images/UrbanBuild.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { motion } from "motion/react";

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
    <motion.section
      id="projects"
      className="pb-16 lg:py-24 bg-deepSpace text-lunarWhite"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 lg:max-w-5xl">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how we transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Project Info */}
                <div className="lg:pb-16">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex gap-2 font-poppins font-bold uppercase tracking-widest text-sm bg-gradient-to-r from-accent to-magenta text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="font-secondary text-light text-2xl mt-2 md:mt-5 md:text-4xl"
                  >
                    {project.title}
                  </motion.h3>
                  <hr className="border-t-2 border-light/20 mt-4 md:mt-5" />
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col gap-4 mt-4 md:mt-5"
                  >
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-light/60"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 text-accent" />
                        <span className="font-poppins">{result.title}</span>
                      </li>
                    ))}
                  </motion.ul>
                  <div className="mt-8 inline-flex items-center justify-center gap-2 h-12 px-6">
                    <ButtonProjects
                      text="Visit Live Site"
                      targetId={project.link}
                    />
                  </div>
                  {/* <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="mt-8 inline-flex items-center justify-center gap-2 bg-accent text-primary h-12 px-6 rounded-xl font-semibold font-poppins transition-colors duration-200 hover:bg-accent/90"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4 text-primary" />
                    </motion.button>
                  </a> */}
                </div>

                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 border border-tesla/20 rounded-md md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </motion.div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// import harcePortfolio from "@/assets/images/Harce_Portfolio.png";
// import Image from "next/image";
// import CheckCircleIcon from "@/assets/icons/check-circle.svg";
// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// import grainImage from "@/assets/images/grain.jpg";
// import { SectionHeader } from "@/components/SectionHeader";
// import { Card } from "@/components/Card";

// const portfolioProjects = [
//   {
//     company: "Hiram Arce",
//     year: "2025",
//     title: "Web Portfolio",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://harce-portfolio.vercel.app",
//     image: harcePortfolio,
//   },
//   {
//     company: "Innovative Co",
//     year: "2021",
//     title: "Light Saas Landing Page",
//     results: [
//       { title: "Boosted sales by 20%" },
//       { title: "Expanded customer reach by 35%" },
//       { title: "Increased brand awareness by 15%" },
//     ],
//     link: "https://youtu.be/7hi5zwO75yc",
//     image: lightSaasLandingPage,
//   },
//   {
//     company: "Quantum Dynamics",
//     year: "2023",
//     title: "AI Startup Landing Page",
//     results: [
//       { title: "Enhanced user experience by 40%" },
//       { title: "Improved site speed by 50%" },
//       { title: "Increased mobile traffic by 35%" },
//     ],
//     link: "https://youtu.be/Z7I5uSRHMHg",
//     image: aiStartupLandingPage,
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section className="pb-16 lg:py-24">
//       <div className="container">
//         <SectionHeader
//           eyebrow="Real-World Results"
//           title="Featured Projects"
//           description="See how We transformed concepts into engaging digital experiences."
//         />
//         <div className="mt-10 md:mt-20 flex flex-col gap-20">
//           {portfolioProjects.map((project) => (
//             <Card
//               key={project.title}
//               className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
//             >
//               <div className="lg:grid lg:grid-cols-2 lg:gap-16">
//                 <div className="lg:pb-16">
//                   <div className="bg-gradient-to-r from-accent to-magenta inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
//                     <span>{project.company}</span>
//                     <span>&bull;</span>
//                     <span>{project.year}</span>
//                   </div>
//                   <h3 className="font-secondary text-magenta text-2xl mt-2 md:mt-5 md:text-4xl">
//                     {project.title}
//                   </h3>
//                   <hr className="border-t-2 border-light/20 mt-4 md:mt-5" />
//                   <ul className="flex flex-col gap-4 mt-4 md:mt-5">
//                     {project.results.map((result) => (
//                       <li className="flex gap-2 text-sm md:text-base text-light/60">
//                         <CheckCircleIcon className="size-5 md:size-6" />
//                         {result.title}
//                       </li>
//                     ))}
//                   </ul>
//                   <a href={project.link}>
//                     <button className="bg-light/60 text-primary h-12 w w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
//                       <span>Visit Live Site</span>
//                       <ArrowUpRightIcon className="size-4" />
//                     </button>
//                   </a>
//                 </div>
//                 <div className="relative">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className="mt-8 -mb-4 border border-dark/60 rounded-md md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
//                   />
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
