import { useNavigate } from "react-router-dom";

const DiscoverCards = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Projets", path: "/projects" },
    { title: "Skills", path: "/skills" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <section className="rounded-xl bg-red-200 p-3 text-center text-black">
      <h2>Découvrez-moi</h2>
      <div className="grid grid-cols-3 gap-3 text-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="h-80 w-full rounded-xl bg-red-400"
            onClick={() => navigate(card.path)}
          >
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverCards;
