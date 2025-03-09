import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Scorpix from "@/pages/projects/scorpix/Scorpix";
import Cloclo from "@/pages/projects/cloclo/Cloclo";
import BoogleZoa from "@/pages/projects/boogleZoa/BoogleZoa";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/scorpix" element={<Scorpix />} />
        <Route path="projects/cloclo" element={<Cloclo />} />
        <Route path="projects/boogle-zoa" element={<BoogleZoa />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
