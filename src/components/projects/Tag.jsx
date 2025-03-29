import React, { useState } from "react";
import clsx from "clsx";

export default function Tag({ name, logo, color, isTextMode = true, number }) {
  const [isHovered, setIsHovered] = useState(false);

  // Détermine le contenu à afficher
  const tagName = name || (number ? `+${number}` : "Inconnu");

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center rounded-full transition-all duration-300 ease-in-out",
        isTextMode
          ? "w-fit px-3 py-2" // Mode texte
          : "h-12 min-w-[48px] overflow-hidden", // Mode icône
        !isTextMode && isHovered ? "w-fit min-w-fit px-4" : "w-12",
      )}
      style={{
        backgroundColor: color, // Couleur obligatoire
      }}
      onMouseEnter={() => !isTextMode && setIsHovered(true)}
      onMouseLeave={() => !isTextMode && setIsHovered(false)}
    >
      {/* Mode texte (pour le "+X") */}
      {isTextMode && (
        <span className="text-background text-md font-bold whitespace-nowrap transition-none">
          {tagName}
        </span>
      )}

      {/* Mode icône (compétences normales) */}
      {!isTextMode && (
        <>
          <img
            src={logo}
            alt={tagName}
            className={clsx(
              "absolute h-8 w-8 object-contain transition-all duration-400 ease-in-out",
              isHovered
                ? "translate-x-[-70px] scale-90 opacity-0"
                : "translate-x-0 scale-100 opacity-100",
            )}
            style={{
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <span
            className={clsx(
              "text-background text-md font-bold whitespace-nowrap transition-all duration-500 ease-in-out",
              isHovered
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-4 scale-90 opacity-0",
            )}
          >
            {tagName}
          </span>
        </>
      )}
    </div>
  );
}
