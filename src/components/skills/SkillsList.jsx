import SkillCard from "@/components/skills/SkillCard";
import { useRef, useState, useEffect } from "react";

export const SkillsList = ({ skills }) => {
  return (
    <div className="flex w-full flex-col space-y-10 py-4">
      {skills.map((category) => (
        <SkillCategory key={category.name} category={category} />
      ))}
    </div>
  );
};

const SkillCategory = ({ category }) => {
  const containerRef = useRef(null);
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current;
        setShowFade(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [category.skills]);

  return (
    <div className="mb-20 w-full">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-200 md:text-3xl">
        {category.name}
      </h2>

      <div className="relative w-full">
        {/* Masques de dégradé conditionnels */}
        {showFade && (
          <>
            {/* Dégradés gauche/droite */}
            <div className="from-background/80 to-background/0 pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r" />
            <div className="from-background/80 to-background/0 pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l" />

            {/* Boutons de scroll gauche/droite */}
            <div className="absolute top-1/2 z-20 hidden w-full -translate-y-1/2 justify-between px-2 sm:flex md:flex">
              <button
                onClick={() =>
                  containerRef.current?.scrollBy({
                    left: -300,
                    behavior: "smooth",
                  })
                }
                className="bg-secondary pointer-events-auto rounded-full p-2 text-white shadow-md transition-transform hover:scale-110"
                aria-label="Scroll left"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() =>
                  containerRef.current?.scrollBy({
                    left: 300,
                    behavior: "smooth",
                  })
                }
                className="bg-secondary pointer-events-auto rounded-full p-2 text-white shadow-md transition-transform hover:scale-110"
                aria-label="Scroll right"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </>
        )}

        <div
          ref={containerRef}
          className="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-auto pr-[calc(50%-50vw)] pl-[calc(50%-50vw)]"
        >
          <div className="mx-auto flex items-center gap-6 px-[50vw]">
            {category.skills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
