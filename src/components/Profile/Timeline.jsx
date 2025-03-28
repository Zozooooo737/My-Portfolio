import { useEffect, useRef } from "react";

const Timeline = () => {
  const timelineRef = useRef(null);

  // Données de la timeline
  const timelineData = [
    {
      id: 1,
      title:
        "Soft Skills : Améliorez Son Efficacité Individuelle et Collective",
      date: "Novembre - 2022",
      description:
        "Formation sur la gestion du temps, l'apprentissage efficace, la pensée critique, la gestion de projet et le travail en équipe.",
    },

    {
      id: 2,
      title: "Vie Associative : Afterwork à Nantes",
      date: "2022 - Décembre",
      description:
        "Organisation et encadrement d'un afterwork pour les étudiants et l'équipe pédagogique du nouveau campus nantais de l'ESILV.",
    },
    {
      id: 3,
      title: "Hackaton : Solution RSE",
      date: "Avril - 2023",
      description:
        "Hackathon sur le sport durable et responsable, visant à développer le travail en équipe pluridisciplinaire et à concevoir des solutions innovantes pour des enjeux sociétaux et environnementaux.",
    },
    {
      id: 4,
      title: "Vie Associative : Secrétaire 3V",
      date: "2023 - Avril",
      description:
        "Début du mandat en tant que secrétaire au bureau de Veni Vidi deVinci (BDE de l'ESILV).",
    },
    {
      id: 5,
      title: "Vie Associative : Intégration Etudiant ESILV",
      date: "Septembre - 2023",
      description:
        "Intégration des nouveaux étudiants ingénieurs via une journée de bienvenue, une intervention en amphithéâtre, un parainage, l'écriture d'un guide de survie et un afterwork sur Paris.",
    },
    {
      id: 6,
      title: "Vie Associative : Yellow 5",
      date: "2023 - Octobre",
      description:
        "Organisation et encadrement d'une Pool Party à l'Aquaboulevard rassemblant près de 2000 personnes.",
    },
    {
      id: 7,
      title: "Projet : Scorpix - PIX 1",
      date: "Juin - 2024",
      description:
        "Réalisation d'un hexapode mécanique modulable se déplacant de façon rectiligne.",
      link: "/projects/scorpix",
    },
    {
      id: 8,
      title: "Soft Skills : Design Thinking et Créativité",
      date: "2024 - Septembre",
      description:
        "Formation sur la méthode d'innovation, créativité et résolution de problème du Design Thinking. Réalisation d'un projet en faveur de l'alimentation pour tous et le developpement durable.",
    },
    {
      id: 9,
      title: "Soft Skills : Coopérer en équipe",
      date: "Novembre - 2024",
      description:
        "Formation sur les dynamiques d'équipe, les profils comportementaux, la communication positive, la gestion des conflits et le feedback constructif.",
    },
    {
      id: 10,
      title: "Projet : Boogle Zoa",
      date: "2024 - Décembre",
      description:
        "Developpement du jeu Boogle en c# sur console, programmation orienté objet et tests unitaires.",
      link: "/projects/boogle-zoa",
    },
    {
      id: 10,
      title: "Hackaton : Hyperconnexion et Hypertransparence des données",
      date: "Février - 2025",
      description:
        "Developpement en équipe d'une solution pour la protection de notre vie privée et de nos données personnelles.",
    },
  ];

  useEffect(() => {
    const timelineItems =
      timelineRef.current.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.5 },
    );

    timelineItems.forEach((item) => observer.observe(item));
    return () => timelineItems.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <div
      className="relative mx-auto w-full max-w-4xl space-y-6 py-12"
      ref={timelineRef}
    >
      {/* Ligne Centrale */}
      <div className="from-primary to-secondary absolute top-0 left-1/2 h-full w-[3px] -translate-x-1/2 transform bg-gradient-to-b shadow-[0_0_10px_var(--color-primary)]"></div>

      {/* Éléments de la Timeline */}
      {timelineData.map((event, index) => (
        <div
          key={index}
          className={`group relative flex h-full w-full items-center ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          {/* Date */}
          <div
            className={`absolute top-1/2 w-1/2 -translate-y-1/2 transform text-center ${
              index % 2 === 0
                ? "left-0 pr-10 text-right"
                : "right-0 pl-10 text-left"
            }`}
          >
            <span className="text-text/80 bg-background/80 border-primary group-hover:shadow-primary inline-block rounded-lg border px-4 py-2 text-lg font-semibold shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
              {event.date}
            </span>
          </div>

          {/* Point de connexion (cercle) */}
          <div
            className={`bg-primary absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-all duration-300 group-hover:scale-110`}
          ></div>

          {/* Carte événement */}
          <div
            className={`relative w-1/2 ${index % 2 === 0 ? "pl-10" : "pr-10"}`}
          >
            <div className="border-primary bg-opacity-10 text-text group-hover:bg-opacity-20 group-hover:shadow-primary relative rounded-xl border p-6 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-md">
              <h3 className="text-accent mb-2 text-xl font-semibold">
                {event.title}
              </h3>
              <p className="text-text/80 mb-4 text-base">{event.description}</p>
              {/* Bouton "En savoir plus" */}
              {event.link && (
                <a
                  href={event.link}
                  className="text-accent hover:text-accent/80 inline-flex items-center text-base font-medium underline"
                >
                  En savoir plus
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
