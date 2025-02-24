import Tabs from "@/components/projects/Tabs";
import Tab from "@/components/projects/Tab";
import Media from "@/components/ui/Media";

import ScorpixPortrait1 from "@/assets/projects/scorpix/scorpix-portrait-1.jpeg";
import ScorpixPortrait2 from "@/assets/projects/scorpix/scorpix-portrait-2.jpeg";
import ScorpixPortraitPaw from "@/assets/projects/scorpix/scorpix-portrait-paw.jpeg";
import ScorpixPortraitFang from "@/assets/projects/scorpix/scorpix-portrait-fang.jpeg";
import ScorpixPortraitTail from "@/assets/projects/scorpix/scorpix-portrait-tail.jpeg";

export default function Scorpix() {
  return (
    <div className="bg-background/75 w-6xl p-5 pt-10">
      <Tabs>
        <Tab title="Présentation">
          <div className="w-ful flex">
            <p className="w-[70%]">
              Nous avons réalisé ce projet dans le cadre du Projet Ingénieur
              eXploration en première année d’ESILV, PIX 1. Notre objectif est
              de réaliser un hexapode mécanique capable de se déplacer de façon
              rectiligne. Nous devons réaliser l'hexapode de A à Z. Le moteur
              nous a été fourni. Par la suite, nous pourrons envisager de
              répondre à d'autres fonctions comme transporter une charge. Notre
              réflexion gravite autour de 3 mots : <b>Démontable</b>,
              <b> Modulable</b> et <b>Polyvalent</b>.
            </p>
            <div className="item-center flex w-[30%] flex-col gap-y-2 p-2 text-center">
              <h1 className="bg-primary w-full pt-2 pb-3 text-4xl font-bold">
                Scorpix
              </h1>
              <Media
                mediaItems={[
                  {
                    type: "image",
                    src: ScorpixPortrait1,
                    alt: "Proto du Scorpix",
                  },
                  {
                    type: "image",
                    src: ScorpixPortrait2,
                    alt: "Proto du Scorpix 2",
                  },
                  {
                    type: "image",
                    src: ScorpixPortraitFang,
                    alt: "Scorpix - Pince",
                  },
                  {
                    type: "image",
                    src: ScorpixPortraitPaw,
                    alt: "Scorpix - Patte",
                  },
                  {
                    type: "image",
                    src: ScorpixPortraitTail,
                    alt: "Scorpix - Queue",
                  },
                ]}
              />
            </div>
          </div>
        </Tab>

        <Tab title="Mécanique de la patte">
          <div>Contenu de la section Mécanique de la patte.</div>
        </Tab>

        <Tab title="Transmission">
          <div>Contenu de la section Transmission.</div>
        </Tab>

        <Tab title="Patte">
          <div>Contenu de la section Patte.</div>
        </Tab>

        <Tab title="Structure générale">
          <div>Contenu de la section Structure générale.</div>
        </Tab>

        <Tab title="Galerie">
          <div>Contenu de la section Galerie.</div>
        </Tab>
      </Tabs>
    </div>
  );
}
