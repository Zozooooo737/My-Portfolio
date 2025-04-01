import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="my-auto flex h-full w-full flex-grow flex-col items-center justify-center space-y-4 px-4 text-center md:space-y-6 lg:space-y-8">
      {/* Titre de bienvenue - Taille adaptative */}
      <div className="font-title shadowTitlePrimary text-4xl uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Bienvenue
      </div>

      {/* Texte de présentation - Largeur et taille adaptatives */}
      <p className="my-3 max-w-2xl text-xl sm:text-2xl md:my-4 md:text-3xl lg:max-w-3xl">
        Je m'appelle Enzo BOTTURA et je suis étudiant à l'ESILV. <br />
        <br />
        Passionné par les{" "}
        <button
          onClick={() => handleClick("/projects")}
          className="text-primary hover:text-accent font-bold hover:cursor-pointer"
        >
          Projets
        </button>{" "}
        innovants, je m'efforce chaque jour de développer et d'enrichir mes{" "}
        <button
          onClick={() => handleClick("/projects")}
          className="text-primary hover:text-accent font-bold hover:cursor-pointer"
        >
          Compétences
        </button>
        .
      </p>

      {/* Bouton - Taille et espacement adaptatifs */}
      <button
        onClick={() => handleClick("/profile")}
        className="text-background bg-primary hover:bg-accent hover:shadow-box mt-5 cursor-pointer rounded-md px-4 py-3 text-lg font-bold uppercase transition sm:mt-6 sm:px-5 sm:py-3 sm:text-xl md:mt-7 md:px-6 md:py-4 md:text-2xl"
      >
        Découvrir mon profil
      </button>
    </div>
  );
}
