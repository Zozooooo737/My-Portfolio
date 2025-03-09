import React, { useState } from "react";
import clsx from "clsx";
import LogoOthers from "@/assets/icons/skills/others-logo.png";
import Logo3DModeling from "@/assets/icons/skills/3d-modeling-logo.png";
import LogoMechanics from "@/assets/icons/skills/mechanics-logo.png";
import LogoMachining from "@/assets/icons/skills/machining-logo.png";
import LogoElectronics from "@/assets/icons/skills/electronics-logo.png";
import LogoArduino from "@/assets/icons/skills/arduino-logo.png";
import LogoCsharp from "@/assets/icons/skills/csharp-logo.png";
import LogoGithub from "@/assets/icons/skills/github-logo.png";
import LogoOptimization from "@/assets/icons/skills/optimization-logo.png";
import LogoInterface from "@/assets/icons/skills/interface-logo.png";
import LogoUnitTests from "@/assets/icons/skills/unit-tests-logo.png";
import LogoDomotic from "@/assets/icons/skills/domotics-logo.png";
import LogoTeam from "@/assets/icons/skills/team-logo.png";

export default function Tag({ id, number, isTextMode = true }) {
  const [isHovered, setIsHovered] = useState(false);

  // Définition des propriétés en fonction de l'ID
  const tagsData = {
    0: { name: `+${number}`, color: "#fff7c2", logo: LogoOthers },
    1: { name: "Modélisation 3D", color: "#C6FFFA", logo: Logo3DModeling },
    2: { name: "Mécanique", color: "#FFE9C6", logo: LogoMechanics },
    3: { name: "Usinage", color: "#FFC6C6", logo: LogoMachining },
    4: { name: "Électronique", color: "#CCFFC6", logo: LogoElectronics },
    5: { name: "Arduino", color: "#C6E7FF", logo: LogoArduino },
    6: { name: "C Sharp", color: "#DEC6FF", logo: LogoCsharp },
    7: { name: "GitHub", color: "#C8C6FF", logo: LogoGithub },
    8: { name: "Optimization", color: "#FFC6F3", logo: LogoOptimization },
    9: { name: "Interface Graphique", color: "#FFF8C6", logo: LogoInterface },
    10: { name: "Tests Unitaires", color: "#FFC6E1", logo: LogoUnitTests },
    11: { name: "Domotique", color: "#C6FFE2", logo: LogoDomotic },
    12: { name: "Collaboration en Équipe", color: "#E2FFC6", logo: LogoTeam },
  };

  const tag = tagsData[id] || { name: "Inconnu", color: "#000000", logo: null };

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center rounded-full transition-all duration-300 ease-in-out",
        isTextMode
          ? "w-fit px-3 py-2" // Padding pour le mode texte
          : "h-12 min-w-[48px] overflow-hidden", // Taille fixe pour le mode étiquette
        !isTextMode && isHovered ? "w-fit min-w-fit px-4" : "w-12",
      )}
      style={{ backgroundColor: tag.color }}
      onMouseEnter={() => !isTextMode && setIsHovered(true)}
      onMouseLeave={() => !isTextMode && setIsHovered(false)}
    >
      {/* Mode texte : affichage simple du texte */}
      {isTextMode && (
        <span
          className={clsx(
            "text-background text-md font-bold whitespace-nowrap",
            "transition-none", // Désactive les transitions
          )}
        >
          {tag.name}
        </span>
      )}

      {/* Mode étiquette : logo + animation au survol */}
      {!isTextMode && (
        <>
          {/* Logo */}
          <img
            src={tag.logo}
            alt={tag.name}
            className={clsx(
              "h-8 w-8 object-contain transition-all duration-400 ease-in-out",
              "absolute",
              isHovered
                ? "translate-x-[-70px] scale-90 opacity-0"
                : "translate-x-0 scale-100 opacity-100",
            )}
            style={{
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          {/* Texte */}
          <span
            className={clsx(
              "text-background text-md font-bold whitespace-nowrap transition-all duration-500 ease-in-out",
              isHovered
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-4 scale-90 opacity-0",
            )}
          >
            {tag.name}
          </span>
        </>
      )}
    </div>
  );
}
