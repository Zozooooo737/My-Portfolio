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
    <div className="my-10 mt-15 grid w-full grid-cols-2 justify-items-center gap-x-14 gap-y-12 pb-20">
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
  );
}
