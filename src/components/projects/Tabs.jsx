import { useState } from "react";

export default function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0); // État pour l'onglet actif

  return (
    <div>
      {/* En-têtes des onglets */}
      <div className="flex gap-x-1 overflow-x-auto pb-2 md:gap-x-4 md:pb-0">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`md:text-md px-3 py-1 text-sm font-medium whitespace-nowrap opacity-100 md:px-4 md:py-2 ${
              activeIndex === index
                ? "border-primary text-primary border-b-2 font-semibold"
                : "hover:text-accent hover:border-accent text-gray-500 hover:border-b-2"
            }`}
          >
            {child.props.title}{" "}
            {/* Affiche le titre passé via la prop "title" */}
          </button>
        ))}
      </div>

      {/* Contenu de l'onglet actif */}
      <div className="mt-2 md:mt-4">{children[activeIndex]}</div>
    </div>
  );
}
