import Tabs from "@/components/projects/Tabs";
import Tab from "@/components/projects/Tab";
import PresentationTab from "@/pages/projects/scorpix/ScorpixPresentationTab";
import PawMechanicsTab from "@/pages/projects/scorpix/ScorpixPawMechanicsTab";
import ScorpixTransmissionTab from "@/pages/projects/scorpix/ScorpixTransmissionTab";
import GalleryTab from "@/pages/projects/scorpix/ScorpixGalleryTab";

export default function Scorpix() {
  return (
    <div className="bg-background/75 w-full max-w-6xl text-gray-300 sm:p-4 sm:pt-5 md:p-5 md:pt-10">
      <Tabs>
        <Tab title="Présentation">
          <PresentationTab />
        </Tab>
        <Tab title="Mécanique de la Patte">
          <PawMechanicsTab />
        </Tab>
        <Tab title="Transmission">
          <ScorpixTransmissionTab />
        </Tab>
        <Tab title="Galerie">
          <GalleryTab />
        </Tab>
      </Tabs>
    </div>
  );
}
