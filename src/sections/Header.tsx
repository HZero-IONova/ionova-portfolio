export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-light/15 rounded-full bg-light/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a
          href="#"
          className="nav-item bg-light text-dark hover:bg-light/70 hover:text-dark"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
