import LogoHTML from "@/assets/icons/skills/html-logo.png";
import LogoCSS from "@/assets/icons/skills/css-logo.png";
import LogoReact from "@/assets/icons/skills/react-logo.png";
import LogoPython from "@/assets/icons/skills/python-logo.png";
import LogoPHP from "@/assets/icons/skills/php-logo.png";
import LogoSymfony from "@/assets/icons/skills/symfony-logo.png";
import LogoTwig from "@/assets/icons/skills/twig-logo.png";
import LogoDoctrine from "@/assets/icons/skills/doctrine-logo.png";
import LogoSQL from "@/assets/icons/skills/sql-logo.png";
import LogoBootstrap from "@/assets/icons/skills/bootstrap-logo.png";
import Logo3DModeling from "@/assets/icons/skills/3d-modeling-logo.png";
import LogoMechanics from "@/assets/icons/skills/mechanics-logo.png";
import LogoMachining from "@/assets/icons/skills/machining-logo.png";
import LogoElectronics from "@/assets/icons/skills/electronics-logo.png";
import LogoArduino from "@/assets/icons/skills/arduino-logo.png";
import LogoCsharp from "@/assets/icons/skills/csharp-logo.png";
import LogoGithub from "@/assets/icons/skills/github-logo.png";
import LogoOptimization from "@/assets/icons/skills/optimization-logo.png";
import LogoInterface from "@/assets/icons/skills/interface-logo.png";
import LogoUnitTests from "@/assets/icons/skills/unit-tests-logo.png";
import LogoDomotic from "@/assets/icons/skills/domotics-logo.png";
import LogoTeam from "@/assets/icons/skills/team-logo.png";

