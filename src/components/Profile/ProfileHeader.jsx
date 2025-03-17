import { photos } from "@/assets/Assets";
import React from "react";

const ProfileHeader = () => {
  return (
    <div className="border-primary bg-background relative grid w-full grid-cols-[60%_40%] justify-center gap-8 overflow-hidden rounded-2xl border-2 p-8 shadow-[0_0_20px_5px_rgba(119,131,238,0.3)]">
      {/* Fiche détaillée */}
      <div className="space-y-4 p-5">
        <h1 className="to-accent animate-text-glow bg-gradient-to-r from-violet-400 bg-clip-text text-5xl font-bold text-transparent uppercase">
          Enzo Bottura
        </h1>
        <p className="mb-6 text-xl text-gray-300">
          Étudiant en ingénierie | ESILV (Prépa intégrée - 2ème année)
        </p>

        {/* Informations générales */}
        <div className="grid grid-cols-1 gap-4 text-gray-300 md:grid-cols-2">
          <div>
            <p className="text-accent font-semibold">📍 Localisation</p>
            <p>Île-de-France, France</p>
          </div>
          <div>
            <p className="text-accent font-semibold">🎂 Âge</p>
            <p>20 ans</p>
          </div>
          <div>
            <p className="text-accent font-semibold">🎓 Formation</p>
            <p>Ingénierie (Prépa intégrée, ESILV)</p>
          </div>
          <div>
            <p className="text-accent font-semibold">📧 Email</p>
            <p>enzo.bottura137@gmail.com</p>
          </div>
        </div>

        {/* Personnalité */}
        <div className="mt-6">
          <p className="text-accent font-semibold">🧠 Personnalité</p>
          <p>
            Curieux, sociable et passionné par la création et l’innovation.
            Toujours en quête d’apprentissage, je prends plaisir à résoudre des
            défis techniques et à mener des projets de A à Z.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="mt-4">
          <p className="text-accent font-semibold">💡 Soft Skills</p>
          <ul className="list-disc pl-5">
            <li>Esprit analytique & résolution de problèmes</li>
            <li>Travail en équipe & communication</li>
            <li>Gestion de projet & organisation</li>
            <li>Capacité d'apprentissage rapide</li>
          </ul>
        </div>

        {/* Hard Skills */}
        <div className="mt-4">
          <p className="text-accent font-semibold">🛠 Hard Skills</p>
          <ul className="list-disc pl-5">
            <li>Développement de projets techniques ingénieurs</li>
            <li>Développement : React, Tailwind, C#, Python</li>
            <li>Électronique & embarqué : Arduino, capteurs</li>
            <li>Modélisation & mécatronique</li>
            <li>Optimisation algorithmique</li>
          </ul>
        </div>
      </div>

      {/* Photo de profil avec effet néon */}
      <div className="flex justify-center">
        <div className="border-primary w-full overflow-hidden rounded-full border-4 shadow-[0_0_20px_5px_rgba(119,131,238,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(119,131,238,0.7)]">
          <img
            src={photos.profil}
            alt="Enzo Bottura"
            className="h-full w-full scale-110 object-cover transition-transform duration-300 hover:scale-130" // Zoom au survol
          />
        </div>
      </div>

      {/* Phrase accrocheuse animée */}
      <p className="animate-typing col-span-2 mt-4 text-center text-2xl text-gray-300">
        🔧 De l'idée à la réalisation : j'explore, j'innove et je concrétise des
        projets qui me passionnent.
      </p>
    </div>
  );
};

export default ProfileHeader;
