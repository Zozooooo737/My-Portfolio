import NavButton from "@/components/elements/NavButton";
import Logo from "@/media/icons/Logo_Enzo_Bottura.svg";

export default function NavBar() {
  return (
    <div className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Enzo Bottura Portfolio" className="w-20" />
          <span className="text-3xl font-semibold">ENZO BOTTURA</span>
        </div>
        <nav className="flex space-x-4">
          <NavButton to="/">Acceuil</NavButton>
          <NavButton to="/profile">Profil</NavButton>
          <NavButton to="/skills">Compétences</NavButton>
          <NavButton to="/projects">Projets</NavButton>
          <NavButton to="/contact">Contact</NavButton>
        </nav>
      </div>
    </div>
  );
}
