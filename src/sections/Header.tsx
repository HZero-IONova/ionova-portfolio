export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-dark/15 rounded-full bg-dark/10 backdrop-blur">
      <a href="#" className="nav-item">Home</a>
      <a href="#" className="nav-item">Projects</a>
      <a href="#" className="nav-item">About</a>
      <a href="#" className="nav-item bg-dark text-light hover:bg-dark/70 hover:text-light">Contact</a>
    </nav>      
  </div>
  );
};
