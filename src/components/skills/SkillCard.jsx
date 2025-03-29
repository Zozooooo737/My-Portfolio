import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getProjectsByIds } from "@/utils/DataHelpers";

const SkillCard = ({ skill }) => {
  const [expanded, setExpanded] = useState(false);
  const modalRef = useRef(null);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  // Gestion du clic extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  // Récupère les projets complets à partir des IDs
  const associatedProjects = getProjectsByIds(skill.projects || []);

  return (
    <>
      <div
        className={`bg-primary hover:border-accent/50 relative mt-2 flex h-full min-w-[300px] flex-col rounded-xl border border-gray-200 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${expanded ? "z-50 scale-105" : ""} `}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center">
          {skill.logo && (
            <img
              src={skill.logo}
              alt={skill.name}
              className="mb-4 h-16 w-16 object-contain"
            />
          )}
          <h3 className="text-bold text-center text-xl font-bold text-gray-900">
            {skill.name}
          </h3>
        </div>

        <div className="mt-4 w-full">
          <div className="relative mt-1 h-2 w-full rounded-full bg-black">
            <div
              className="bg-accent absolute top-0 left-0 h-full rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setExpanded(false)} // Ferme au clic sur l'arrière-plan
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="flex flex-col items-center">
              {skill.logo && (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="mb-4 h-20 w-20 object-contain"
                />
              )}
              <h3 className="text-center text-2xl font-bold text-gray-800">
                {skill.name}
              </h3>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Niveau de compétence</span>
                <span>{skill.level}%</span>
              </div>
              <div className="relative mt-1 h-3 w-full rounded-full bg-gray-200">
                <div
                  className="bg-secondary absolute top-0 left-0 h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>

            {skill.description && (
              <p className="mt-6 text-gray-700">{skill.description}</p>
            )}

            {associatedProjects.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 text-lg font-medium text-gray-800">
                  Projets associés
                </h4>
                <div className="flex flex-wrap gap-2">
                  {associatedProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.link}`}
                      className="bg-primary hover:bg-primary/80 text-text text-md inline-flex items-center rounded-full px-5 py-2 font-semibold transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillCard;
