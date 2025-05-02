import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        // bg-orbitSurface = dark card background
        // text-lunarWhite = light text color
        "bg-orbitSurface text-light rounded-3xl relative z-0 overflow-hidden " +
          // pseudo-element for subtle white outline
          "after:content-[''] after:absolute after:inset-0 " +
          "after:rounded-3xl after:outline-2 after:outline after:-outline-offset-2 " +
          "after:outline-light/20 after:z-10 after:pointer-events-none",
        className
      )}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      {children}
    </div>
  );
};
