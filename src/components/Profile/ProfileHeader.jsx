import { photos } from "@/assets/Assets";
import React from "react";

const ProfileHeader = () => {
  return (
    <div className="border-primary bg-background relative grid w-full grid-cols-1 grid-rows-[auto_auto_auto] justify-center gap-4 overflow-hidden rounded-2xl border-2 p-6 shadow-[0_0_20px_5px_rgba(119,131,238,0.3)] md:grid-cols-2">
      {/* Infos générales et Personnalité */}
      <div className="space-y-3 p-4 md:col-span-1">
        <h1 className="to-accent animate-text-glow bg-gradient-to-r from-violet-400 bg-clip-text text-4xl font-bold text-transparent uppercase md:text-5xl">
          Enzo Bottura
        </h1>
        <p className="mb-2 text-lg text-gray-300 md:text-xl">
          Étudiant en ingénierie | ESILV (2ème année)
        </p>

        {/* Informations générales */}
        <div className="grid grid-cols-1 gap-3 pt-6 text-gray-300 md:grid-cols-2">
          <div>
            <p className="text-accent text-base font-semibold md:text-lg">
              📍 Localisation
            </p>
            <p className="text-base md:text-lg">Île-de-France, France</p>
          </div>
          <div>
            <p className="text-accent text-base font-semibold md:text-lg">
              🎂 Âge
            </p>
            <p className="text-base md:text-lg">20 ans</p>
          </div>
          <div>
            <p className="text-accent text-base font-semibold md:text-lg">
              🎓 Formation
            </p>
            <p className="text-base md:text-lg">ESILV</p>
          </div>
          <div>
            <p className="text-accent text-base font-semibold md:text-lg">
              📧 Email
            </p>
            <p className="text-base md:text-lg">enzo.bottura137@gmail.com</p>
          </div>
        </div>

        {/* Personnalité */}
        <div className="mt-4">
          <p className="text-accent text-base font-semibold md:text-lg">
            🧠 Personnalité
          </p>
          <p className="text-base md:text-lg">
            Curieux, sociable et passionné par la création et l'innovation.
            Toujours en quête d'apprentissage, je prends plaisir à résoudre des
            défis techniques et à mener des projets de A à Z.
          </p>
        </div>
      </div>

      {/* Photo de profil */}
      <div className="flex items-start justify-center pt-9 md:col-span-1 md:row-span-2">
        <div className="border-primary h-72 w-72 overflow-hidden rounded-full border-4 shadow-[0_0_20px_5px_rgba(119,131,238,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(119,131,238,0.7)] md:h-96 md:w-96">
          <img
            src={photos.profil}
            alt="Enzo Bottura"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Soft Skills et Hard Skills */}
      <div className="grid grid-cols-1 gap-4 pl-4 md:col-span-2 md:grid-cols-2 md:gap-6 md:pt-2">
        <div className="space-y-1">
          <p className="text-accent text-lg font-semibold">💡 Soft Skills</p>
          <ul className="space-y-1 text-base md:text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Esprit analytique & résolution de problèmes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Travail en équipe & communication</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Gestion de projet & organisation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Capacité d'apprentissage rapide</span>
            </li>
          </ul>
        </div>

        <div className="space-y-1">
          <p className="text-accent text-lg font-semibold">🛠 Hard Skills</p>
          <ul className="space-y-1 text-base md:text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Développement de projets techniques ingénieurs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Développement : React, Tailwind, C#, Python</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Électronique & embarqué : Arduino, capteurs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Modélisation & mécatronique</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Optimisation algorithmique</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Phrase accrocheuse */}
      <p className="animate-typing col-span-2 pt-4 text-center text-xl text-gray-300 md:text-2xl">
        🔧 De l'idée à la réalisation : j'explore, j'innove et je concrétise des
        projets qui me passionnent.
      </p>
    </div>
  );
};

export default ProfileHeader;
