// components/projects/scorpix/GalleryTab.jsx
import { scorpixImages, scorpixVideos } from "@/assets/ScorpixAssets";
import Media from "@/components/ui/Media";

export default function GalleryTab() {
  return (
    <div>
      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixImages.portrait1,
            alt: "Photo du Scorpix",
          },
          {
            type: "image",
            src: scorpixImages.portrait2,
            alt: "Photo du Scorpix 2",
          },
          {
            type: "image",
            src: scorpixImages.fang,
            alt: "Scorpix - Pince",
          },
          {
            type: "image",
            src: scorpixImages.paw,
            alt: "Scorpix - Patte",
          },
          {
            type: "image",
            src: scorpixImages.tail,
            alt: "Scorpix - Queue",
          },
          {
            type: "video",
            src: scorpixVideos.complete,
            alt: "Scorpix en marche avec sa mandibule et sa queue de scorpion",
          },
          {
            type: "video",
            src: scorpixVideos.classic,
            alt: "Scorpix dans sa version la plus simple",
          },
          {
            type: "video",
            src: scorpixVideos.peak,
            alt: "Scorpix avec les l'extrémité des pattes amovibles (plat ou pique)",
          },
          {
            type: "video",
            src: scorpixVideos.double,
            alt: "Scorpix peut être alimenter par un deuxième moteur",
          },
          {
            type: "video",
            src: scorpixVideos.disassembly,
            alt: "Scorpix peut être entièrement démonté et remonté",
          },
          {
            type: "video",
            src: scorpixVideos.assembly,
            alt: "Scorpix peut être entièrement démonté et remonté",
          },

          {
            type: "video",
            src: scorpixVideos.fang,
            alt: "Scorpix équipé de sa mandibule fonctionnelle",
          },
          {
            type: "video",
            src: scorpixVideos.load,
            alt: "Scorpix capable de transporter une charge",
          },
          {
            type: "video",
            src: scorpixVideos.climbing,
            alt: "Scorpix capable de monter une pente",
          },
          {
            type: "video",
            src: scorpixVideos.without,
            alt: "Scorpix capable de fonctionner avec une patte en moins",
          },
          {
            type: "video",
            src: scorpixVideos.extended,
            alt: "Scorpix capable d'accueillir des pattes supplémentaires",
          },
          {
            type: "image",
            src: scorpixImages.foponce,
            alt: "Photo du stand de notre équipe PIX 34 - FOPONCÉ CORP",
          },
          {
            type: "image",
            src: scorpixImages.trial,
            alt: "Epreuve spéciale de la piscine à boule.",
          },
          {
            type: "image",
            src: scorpixImages.result,
            alt: "Photo de notre équipe FOPONCÉ CORP sur le podium du Showroom",
          },
        ]}
      />
    </div>
  );
}
