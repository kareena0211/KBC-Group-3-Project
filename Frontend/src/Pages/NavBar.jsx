import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = ({ userRole, setUserRole }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUserRole("");
    navigate("/Signup");
  };

  const isDashboardPage = location.pathname === "/UserDashboard" || location.pathname === "/AdminDashboard";

  return (
    <header className={`w-full ${isSticky ? "sticky top-0 bg-slate-400 shadow-md z-10" : "bg-slate-400"}`}>
      <nav className="container mx-auto px-0 py-2">
        <div className="flex items-center justify-between">
          <Link to={userRole === "admin" ? "/AdminDashboard" : "/UserDashboard"} className="text-white text-2xl font-bold cursor-pointer">
            Online KBC Quiz Game
          </Link>

          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center font-bold">
            {userRole === "user" && (
              <>
                <NavLink to="/UserDashboard" onClick={closeMenu}>UserDashboard</NavLink>
                <NavLink to="/GameStart" onClick={closeMenu}>GameStart</NavLink>
                <NavLink to="/About" onClick={closeMenu}>About</NavLink>
                {isDashboardPage && <button onClick={handleLogout} className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">Logout</button>}
              </>
            )}
            {userRole === "admin" && (
              <>
                <NavLink to="/AdminDashboard" onClick={closeMenu}>AdminDashboard</NavLink>
                <NavLink to="/GameStart" onClick={closeMenu}>GameStart</NavLink>
                <NavLink to="/About" onClick={closeMenu}>About</NavLink>
                <NavLink to="/AddQuestion" onClick={closeMenu}>Add Questions</NavLink>
                <NavLink to="/FetchAllQuestions" onClick={closeMenu}>Fetch All Questions</NavLink>
                <NavLink to="/FindSignupData" onClick={closeMenu}>Fetch All Signup Data</NavLink>
                {isDashboardPage && <button onClick={handleLogout} className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">Logout</button>}
              </>
            )}
            {/* {isDashboardPage && <button onClick={handleLogout} className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">Logout</button>} */}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-2">
            {userRole === "user" && (
              <>
                <NavLink to="/UserDashboard" onClick={closeMenu}>UserDashboard</NavLink>
                <NavLink to="/GameStart" onClick={closeMenu}>GameStart</NavLink>
                <NavLink to="/About" onClick={closeMenu}>About</NavLink>
              </>
            )}
            {userRole === "admin" && (
              <>
                <NavLink to="/AdminDashboard" onClick={closeMenu}>AdminDashboard</NavLink>
                <NavLink to="/GameStart" onClick={closeMenu}>GameStart</NavLink>
                <NavLink to="/About" onClick={closeMenu}>About</NavLink>
                <NavLink to="/AddQuestion" onClick={closeMenu}>Add Questions</NavLink>
                <NavLink to="/FetchAllQuestions" onClick={closeMenu}>Fetch All Questions</NavLink>
                <NavLink to="/FindSignupData" onClick={closeMenu}>Fetch All Signup Data</NavLink>
              </>
            )}
            {/* {isDashboardPage && <button onClick={handleLogout} className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">Logout</button>} */}
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link to={to} onClick={onClick} className="block mt-4 lg:inline-block lg:mt-0 text-white mr-8">
    {children}
  </Link>
);

export default NavBar;
