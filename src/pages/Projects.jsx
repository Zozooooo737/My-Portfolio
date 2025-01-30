import React from "react";
import UnderConstruction from "@/components/elements/UnderConstruction";
import ProjectCard from "@/components/projects/ProjectCard";
import ScorpixMinia from "@/media/mediaScorpix/ScorpixMinia.jpeg";
import ClocloMinia from "@/media/mediaCloclo/ClocloMinia.jpeg";

export default function Projects() {
  return (
    <div className="my-10 grid w-full grid-cols-2 justify-items-center gap-x-2 gap-y-12 pb-20">
      <ProjectCard
        name="Scorpix"
        image={ScorpixMinia}
        imageAlt="Photo d'un hexapode mécanique en bois dans de l'herbe."
        description="Durant  ma première année d’ingénieur à l’ESILV, le projet annuel était de réalisé un hexapode, un mécanisme à 6 patte se déplacant de facon rectiligne."
      />
      <ProjectCard
        name="Cloclo"
        image={ClocloMinia}
        imageAlt="Photo d'une horloge intéractif en forme d'observateur Minecraft."
        description="Mon premier projet domotique, une horloge dynamique ayant pour fonction de donner l’heure, la date, la température et l’humidité d'un simple geste de la main."
      />
      <ProjectCard
        name="Scorpix Project"
        image={ClocloMinia}
        imageAlt="Photo d'un hexapode mécanique en bois dans de l'herbe."
        description="This is a description of the Scorpix project."
      />
      <ProjectCard
        name="Scorpix Project"
        image={ScorpixMinia}
        imageAlt="Photo d'un hexapode mécanique en bois dans de l'herbe"
        description="This is a description of the Scorpix project."
      />
    </div>
  );
}
