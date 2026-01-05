import { scorpixImages } from "@/assets/ScorpixAssets";
import { clocloImages } from "@/assets/ClocloAssets";
import { boogleZoaImages } from "@/assets/BoogleZoaAssets";
import { tickUpImages } from "@/assets/TickUpAssets";

const projectsData = [
  {
    id: "project-scorpix",
    title: "Scorpix",
    skills: [
      "skill-3d-modeling",
      "skill-mechanics",
      "skill-machining",
      "skill-teamwork",
    ],
    thumbnail: scorpixImages.minia,
    description:
      "Un hexapode mécanique conçu de A à Z pour marcher en ligne droite sans électronique.",
    year: 2023,
    link: "scorpix",
    repository: null,
    imageAlt: "Photo d'un hexapode mécanique en bois dans de l'herbe.",
    details: {
      context: "Projet académique à l'ESILV",
      role: "Concepteur mécanique et assistant fabrication",
      technologies: ["SolidWorks", "Python", "Bois/MDF"],
    },
  },
  {
    id: "project-cloclo",
    title: "Cloclo",
    skills: [
      "skill-arduino",
      "skill-electronics",
      "skill-domotics",
      "skill-3d-modeling",
    ],
    thumbnail: clocloImages.minia,
    description:
      "Une horloge intelligente qui affiche l’heure, la date et la météo intérieure. Tout ça d’un simple mouvement de la main !",
    year: 2022,
    link: "cloclo",
    repository: "https://github.com/EnzoBottura/cloclo",
    imageAlt:
      "Photo d'une horloge intéractive en forme d'observateur Minecraft.",
    details: {
      context: "Projet personnel",
      role: "Développeur full-stack (hardware et software)",
      technologies: ["Arduino", "Capteurs ultrason", "Impression 3D"],
    },
  },
  {
    id: "project-boogle-zoa",
    title: "Boogle Zoa",
    skills: [
      "skill-csharp",
      "skill-optimization",
      "skill-interface",
      "skill-github",
      "skill-unit-tests",
      "skill-teamwork",
    ],
    thumbnail: boogleZoaImages.minia,
    description:
      "Jeu en C# réalisé en binôme, combinant console, interface graphique et tests unitaires pour une expérience complète.",
    year: 2023,
    link: "boogle-zoa",
    repository: "https://github.com/EnzoBottura/boogle-zoa",
    imageAlt: "Capture d'écran du jeu Boogle Zoa.",
    details: {
      context: "Projet académique en programmation orientée objet",
      role: "Développeur back-end et testeur",
      technologies: ["C#", "NUnit", "WinForms"],
    },
  },
  {
    id: "project-tick-up",
    title: "Tick'Up",
    skills: [
      "skill-php",
      "skill-symfony",
      "skill-twig",
      "skill-doctrine",
      "skill-mysql",
      "skill-html",
      "skill-css",
      "skill-bootstrap",
      "skill-interface",
      "skill-github",
      "skill-unit-tests",
      "skill-teamwork",
    ],
    thumbnail: tickUpImages.minia,
    description:
      "Application web de réservation de séances de cinéma développée avec Symfony.",
    year: 2024,
    link: "tick-up",
    repository: "https://github.com/EnzoBottura/tick-up",
    imageAlt: "Interface de réservation de l'application Tick'Up.",
    details: {
      context:
        "Projet académique de développement web visant à concevoir une application complète de réservation en architecture MVC.",
      role: "Développeur full-stack : conception de la base de données, logique métier, contrôleurs Symfony et interfaces utilisateur.",
      technologies: [
        "Symfony",
        "PHP",
        "Doctrine ORM",
        "Twig",
        "MySQL",
        "Bootstrap",
        "GitHub",
      ],
    },
  },
];

export default projectsData;
