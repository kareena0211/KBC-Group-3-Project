import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set isSticky based on scroll position
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`w-full ${isSticky ? "sticky top-0 bg-slate-400 shadow-md z-10" : "bg-slate-400"}`}>
      <nav className="container mx-auto px-0 py-2">
        <div className="flex items-center justify-between">
          <Link to="/GameStart" className="text-white text-2xl font-bold cursor-pointer">
            Online KBC Quiz Game
          </Link>

          {/* Hamburger Icon for mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="hidden lg:flex items-center font-bold">
            <NavLink to="/GameStart" onClick={closeMenu} active={isMenuOpen}>GameStart</NavLink>
            <NavLink to="/addquestion" onClick={closeMenu} active={isMenuOpen}>Add Questions</NavLink>
            <NavLink to="/FetchAllQuestions" onClick={closeMenu} active={isMenuOpen}>Fetch All Questions</NavLink>
            <NavLink to="/FindSignupData" onClick={closeMenu} active={isMenuOpen}>Fetch All Signup Data</NavLink>
            <NavLink to="/About" onClick={closeMenu} active={isMenuOpen}>About</NavLink>
            {/* <NavLink to="/Login" onClick={closeMenu} active={isMenuOpen}>Login</NavLink> */}
            <NavLink to="/Signup" onClick={closeMenu} active={isMenuOpen}>Signup</NavLink>
          </div>
        </div>

        {/* Navigation Links for mobile */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-slate-400 text-white">
            <NavLink to="/GameStart" onClick={closeMenu} active={isMenuOpen}>GameStart</NavLink>
            <NavLink to="/addquestion" onClick={closeMenu} active={isMenuOpen}>Add Questions</NavLink>
            <NavLink to="/FetchAllQuestions" onClick={closeMenu} active={isMenuOpen}>Fetch All Questions</NavLink>
            <NavLink to="/FindSignupData" onClick={closeMenu} active={isMenuOpen}>Fetch All Signup Data</NavLink>
            <NavLink to="/About" onClick={closeMenu} active={isMenuOpen}>About</NavLink>
            {/* <NavLink to="/Login" onClick={closeMenu} active={isMenuOpen}>Login</NavLink> */}
            <NavLink to="/Signup" onClick={closeMenu} active={isMenuOpen}>Signup</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

// Custom NavLink component
const NavLink = ({ to, onClick, active, children }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block py-2 px-4 text-white rounded-md ${
        active ? "bg-gray-700" : "hover:bg-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavBar;
