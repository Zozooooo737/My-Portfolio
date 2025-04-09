import Tabs from "@/components/projects/Tabs";
import Tab from "@/components/projects/Tab";
import PresentationTab from "@/pages/projects/scorpix/ScorpixPresentationTab";
import GalleryTab from "@/pages/projects/scorpix/ScorpixGalleryTab";

export default function Scorpix() {
  return (
    <div className="bg-background/75 w-full max-w-6xl text-gray-300 sm:p-4 sm:pt-5 md:p-5 md:pt-10">
      <Tabs>
        <Tab title="Présentation">
          <PresentationTab />
        </Tab>
        <Tab title="Galerie">
          <GalleryTab />
        </Tab>
      </Tabs>
    </div>
  );
}
