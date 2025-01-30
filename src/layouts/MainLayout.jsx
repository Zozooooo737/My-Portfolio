import { Outlet } from "react-router-dom";
import Container from "@/components/elements/Container";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function MainLayout() {
  return (
    <div className="text-text flex h-screen w-full flex-col">
      {/* Barre de navigation */}
      <NavBar />
      {/* Contenu dynamique */}
      <div className="bg-pattern w-full flex-1">
        <Container>
          <Outlet />
        </Container>
      </div>
      {/* Pied de page */}
      <Footer />
    </div>
  );
}
