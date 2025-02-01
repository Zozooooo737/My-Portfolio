import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // Hook pour naviguer entre les pages
  const navigate = useNavigate();

  // Redirige l'utilisateur vers la page des projets
  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center space-y-4 text-center">
      {/* Titre de bienvenue */}
      <div className="font-title shadowTitlePrimary text-8xl uppercase">
        Bienvenue
      </div>

      {/* Texte de présentation */}
      <p className="my-3 text-2xl">
        Passionné d'ingénierie, j'aime explorer de nouveaux horizons à travers
        mes projets. Entre mécanique, électronique, mécatronique et
        programmation, chaque défi est une occasion d'innover, de résoudre des
        problèmes complexes et d'affiner mon expertise. <br />
        <br />
        Curieux de voir ce que ça donne ? Plongez dans mes réalisations !
      </p>

      {/* Bouton qui redirige vers la page des projets */}
      <button
        onClick={handleClick}
        className="text-background bg-primary hover:bg-accent hover:shadow-box mt-7 cursor-pointer rounded-md px-6 py-4 text-2xl font-bold uppercase transition"
      >
        Découvrir mes projets
      </button>
    </div>
  );
}
