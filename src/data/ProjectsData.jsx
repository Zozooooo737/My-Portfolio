import { scorpixImages } from "@/assets/ScorpixAssets";
import { clocloImages } from "@/assets/ClocloAssets";
import { boogleZoaImages } from "@/assets/BoogleZoaAssets";

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
      "Durant ma première année d'ingénieur à l'ESILV, le projet annuel était de réaliser un hexapode entièrement mécanique se déplaçant de façon rectiligne.",
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
      "Mon premier projet domotique, une horloge dynamique ayant pour fonction de donner l'heure, la date, la température et l'humidité d'un simple geste de la main.",
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
      "Dans le cadre du module de POO, j'ai réalisé en binôme un jeu en C# sous forme d'application console accompagné d'une interface graphique et de tests unitaires.",
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
];

export default projectsData;
