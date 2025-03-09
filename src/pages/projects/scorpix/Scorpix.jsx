import Tabs from "@/components/projects/Tabs";
import Tab from "@/components/projects/Tab";
import PresentationTab from "@/pages/projects/scorpix/ScorpixPresentationTab";
import GalleryTab from "@/pages/projects/scorpix/ScorpixGalleryTab";

export default function Scorpix() {
  return (
    <div className="bg-background/75 w-6xl p-5 pt-10 text-gray-300">
      <Tabs>
        <Tab title="Présentation">
          <PresentationTab />
        </Tab>
        <Tab title="Galerie">
          <GalleryTab />
        </Tab>
        {/* Ajoutez d'autres Tabs ici si nécessaire */}
      </Tabs>
    </div>
  );
}
