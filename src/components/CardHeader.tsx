import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";

import { fadeIn } from "./variants";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-magenta" />
        <h3 className="font-secondary text-3xl text-light">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs mt-2 text-textMuted">
        {description}
      </p>
    </motion.div>
  );
};

// import StarIcon from "@/assets/icons/star.svg";
// import { twMerge } from "tailwind-merge";

// export const CardHeader = ({
//   title,
//   description,
//   className,
// }: {
//   title: string;
//   description: string;
//   className?: string;
// }) => {
//   return (
//     <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
//       <div className="inline-flex items-center gap-2">
//         <StarIcon className="sixe-9 text-accent" />
//         <h3 className="font-secondary text-3xl text-magenta">{title}</h3>
//       </div>
//       <p className="text-sm lg:text-base max-w-xs text-light">{description}</p>
//     </div>
//   );
// };
