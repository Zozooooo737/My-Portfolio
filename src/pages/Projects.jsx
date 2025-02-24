import React from "react";
import Card from "@/components/projects/Card";
import ScorpixMinia from "@/assets/projects/scorpix/scorpix-thumbnail.JPEG";
import ClocloMinia from "@/assets/projects/cloclo/cloclo-thumbnail.jpeg";
import BoogleZoaMinia from "@/assets/projects/boogle-zoa/boogle-zoa-thumbnail.jpeg";

export default function Projects() {
  return (
    <div className="my-10 mt-15 grid w-full grid-cols-2 justify-items-center gap-x-14 gap-y-12 pb-20">
      <Card
        name="Scorpix"
        image={ScorpixMinia}
        imageAlt="Photo d'un hexapode mécanique en bois dans de l'herbe."
        description="Durant ma première année d’ingénieur à l’ESILV, le projet annuel était de réalisé un hexapode entièrement mécanique se déplacant de facon rectiligne."
        tags={[1, 2, 3, 12]}
      />
      <Card
        name="Cloclo"
        image={ClocloMinia}
        imageAlt="Photo d'une horloge intéractif en forme d'observateur Minecraft."
        description="Mon premier projet domotique, une horloge dynamique ayant pour fonction de donner l’heure, la date, la température et l’humidité d'un simple geste de la main."
        tags={[1, 4, 5, 11]}
      />
      <Card
        name="Boogle Zoa"
        image={BoogleZoaMinia}
        imageAlt="Capture d'écran du jeu Boogle Zoa."
        description="Dans le cadre du module de POO, j'ai réalisé en binôme un jeu en C# sous forme d’application console accompagné d'une interface graphique et de tests unitaires."
        tags={[6, 7, 8, 9, 10, 12]}
      />
    </div>
  );
}
