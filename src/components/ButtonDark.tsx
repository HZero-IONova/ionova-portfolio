"use client";
import { RiArrowRightUpLine } from "react-icons/ri";
import React from "react";

interface ButtonProps {
  text: string;
  targetId: string;
}

const ButtonDark: React.FC<ButtonProps> = ({ text, targetId }) => {
  const scrollToSection = (element: HTMLElement) => {
    const startPosition = window.scrollY;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      scrollToSection(section);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-xl w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-white/10"
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-white text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center rounded-xl">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default ButtonDark;
