import { Outlet } from "react-router-dom";
import Container from "@/components/ui/Container";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="text-text flex min-h-screen w-full flex-col">
      {/* Barre de navigation */}
      <NavBar />

      {/* Contenu dynamique */}
      <div className="bg-pattern flex flex-1 flex-col pt-[96px]">
        <Container className="flex flex-1 flex-col">
          <Outlet />
        </Container>
      </div>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}
