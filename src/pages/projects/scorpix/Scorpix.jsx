import { Outlet } from "react-router-dom";
import Tabs from "@/components/projects/Tabs";

export default function Scorpix() {
  const scorpixTabs = [
    { label: "Présentation", path: "" },
    { label: "Mécanique", path: "mechanic" },
    { label: "Transmission", path: "transmission" },
    { label: "Patte", path: "paw" },
    { label: "Structure", path: "structure" },
  ];

  return (
    <div className="bg-background/75 w-full max-w-6xl text-gray-300 sm:p-4 sm:pt-5 md:p-5 md:pt-10">
      <Tabs tabs={scorpixTabs} basePath="/projects/scorpix" />

      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