export const skillsData = [
  {
    id: "category-web",
    name: "Développement Web",
    skills: [
      {
        id: "skill-html",
        name: "HTML",
        level: 50,
        logo: LogoHTML,
        color: "#FFFFFF",
        description:
          "Maîtrise des balises HTML5 pour structurer le contenu d'un site web.",
        projects: ["project-tick-up"],
      },
      {
        id: "skill-css",
        name: "CSS",
        level: 40,
        logo: LogoCSS,
        color: "#FFFFFF",
        description: "Création de styles et mises en page responsives.",
        projects: ["project-tick-up"],
      },
      {
        id: "skill-bootstrap",
        name: "Bootstrap",
        level: 70,
        logo: LogoBootstrap,
        color: "#FFFFFF",
        description:
          "Création d’interfaces modernes et responsives avec Bootstrap 5.",
        projects: ["project-tick-up"],
      },
      {
        id: "skill-react",
        name: "React",
        level: 80,
        logo: LogoReact,
        color: "#FFFFFF",
        description:
          "Maîtrise de React pour développer des interfaces dynamiques et réactives, avec composants modulaires, gestion d'état et intégration d'animations fluides.",
        projects: [],
      },
    ],
  },
  {
    id: "category-backend",
    name: "Backend",
    skills: [
      {
        id: "skill-php",
        name: "PHP",
        level: 75,
        logo: LogoPHP,
        color: "#E2C6FF",
        description:
          "Programmation orientée objet, logique métier et controllers.",
        projects: ["project-tick-up"],
      },
      {
        id: "skill-symfony",
        name: "Symfony",
        level: 75,
        logo: LogoSymfony,
        color: "#C6D8FF",
        description:
          "Développement d’une application complète avec MVC, routing, sécurité et services.",
        projects: ["project-tick-up"],
      },
      {
        id: "skill-twig",
        name: "Twig",
        level: 70,
        logo: LogoTwig,
        color: "#C6FFE2",
        description:
          "Templates dynamiques avec héritage, boucles, conditions et filtres.",
        projects: ["project-tick-up"],
      },
      {
        id: "skill-doctrine",
        name: "Doctrine ORM",
        level: 70,
        logo: LogoDoctrine,
        color: "#FFE9C6",
        description:
          "Gestion de base de données avec entités, relations et repositories.",
        projects: ["project-tick-up"],
      },
      {
        id: "skill-sql",
        name: "SQL",
        level: 65,
        logo: LogoSQL,
        color: "#C6FFFA",
        description:
          "Conception de bases relationnelles et gestion des contraintes.",
        projects: ["project-tick-up"],
      },
    ],
  },
  {
    id: "category-tools",
    name: "Outils & Qualité",
    skills: [
      {
        id: "skill-github",
        name: "Git / GitHub",
        level: 85,
        logo: LogoGithub,
        color: "#C8C6FF",
        description:
          "Gestion de versions, commits, branches et organisation du projet.",
        projects: ["project-tick-up", "project-boogle-zoa"],
      },
      {
        id: "skill-unit-tests",
        name: "Tests & Debug",
        level: 60,
        logo: LogoUnitTests,
        color: "#FFC6E1",
        description:
          "Rédaction et exécution de tests unitaires pour assurer la fiabilité du code.",
        projects: ["project-boogle-zoa"],
      },
    ],
  },

  {
    id: "category-programming",
    name: "Programmation",
    skills: [
      {
        id: "skill-python",
        name: "Python",
        level: 80,
        logo: LogoPython,
        color: "#FFFFFF",
        description: "Développement de mini-jeux, projets mathématiques.",
        projects: [],
      },
      {
        id: "skill-csharp",
        name: "C Sharp",
        level: 90,
        logo: LogoCsharp,
        color: "#DEC6FF",
        description: "Développement d'applications console.",
        projects: ["project-boogle-zoa"],
      },
      {
        id: "skill-optimization",
        name: "Optimization",
        level: 30,
        logo: LogoOptimization,
        color: "#FFC6F3",
        description: "Optimisation de code, temps d'execution et calcul",
        projects: ["project-boogle-zoa"],
      },
    ],
  },
  {
    id: "category-technical",
    name: "Technique",
    skills: [
      {
        id: "skill-3d-modeling",
        name: "Modélisation 3D",
        level: 70,
        logo: Logo3DModeling,
        color: "#C6FFFA",
        description: "Création de modèles 3D avec SolidWorks et Fusion 360.",
        projects: ["project-scorpix", "project-cloclo"],
      },
      {
        id: "skill-mechanics",
        name: "Mécanique",
        level: 80,
        logo: LogoMechanics,
        color: "#FFE9C6",
        description: "Conception de systèmes mécaniques.",
        projects: ["project-scorpix", "project-cloclo"],
      },
      {
        id: "skill-machining",
        name: "Usinage",
        level: 60,
        logo: LogoMachining,
        color: "#FFC6C6",
        description: "Fabrication de pièces et assemblage mécanique.",
        projects: ["project-scorpix", "project-cloclo"],
      },
      {
        id: "skill-electronics",
        name: "Électronique",
        level: 70,
        logo: LogoElectronics,
        color: "#CCFFC6",
        description:
          "Conception de circuits électroniques et systèmes embarqués.",
        projects: ["project-cloclo"],
      },
    ],
  },
  {
    id: "category-iot",
    name: "IoT",
    skills: [
      {
        id: "skill-arduino",
        name: "Arduino",
        level: 90,
        logo: LogoArduino,
        color: "#C6E7FF",
        description: "Programmation de microcontrôleurs pour projets IoT.",
        projects: ["project-cloclo"],
      },
      {
        id: "skill-domotics",
        name: "Domotique",
        level: 20,
        logo: LogoDomotic,
        color: "#C6FFE2",
        description: "Développement de systèmes domotiques et automatisation.",
        projects: ["project-cloclo"],
      },
    ],
  },

  {
    id: "category-design",
    name: "Design",
    skills: [
      {
        id: "skill-interface",
        name: "Interface Graphique",
        level: 82,
        logo: LogoInterface,
        color: "#FFFFFF",
        description: "Création d'interfaces utilisateurs intuitives.",
        projects: ["project-boogle-zoa", "project-tick-up"],
      },
    ],
  },
  {
    id: "category-soft-skills",
    name: "Compétences interpersonnelles",
    skills: [
      {
        id: "skill-teamwork",
        name: "Collaboration en Équipe",
        level: 90,
        logo: LogoTeam,
        color: "#E2FFC6",
        description: "Travail collaboratif et gestion de projet en équipe.",
        projects: ["project-scorpix", "project-boogle-zoa"],
      },
    ],
  },
];
