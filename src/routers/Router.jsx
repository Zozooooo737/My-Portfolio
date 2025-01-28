import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Profile from "../pages/Profile.jsx";
import Skills from "../pages/Skills.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Page d'accueil */}
          <Route index element={<Home />} />

          {/* Autres pages */}
          <Route path="profile" element={<Profile />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
