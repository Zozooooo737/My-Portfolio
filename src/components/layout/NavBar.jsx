import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import NavButton from "@/components/ui/NavButton";
import Logo from "@/assets/icons/enzo-bottura/enzo-bottura-logo.svg";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false);
      }
      setLastScrollY(window.scrollY);
    };

    const handleMouseMove = (event) => {
      if (event.clientY < 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div
      className={`bg-background fixed top-0 z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-6">
        {/* Logo et nom */}
        <div
          className="flex cursor-pointer items-center space-x-2 md:space-x-4"
          onClick={handleLogoClick}
        >
          <img
            src={Logo}
            alt="Enzo Bottura Portfolio"
            className="w-10 md:w-12"
          />
          <span className="text-xl font-semibold md:text-2xl">
            ENZO BOTTURA
          </span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden space-x-2 md:flex lg:space-x-4">
          <NavButton to="/" onClick={() => setMobileMenuOpen(false)}>
            Accueil
          </NavButton>
          <NavButton to="/profile" onClick={() => setMobileMenuOpen(false)}>
            Profil
          </NavButton>
          <NavButton to="/skills" onClick={() => setMobileMenuOpen(false)}>
            Compétences
          </NavButton>
          <NavButton to="/projects" onClick={() => setMobileMenuOpen(false)}>
            Projets
          </NavButton>
          <NavButton to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </NavButton>
        </nav>

        {/* Menu Mobile (burger) */}
        <button
          className="text-2xl focus:outline-none md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Menu Mobile (déroulant) */}
      {mobileMenuOpen && (
        <div className="mobile-menu-container bg-background w-full border-t border-gray-200 md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <MobileNavButton to="/" onClick={() => setMobileMenuOpen(false)}>
              Accueil
            </MobileNavButton>
            <MobileNavButton
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profil
            </MobileNavButton>
            <MobileNavButton
              to="/skills"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compétences
            </MobileNavButton>
            <MobileNavButton
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projets
            </MobileNavButton>
            <MobileNavButton
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </MobileNavButton>
          </nav>
        </div>
      )}
    </div>
  );
}

function MobileNavButton({ to, children, onClick }) {
  return (
    <NavButton
      to={to}
      onClick={onClick}
      className="!px-0 !py-3 text-center !text-lg hover:after:!left-1/2 hover:after:!w-0"
      activeClass="after:!left-1/2 after:!w-0"
    >
      {children}
    </NavButton>
  );
}
