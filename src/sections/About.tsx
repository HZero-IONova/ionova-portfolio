"use client";

// components/AboutSection.jsx
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import brainNetwork from "@/assets/images/HumanCode.png";
import Image from "next/image";
import mapImage from "@/assets/images/Map-nene.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import {
  FaJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaMicrosoft,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { useRef } from "react";

import { fadeIn } from "@/components/variants";

const toolboxItems = [
  { title: "Javascript", iconType: FaJs },
  { title: "React.js", iconType: FaReact },
  { title: "Next.js", iconType: SiNextdotjs },
  { title: "GitHub", iconType: FaGithub },
  { title: "Tailwind.css", iconType: SiTailwindcss },
  { title: "Node.js", iconType: FaNodeJs },
  { title: "Python", iconType: FaPython },
  { title: "SQL", iconType: FaDatabase },
  { title: "CSS", iconType: FaCss3 },
  { title: "HTML", iconType: FaHtml5 },
  { title: "Power Platforms", iconType: FaMicrosoft },
];

const hobbies = [
  { title: "Reading", emoji: "📖", left: "5%", top: "5%" },
  { title: "Cooking", emoji: "👨🏻‍🍳", left: "50%", top: "5%" },
  { title: "Fitness", emoji: "🏋🏻", left: "35%", top: "40%" },
  { title: "Music", emoji: "🎸", left: "10%", top: "35%" },
  { title: "Hiking", emoji: "🥾", left: "70%", top: "45%" },
  { title: "Photography", emoji: "📸", left: "5%", top: "65%" },
  { title: "Outdoors", emoji: "🌄", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 lg:max-w-5xl">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Reads & Toolbox */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3"
          >
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Human + Code"
                description="Human insight, Technical Precision -- Behind great code, there’s always a greater mind."
              />
              <div className="w-40 mx-auto mt-3 md:mt-0">
                <Image src={brainNetwork} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Our Tech Stack"
                description="Discover the trusted technologies and tools we use to build reliable, scalable, and results-driven digital experiences."
              />
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:45s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </motion.div>

          {/* Hobbies & Map */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8"
          >
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Off the Grid"
                description="Passions and pursuits that inspire creative thinking and reflect who We are beyond the professional sphere."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-magenta to-accent"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-primary">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-dark/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-magenta to-tesla -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-magenta to-tesla -z-20 animate-ping [animation-duration:2s]"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// import { SectionHeader } from "@/components/SectionHeader";
// import { Card } from "@/components/Card";
// import { CardHeader } from "@/components/CardHeader";
// import { ToolBoxItems } from "@/components/ToolBoxItems";
// import StarIcon from "@/assets/icons/star.svg";
// import bookImage from "@/assets/images/book-cover.png";
// import Image from "next/image";

// import mapImage from "@/assets/images/Map-nene.png";
// import smileMemoji from "@/assets/images/memoji-smile.png";
// import {
//   FaJs,
//   FaPython,
//   FaDatabase,
//   FaHtml5,
//   FaCss3,
//   FaReact,
//   FaNodeJs,
//   FaMicrosoft,
//   FaGithub,
// } from "react-icons/fa";

// import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
// import { TechIcon } from "@/components/TechIcon";

// const toolboxItems = [
//   {
//     title: "Javascript",
//     iconType: FaJs,
//   },
//   {
//     title: "React.js",
//     iconType: FaReact,
//   },
//   {
//     title: "Next.js",
//     iconType: SiNextdotjs,
//   },
//   {
//     title: "GitHub",
//     iconType: FaGithub,
//   },
//   {
//     title: "Tailwind.css",
//     iconType: SiTailwindcss,
//   },
//   {
//     title: "Node.js",
//     iconType: FaNodeJs,
//   },
//   {
//     title: "Python",
//     iconType: FaPython,
//   },
//   {
//     title: "SQL",
//     iconType: FaDatabase,
//   },
//   {
//     title: "CSS",
//     iconType: FaCss3,
//   },
//   {
//     title: "HTML",
//     iconType: FaHtml5,
//   },

//   {
//     title: "Power Platforms",
//     iconType: FaMicrosoft,
//   },
// ];

// const hobbies = [
//   {
//     title: "Reading",
//     emoji: "📖",
//     left: "5%",
//     top: "5%",
//   },
//   {
//     title: "Cooking",
//     emoji: "👨🏻‍🍳",
//     left: "50%",
//     top: "5%",
//   },
//   {
//     title: "Fitness",
//     emoji: "🏋🏻",
//     left: "35%",
//     top: "40%",
//   },
//   {
//     title: "Music",
//     emoji: "🎸",
//     left: "10%",
//     top: "35%",
//   },

//   {
//     title: "Hiking",
//     emoji: "🥾",
//     left: "70%",
//     top: "45%",
//   },
//   {
//     title: "Photography",
//     emoji: "📸",
//     left: "5",
//     top: "65%",
//   },
//   {
//     title: "Outdoors",
//     emoji: "🌄",
//     left: "45%",
//     top: "70%",
//   },
// ];

// export const AboutSection = () => {
//   return (
//     <div className="py-20 lg:py-28">
//       <div className="container">
//         <SectionHeader
//           eyebrow="About Me"
//           title="A Glimpse into my World"
//           description="Learn more about who I am, what I do, and what inspires me."
//         />
//         <div className="mt-20 flex flex-col gap-8">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
//             <Card className="h-[320px] md:col-span-2 lg:col-span-1">
//               <CardHeader
//                 title="My Reads"
//                 description="Explore the Books shaping my perspectives."
//               />
//               <div className="w-40 mx-auto mt-3 md:mt-0">
//                 <Image src={bookImage} alt="Book cover" />
//               </div>
//             </Card>
//             <Card className="h-[320px] md:col-span-3 lg:col-span-2">
//               <CardHeader
//                 title="My Toolbox"
//                 description="Explore the technologies and tools I use to craft exceptional
//                 digital experiences."
//                 className=""
//               />
//               <ToolBoxItems items={toolboxItems} className="" />
//               <ToolBoxItems
//                 items={toolboxItems}
//                 className="mt-6"
//                 itemsWrapperClassName="-translate-x-1/2"
//               />
//             </Card>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
//             <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
//               <CardHeader
//                 title="Beyond the Code"
//                 description="Explore our Interests and hobbies beyond the digital realm."
//                 className="px-6 py-6"
//               />
//               <div className="relative flex-1">
//                 {hobbies.map((hobby) => (
//                   <div
//                     key={hobby.title}
//                     className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-magenta to-accent rounded-full py-1.5 absolute"
//                     style={{
//                       left: hobby.left,
//                       top: hobby.top,
//                     }}
//                   >
//                     <span className="font-medium text-primary">
//                       {hobby.title}
//                     </span>
//                     <span>{hobby.emoji}</span>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//             <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
//               <Image
//                 src={mapImage}
//                 alt="map"
//                 className="h-full w-full object-cover"
//               />
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-magenta to-tesla after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-dark/30">
//                 <Image
//                   src={smileMemoji}
//                   alt="smiling memoji"
//                   className="size-20"
//                 />
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
