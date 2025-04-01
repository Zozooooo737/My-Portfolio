import React from "react";
import SkillsList from "@/components/skills/SkillsList";
import { skillsData } from "@/data/skillsData";

const Skills = () => {
  return (
    <div className="w-full pt-10">
      <SkillsList skills={skillsData} />
    </div>
  );
};

export default Skills;
