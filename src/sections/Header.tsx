// components/Header.jsx
import { twMerge } from "tailwind-merge";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav
        className={twMerge(
          "flex gap-1 p-0.5 rounded-full backdrop-blur",
          // borde suave en texto muted, fondo semi-transparente oscuro
          "border border-textMuted bg-light/10"
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
