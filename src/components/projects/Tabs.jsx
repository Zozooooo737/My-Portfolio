import { useState } from "react";

export default function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0); // État pour l'onglet actif

  return (
    <div>
      {/* En-têtes des onglets */}
      <div className="flex gap-x-4">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-md px-4 py-2 font-medium opacity-100 ${
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
      <div className="mt-4">{children[activeIndex]}</div>
    </div>
  );
}
