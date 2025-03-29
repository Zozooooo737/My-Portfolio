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
    <div className="my-auto flex h-full w-full flex-grow flex-col items-center justify-center space-y-4 text-center">
      {/* Titre de bienvenue */}
      <div className="font-title shadowTitlePrimary text-8xl uppercase">
        Bienvenue
      </div>

      {/* Texte de présentation */}
      <p className="my-3 w-3xl text-3xl">
        Je m'appelle Enzo BOTTURA et je suis étudiant en deuxième année à
        l'ESILV. <br />
        <br />
        Passionné par les Projets innovants, je m'efforce chaque jour de
        développer et d'enrichir mes Compétences.
      </p>

      {/* Bouton qui redirige vers la page des projets */}
      <button
        onClick={handleClick}
        className="text-background bg-primary hover:bg-accent hover:shadow-box mt-7 cursor-pointer rounded-md px-6 py-4 text-2xl font-bold uppercase transition"
      >
        Découvrir mon profil
      </button>
    </div>
  );
}
