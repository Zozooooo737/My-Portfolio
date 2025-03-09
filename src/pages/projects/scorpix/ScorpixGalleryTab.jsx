// components/projects/scorpix/GalleryTab.jsx
import { scorpixImages, scorpixVideos } from "@/assets/ScorpixAssets";
import Media from "@/components/ui/Media";

export default function GalleryTab() {
  return (
    <div>
      <h2>Galerie</h2>
      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixImages.portrait1,
            alt: "Photo du Scorpix",
          },
          {
            type: "video",
            src: scorpixVideos.complete,
            alt: "Scorpix en marche",
          },
          // Ajoutez d'autres médias ici
        ]}
      />
    </div>
  );
}
