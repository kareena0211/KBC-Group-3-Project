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
      setSticky(window.scrollY > 0);
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
          <Link to={userRole === "admin" ? "/AdminDashboard" : "/UserDashboard"} className="text-white text-2xl font-bold cursor-pointer ml-5">
            Online KBC Quiz Game
          </Link>

          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none mr-3" aria-label="Toggle Menu">
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
                <NavLink to="/UserDashboard" onClick={closeMenu} active={location.pathname === "/UserDashboard"}>UserDashboard</NavLink>
                <NavLink to="/GameStart" onClick={closeMenu} active={location.pathname === "/GameStart"}>GameStart</NavLink>
                {/* <NavLink to="/About" onClick={closeMenu} active={location.pathname === "/About"}>About</NavLink> */}
              </>
            )}
            {userRole === "admin" && (
              <>
                <NavLink to="/AdminDashboard" onClick={closeMenu} active={location.pathname === "/AdminDashboard"}>AdminDashboard</NavLink>
                <NavLink to="/GameStart" onClick={closeMenu} active={location.pathname === "/GameStart"}>GameStart</NavLink>
                {/* <NavLink to="/About" onClick={closeMenu} active={location.pathname === "/About"}>About</NavLink> */}
                <NavLink to="/AddQuestion" onClick={closeMenu} active={location.pathname === "/AddQuestion"}>Add Questions</NavLink>
                <NavLink to="/FetchAllQuestions" onClick={closeMenu} active={location.pathname === "/FetchAllQuestions"}>Show All Questions</NavLink>
                <NavLink to="/FindSignupData" onClick={closeMenu} active={location.pathname === "/FindSignupData"}>Show All Signup Data</NavLink>
              </>
            )}
            {isDashboardPage && (
              <button onClick={handleLogout} className="block lg:inline-block lg:mt-0 text-white rounded-full bg-red-600 p-2 ml-5">Logout</button>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-2 mr-5 ml-5">
            {userRole === "user" && (
              <>
                <NavLink to="/UserDashboard" onClick={closeMenu} active={location.pathname === "/UserDashboard"}>UserDashboard</NavLink>
                <NavLink to="/GameStart" onClick={closeMenu} active={location.pathname === "/GameStart"}>GameStart</NavLink>
                {/* <NavLink to="/About" onClick={closeMenu} active={location.pathname === "/About"}>About</NavLink> */}
              </>
            )}
            {userRole === "admin" && (
              <>
                <NavLink to="/AdminDashboard" onClick={closeMenu} active={location.pathname === "/AdminDashboard"}>AdminDashboard</NavLink>
                <NavLink to="/GameStart" onClick={closeMenu} active={location.pathname === "/GameStart"}>GameStart</NavLink>
                {/* <NavLink to="/About" onClick={closeMenu} active={location.pathname === "/About"}>About</NavLink> */}
                <NavLink to="/AddQuestion" onClick={closeMenu} active={location.pathname === "/AddQuestion"}>Add Questions</NavLink>
                <NavLink to="/FetchAllQuestions" onClick={closeMenu} active={location.pathname === "/FetchAllQuestions"}>Show All Questions</NavLink>
                <NavLink to="/FindSignupData" onClick={closeMenu} active={location.pathname === "/FindSignupData"}>Show All Signup Data</NavLink>
              </>
            )}
            {isDashboardPage && (
              <button onClick={handleLogout} className="block lg:inline-block lg:mt-0 text-white rounded-full bg-red-600 p-2 ml-5">Logout</button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ to, onClick, active, children }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block py-2 px-2 text-white rounded-md ${active ? "bg-green-600" : "hover:bg-gray-700"}`}
    >
      {children}
    </Link>
  );
};

export default NavBar;
