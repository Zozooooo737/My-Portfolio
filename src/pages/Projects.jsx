import React from "react";
import Card from "@/components/projects/Card";
import projectsData from "@/data/projectsData";
import { skillsData } from "@/data/skillsData";

export default function Projects() {
  // Création locale de la lookup table
  const skillsLookup = skillsData.reduce((acc, category) => {
    category.skills.forEach((skill) => {
      acc[skill.id] = skill;
    });
    return acc;
  }, {});

  return (
    <div className="">
      {/* Affichage Mobile */}
      <div className="h-160 snap-y snap-mandatory overflow-y-auto sm:h-180 md:h-180 lg:hidden">
        {projectsData.map((project) => {
          const projectSkills = project.skills
            .map((skillId) => skillsLookup[skillId])
            .filter(Boolean);

          return (
            <div
              key={project.id}
              className="h-160 snap-start sm:h-180 md:h-180"
            >
              <Card
                name={project.title}
                link={project.link}
                image={project.thumbnail}
                imageAlt={project.imageAlt}
                description={project.description}
                skills={projectSkills}
              />
            </div>
          );
        })}
      </div>

      {/* Affichage PC */}
      <div className="hidden w-full grid-cols-2 justify-items-center gap-x-14 gap-y-12 pt-10 pb-20 lg:grid">
        {projectsData.map((project) => {
          const projectSkills = project.skills
            .map((skillId) => skillsLookup[skillId])
            .filter(Boolean);

          return (
            <Card
              key={project.id}
              name={project.title}
              link={project.link}
              image={project.thumbnail}
              imageAlt={project.imageAlt}
              description={project.description}
              skills={projectSkills}
            />
          );
        })}
      </div>
    </div>
  );
}
