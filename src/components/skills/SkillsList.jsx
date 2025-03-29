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
    <div className="w-full">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-200 md:text-3xl">
        {category.name}
      </h2>

      <div className="relative flex w-full justify-center">
        {/* Masques de dégradé conditionnels */}
        {showFade && (
          <>
            <div className="from-background/80 to-background/0 pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r" />
            <div className="from-background/80 to-background/0 pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l" />
          </>
        )}

        <div
          ref={containerRef}
          className="scrollbar-hide flex max-w-full overflow-x-auto px-4" // Ajout de scrollbar-hide
        >
          <div className="mx-auto flex items-center gap-6">
            {category.skills.map((skill, index) => (
              <div key={index} className="flex-shrink-0">
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
