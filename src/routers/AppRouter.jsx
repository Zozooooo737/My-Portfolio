import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Scorpix from "@/pages/projects/scorpix/Scorpix";
import PresentationTab from "@/pages/projects/scorpix/ScorpixPresentationTab";
import PawMechanicsTab from "@/pages/projects/scorpix/ScorpixPawMechanicsTab";
import TransmissionTab from "@/pages/projects/scorpix/ScorpixTransmissionTab";
import PawTab from "@/pages/projects/scorpix/ScorpixPawTab";
import StructureTab from "@/pages/projects/scorpix/ScorpixStructureTab";
import Cloclo from "@/pages/projects/cloclo/Cloclo";
import BoogleZoa from "@/pages/projects/boogleZoa/BoogleZoa";
import TickUp from "@/pages/projects/tickUp/TickUp";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/scorpix" element={<Scorpix />}>
          <Route index element={<PresentationTab />} />
          <Route path="mechanic" element={<PawMechanicsTab />} />
          <Route path="transmission" element={<TransmissionTab />} />
          <Route path="paw" element={<PawTab />} />
          <Route path="structure" element={<StructureTab />} />
        </Route>
        <Route path="projects/cloclo" element={<Cloclo />} />
        <Route path="projects/boogle-zoa" element={<BoogleZoa />} />
        <Route path="projects/tick-up" element={<TickUp />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
