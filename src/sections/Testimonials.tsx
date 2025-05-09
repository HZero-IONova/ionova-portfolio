// components/TestimonialsSection.jsx
"use client";

import memojiSmile from "@/assets/images/memoji-smile.png";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { motion } from "motion/react";
Fragment;

const testimonials = [
  {
    name: "Hiram Arce",
    position: "Software Engineer @ IONova",
    text: "Hiram was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiSmile,
  },
  {
    name: "Ramon Gonzalez",
    position: "Software Engineer @ IONova",
    text: "Hiram was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiSmile,
  },
  {
    name: "Nene Arce",
    position: "Software Engineer @ IONova",
    text: "Hiram was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiSmile,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-dark text-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 lg:max-w-5xl">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Us"
          description="Don't just take my word for it. See what our clients have to say about our work."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-350"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-14 bg-tesla inline-flex items-center justify-center rounded-full flex-shrink-0 overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-poppins font-semibold text-light">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-textMuted font-poppins">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-light/80 font-poppins">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
// import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
// import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
// import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
// import { SectionHeader } from "@/components/SectionHeader";
// import grainImage from "@/assets/images/grain.jpg";
// import Image from "next/image";
// import { Card } from "@/components/Card";

// const testimonials = [
//   {
//     name: "Alex Turner",
//     position: "Marketing Manager @ TechStartups",
//     text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
//     avatar: memojiAvatar1,
//   },
//   {
//     name: "Olivia Green",
//     position: "Head of Design @ GreenLeaf",
//     text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
//     avatar: memojiAvatar2,
//   },
//   {
//     name: "Daniel White",
//     position: "CEO @ InnovateCo",
//     text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
//     avatar: memojiAvatar3,
//   },
//   {
//     name: "Emily Carter",
//     position: "Product Manager @ GlobalTech",
//     text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
//     avatar: memojiAvatar4,
//   },
//   {
//     name: "Michael Brown",
//     position: "Director of IT @ MegaCorp",
//     text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
//     avatar: memojiAvatar5,
//   },
// ];

// export const TestimonialsSection = () => {
//   return (
//     <div className="py-16 lg:py-24">
//       <div className="container">
//         <SectionHeader
//           eyebrow="Happy Clients"
//           title="What Clients say about Us"
//           description="Don't just take my word for it. See what our clients have to say about
//         our work."
//         />
//         <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//           <div className="flex gap-8 flex-none">
//             {testimonials.map((testimonial) => (
//               <Card
//                 key={testimonial.name}
//                 className="max-w-xs md:max-w-md p-6 md:p-8"
//               >
//                 <div className="flex gap-4 items-center">
//                   <div className="size-14 bg-gray-800 inline-flex items-center justify-center rounded-full flex-shrink-0">
//                     <Image
//                       src={testimonial.avatar}
//                       alt={testimonial.name}
//                       className="max-h-full"
//                     />
//                   </div>
//                   <div>
//                     <div className="font-semibold">{testimonial.name}</div>
//                     <div className="text-sm text-gray/30">
//                       {testimonial.position}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="mt-4 md:mt-6 text-sm md:text-base">
//                   {testimonial.text}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
