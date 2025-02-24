import { useState, useEffect } from "react";
import NavButton from "@/components/ui/NavButton";
import Logo from "@/assets/icons/enzo-bottura/enzo-bottura-logo.svg";

export default function NavBar() {
  // État pour contrôler la visibilité de la barre de navigation
  const [isVisible, setIsVisible] = useState(true);
  // Stocke la dernière position du défilement pour détecter le sens du scroll
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Fonction qui gère le défilement et cache/affiche la navbar
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    // Fonction qui détecte si la souris approche du haut de l'écran
    const handleMouseMove = (event) => {
      if (event.clientY < 50) {
        setIsVisible(true);
      }
    };

    // Ajout des écouteurs d'événements pour le scroll et le mouvement de souris
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Nettoyage des événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`bg-background fixed top-0 z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Contenu de la navbar */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        {/* Logo et nom */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Enzo Bottura Portfolio" className="w-15" />
          <span className="text-2xl font-semibold">ENZO BOTTURA</span>
        </div>

        {/* Menu de navigation avec des boutons vers différentes sections */}
        <nav className="flex space-x-4">
          <NavButton to="/">Accueil</NavButton>
          <NavButton to="/profile">Profil</NavButton>
          <NavButton to="/skills">Compétences</NavButton>
          <NavButton to="/projects">Projets</NavButton>
          <NavButton to="/contact">Contact</NavButton>
        </nav>
      </div>
    </div>
  );
}
