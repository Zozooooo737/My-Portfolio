import React from "react";
import Card from "@/components/projects/Card";
import { scorpixImages } from "@/assets/ScorpixAssets";
import { clocloImages } from "@/assets/ClocloAssets";
import { boogleZoaImages } from "@/assets/BoogleZoaAssets";

export default function Projects() {
  return (
    <div className="my-10 mt-15 grid w-full grid-cols-2 justify-items-center gap-x-14 gap-y-12 pb-20">
      <Card
        name="Scorpix"
        link="scorpix"
        image={scorpixImages.minia}
        imageAlt="Photo d'un hexapode mécanique en bois dans de l'herbe."
        description="Durant ma première année d’ingénieur à l’ESILV, le projet annuel était de réalisé un hexapode entièrement mécanique se déplacant de facon rectiligne."
        tags={[1, 2, 3, 12]}
      />
      <Card
        name="Cloclo"
        link="clolco"
        image={clocloImages.minia}
        imageAlt="Photo d'une horloge intéractif en forme d'observateur Minecraft."
        description="Mon premier projet domotique, une horloge dynamique ayant pour fonction de donner l’heure, la date, la température et l’humidité d'un simple geste de la main."
        tags={[1, 4, 5, 11]}
      />
      <Card
        name="Boogle Zoa"
        link="boogle-zoa"
        image={boogleZoaImages.minia}
        imageAlt="Capture d'écran du jeu Boogle Zoa."
        description="Dans le cadre du module de POO, j'ai réalisé en binôme un jeu en C# sous forme d’application console accompagné d'une interface graphique et de tests unitaires."
        tags={[6, 7, 8, 9, 10, 12]}
      />
    </div>
  );
}
