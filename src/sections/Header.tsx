// components/Header.jsx
import { twMerge } from "tailwind-merge";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-4 w-full z-10 px-4 md:px-8">
      <nav
        className={twMerge(
          "flex w-full max-w-xl justify-between items-center px-8 py-2 rounded-full backdrop-blur border border-textMuted bg-light/10"
        )}
      >
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-light text-dark hover:bg-light/70 hover:text-dark"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
