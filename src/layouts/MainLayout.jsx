import { Outlet } from "react-router-dom";
import Container from "../components/elements/Container";
import NavBar from "../components/NavBar";
import Pattern from "../media/images/Background_Pattern.jpg";

export default function MainLayout() {
  return (
    <div className="bg-background text-text w-full h-screen">
      <div
        className="bg-repeat w-full h-full"
        style={{ backgroundImage: `url(${Pattern}` }}
      >
        <Container>
          {/* Barre de navigation */}
          <NavBar />

          {/* Contenu dynamique */}
          <div className="content">
            <Outlet />
          </div>
        </Container>
      </div>
    </div>
  );
}
