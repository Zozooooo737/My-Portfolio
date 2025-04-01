import { useNavigate } from "react-router-dom";
import { Rocket, Code, Mail } from "lucide-react";

const DiscoverCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Mes Projets",
      path: "/projects",
      icon: <Rocket size={48} />,
      description: "Explorez mes réalisations techniques et créatives",
      bgColor: "bg-primary",
      textColor: "text-white",
    },
    {
      title: "Mes Compétences",
      path: "/skills",
      icon: <Code size={48} />,
      description: "Découvrez mon expertise technique et mes savoir-faire",
      bgColor: "bg-secondary",
      textColor: "text-white",
    },
    {
      title: "Me Contacter",
      path: "/contact",
      icon: <Mail size={48} />,
      description: "Prenons contact pour discuter de vos projets",
      bgColor: "bg-accent",
      textColor: "text-black",
    },
  ];

  return (
    <section className="border-primary bg-background mb-20 rounded-xl border-2 p-8 text-center shadow-[0_0_20px_5px_rgba(119,131,238,0.3)]">
      <h2 className="text-text mb-6 text-2xl font-bold sm:text-3xl">
        Vous voulez en savoir plus sur moi ?<br />
        <span className="text-primary">Explorez mon univers</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className={`${card.bgColor} group relative flex h-50 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            {/* Icône */}
            <div
              className={`${card.textColor} mb-4 transition-colors duration-300`}
            >
              {card.icon}
            </div>

            {/* Titre */}
            <h3
              className={`${card.textColor} mb-2 text-xl font-bold transition-colors duration-300 sm:text-2xl`}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              className={`${card.textColor} text-sm opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverCards;
