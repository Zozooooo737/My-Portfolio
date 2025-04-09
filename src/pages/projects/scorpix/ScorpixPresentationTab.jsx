import { scorpixImages, scorpixVideos } from "@/assets/ScorpixAssets";
import { logos } from "@/assets/Assets";
import { skillsData } from "@/data/skillsData";
import Media from "@/components/ui/Media";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import List from "@/components/ui/List";
import Tag from "@/components/projects/Tag";
import Quote from "@/components/ui/Quote";

export default function PresentationTab() {
  const allSkills = skillsData.flatMap((category) => category.skills);

  const projectSkills = allSkills.filter(
    (skill) => skill.projects && skill.projects.includes("project-scorpix"),
  );

  const maxTags = 5;

  return (
    <div className="px-2 md:px-0">
      {/* Section Scorpix - Mobile First (en haut sur mobile) */}
      <div className="mb-6 block md:hidden">
        <div className="border-primary flex h-full w-full flex-col gap-y-2 border-2 p-2 text-center">
          <h1 className="bg-primary w-full py-2 text-3xl font-bold">Scorpix</h1>
          <Media
            mediaItems={[
              {
                type: "image",
                src: scorpixImages.portrait1,
                alt: "Photo du Scorpix",
              },
              {
                type: "image",
                src: scorpixImages.portrait2,
                alt: "Photo du Scorpix 2",
              },
              {
                type: "image",
                src: scorpixImages.fang,
                alt: "Scorpix - Pince",
              },
              {
                type: "image",
                src: scorpixImages.paw,
                alt: "Scorpix - Patte",
              },
              {
                type: "image",
                src: scorpixImages.tail,
                alt: "Scorpix - Queue",
              },
            ]}
          />
          <hr className="bg-primary mx-0.5 my-2 h-0.5 border-0" />
          <div className="space-y-2 px-2">
            <div className="flex items-center">
              <img
                src={logos.group}
                className="bg-primary w-6 rounded-md p-1"
              />
              <p className="ml-3 text-lg">Projet de groupe (5)</p>
            </div>
            <div className="flex items-center">
              <img src={logos.date} className="bg-primary w-6 rounded-md p-1" />
              <p className="ml-3 text-lg">Juin 2024</p>
            </div>
            <div className="flex items-center">
              <img
                src={logos.duration}
                className="bg-primary w-6 rounded-md p-1"
              />
              <p className="ml-3 text-lg">8 mois</p>
            </div>
          </div>
          <hr className="bg-primary mx-0.5 my-2 h-0.5 border-0" />
          <div className="flex flex-wrap justify-center gap-2">
            {projectSkills.slice(0, maxTags).map((skill) => (
              <Tag
                key={skill.id}
                name={skill.name}
                logo={skill.logo}
                color={skill.color}
                isTextMode={true}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col p-2 md:flex-row md:space-y-0 md:space-x-10 md:p-3">
        {/* Section Texte */}
        <div className="w-full md:w-[70%]">
          <Text>
            Nous avons réalisé ce projet dans le cadre du Projet Ingénieur
            eXploration en première année d'ESILV, <b>PIX 1</b>. Notre objectif
            était de réaliser un <b>hexapode mécanique</b> capable de se
            déplacer de façon rectiligne. Nous devions réaliser l'hexapode de A
            à Z sachant que deux moteurs et une batterie nous ont été fournis.
            Par la suite, nous pouvions envisager des fonctionnalités
            supplémentaires comme transporter une charge. Notre réflexion
            gravitait autour de 3 mots : <b>Démontable</b>, <b>Modulable</b> et{" "}
            <b>Polyvalent</b>.
          </Text>

          <Title>Déroulement du Projet</Title>

          <Title size={2}>1. Lancement et définition du projet</Title>
          <ul>
            <List>
              <b>Date de commencement :</b> Septembre 2023
            </List>
            <List>
              <b>Présentation du projet :</b> Introduction aux contraintes et
              objectifs.
            </List>
            <List>
              <b>Analyse Fonctionnelle du Besoin (AFB) :</b> Identification des
              fonctions principales et contraintes techniques.
            </List>
          </ul>

          <Title size={2}>2. État de l'Art et Exploration des Solutions</Title>
          <ul>
            <List>
              <b>Étude des mécanismes d'hexapodes existants :</b> Comparaison
              entre bipode et tripode.
            </List>
            <List>
              <b>Analyse des systèmes de transmission et d'engrenages :</b>{" "}
              Choix des mécanismes les plus adaptés.
            </List>
            <List>
              <b>Comparaison des matériaux utilisables pour le prototypage :</b>{" "}
              Sélection des matériaux en fonction des contraintes techniques et
              budgétaires.
            </List>
          </ul>

          <Title size={2}>3. Conception et Prototypage Itératif</Title>
          <ul>
            <List>
              <b>Modélisation initiale :</b> Réalisation des premiers prototypes
              en bois via découpe laser.
            </List>
            <List>
              <b>Revues techniques et Peer Review :</b> Évaluations régulières
              des itérations.
            </List>
            <List>
              <b>Tests et ajustements :</b> Corrections basées sur les retours
              des prototypes.
            </List>
          </ul>

          <Title size={2}>4. Validation et Compétition</Title>
          <ul>
            <List>
              <b>Showroom PIX 1 :</b> Présentation publique du projet.
            </List>
            <List>
              <b>Concours interne :</b> Démonstration des performances et
              confrontation aux autres projets.
            </List>
          </ul>
        </div>

        {/* Section Scorpix - Version Desktop (à droite) */}
        <div className="hidden md:block md:w-[30%]">
          <div className="border-primary flex flex-col gap-y-2 border-2 p-2 text-center">
            <h1 className="bg-primary w-full py-2 text-4xl font-bold">
              Scorpix
            </h1>
            <Media
              mediaItems={[
                {
                  type: "image",
                  src: scorpixImages.portrait1,
                  alt: "Photo du Scorpix",
                },
                {
                  type: "image",
                  src: scorpixImages.portrait2,
                  alt: "Photo du Scorpix 2",
                },
                {
                  type: "image",
                  src: scorpixImages.fang,
                  alt: "Scorpix - Pince",
                },
                {
                  type: "image",
                  src: scorpixImages.paw,
                  alt: "Scorpix - Patte",
                },
                {
                  type: "image",
                  src: scorpixImages.tail,
                  alt: "Scorpix - Queue",
                },
              ]}
            />
            <hr className="bg-primary mx-0.5 my-2 h-0.5 border-0" />
            <div className="space-y-2 px-5">
              <div className="flex items-center">
                <img
                  src={logos.group}
                  className="bg-primary w-8 rounded-md p-1"
                />
                <p className="ml-4 text-xl">Projet de groupe (5)</p>
              </div>
              <div className="flex items-center">
                <img
                  src={logos.date}
                  className="bg-primary w-8 rounded-md p-1"
                />
                <p className="ml-4 text-xl">Juin 2024</p>
              </div>
              <div className="flex items-center">
                <img
                  src={logos.duration}
                  className="bg-primary w-8 rounded-md p-1"
                />
                <p className="ml-4 text-xl">8 mois</p>
              </div>
            </div>
            <hr className="bg-primary mx-0.5 my-2 h-0.5 border-0" />
            <div className="flex flex-wrap justify-center gap-2">
              {projectSkills.slice(0, maxTags).map((skill) => (
                <Tag
                  key={skill.id}
                  name={skill.name}
                  logo={skill.logo}
                  color={skill.color}
                  isTextMode={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Title>Répartition en Sous-Systèmes</Title>
      <Text>
        Afin de réaliser notre hexapode efficacement, nous avons décidé de
        découper notre hexapode en 4 sous-systèmes principaux :
      </Text>
      <ul className="pt-1.5 pb-5">
        <List>
          <b>Transmission :</b> Assure la distribution équilibrée de l'énergie
          aux six pattes.
        </List>
        <List>
          <b>Mécanisme de la patte :</b> Convertit le mouvement circulaire en
          déplacement linéaire.
        </List>
        <List>
          <b>Patte :</b> Conçues pour assurer stabilité et adhérence au sol.
        </List>
        <List>
          <b>Structure générale :</b> Support et intégration des différents
          sous-systèmes.
        </List>
      </ul>

      <Title>Méthode de Conception et Processus de Fabrication</Title>
      <Text>
        Nous avons suivi une approche en itérations successives, s'articulant
        autour des étapes suivantes :
      </Text>
      <ul>
        <List>
          <b>Étude Théorique :</b> Définition des principes et calculs associés.
        </List>
        <List>
          <b>Schéma Cinématique :</b> Modélisation des liaisons mécaniques.
        </List>
        <List>
          <b>Calculs :</b> Optimisation des dimensions et paramètres de
          fonctionnement.
        </List>
        <List>
          <b>Modélisation CAO :</b> Conception sur logiciel de modélisation 3D.
        </List>
        <List>
          <b>Prototypage :</b> Fabrication par découpe laser et assemblage.
        </List>
        <List>
          <b>Tests et Ajustements :</b> Validation des performances et
          corrections.
        </List>
        <List>
          <b>Itérations :</b> Améliorations basées sur les observations terrain.
        </List>
      </ul>

      <Title>Prototype Final et Performances</Title>
      <Text>
        L'hexapode final est un robot pleinement fonctionnel, capable de se
        déplacer efficacement en adoptant une locomotion tripode optimisée.
      </Text>

      {/* Section Vidéos et Citations */}
      <div className="mt-10 flex flex-col gap-y-16 px-4 md:px-7">
        {/* Bloc 1 : quote / media */}
        <div className="flex w-full flex-col items-center gap-y-8 md:flex-row md:items-center md:gap-x-10">
          <Quote title="Modulable">
            Un prototype adaptable, capable d'accueillir différents modules pour
            répondre à des besoins spécifiques et étendre ses fonctionnalités.
          </Quote>
          <div className="w-full md:w-[60%]">
            <Media
              mediaItems={[
                {
                  type: "video",
                  src: scorpixVideos.complete,
                  alt: "Scorpix en marche avec sa mandibule et sa queue de scorpion",
                },
              ]}
            />
          </div>
        </div>

        {/* Bloc 2 : media / quote */}
        <div className="flex w-full flex-col items-center gap-y-8 md:flex-row-reverse md:items-center md:gap-x-10">
          <Quote title="Stabilité et Précision">
            Une conception robuste avec des pattes indépendantes mais
            parfaitement synchronisées, permettant une locomotion fluide sur
            terrain plat. Les extrémités des pattes sont modulables pour
            s'adapter à différents types de terrains.
          </Quote>
          <div className="w-full md:w-[60%]">
            <Media
              mediaItems={[
                {
                  type: "video",
                  src: scorpixVideos.peak,
                  alt: "Scorpix avec les l'extrémité des pattes amovibles (plat ou pique)",
                },
              ]}
            />
          </div>
        </div>

        {/* Bloc 3 : quote / media */}
        <div className="flex w-full flex-col items-center gap-y-8 md:flex-row md:items-center md:gap-x-10">
          <Quote title="Transmission optimisée">
            Un système d'engrenages conçu pour minimiser les frictions,
            réduisant ainsi les pertes d'énergie et améliorant la
            synchronisation des pattes.
          </Quote>
          <div className="w-full md:w-[60%]">
            <Media
              mediaItems={[
                {
                  type: "video",
                  src: scorpixVideos.double,
                  alt: "Scorpix peut être alimenter par un deuxième moteur",
                },
              ]}
            />
          </div>
        </div>

        {/* Bloc 4 : media / quote */}
        <div className="flex w-full flex-col items-center gap-y-8 md:flex-row-reverse md:items-center md:gap-x-10">
          <Quote title="Facilité de maintenance">
            L'hexapode est entièrement démontable et remontable, avec des
            sous-parties indépendantes pour une réparation rapide.
          </Quote>
          <div className="w-full md:w-[60%]">
            <Media
              mediaItems={[
                {
                  type: "video",
                  src: scorpixVideos.disassembly,
                  alt: "Scorpix peut être entièrement démonté et remonté",
                },
                {
                  type: "video",
                  src: scorpixVideos.assembly,
                  alt: "Scorpix peut être entièrement démonté et remonté",
                },
              ]}
            />
          </div>
        </div>

        {/* Bloc 5 : quote / media */}
        <div className="flex w-full flex-col items-center gap-y-8 md:flex-row md:items-center md:gap-x-10">
          <Quote title="Un Hexapode Prêt à Tout">
            L'hexapode Scorpix est conçu pour relever tous les défis. Grâce à sa
            conception modulaire et adaptable, il peut s'adapter à de multiples
            scénarios.
          </Quote>
          <div className="w-full md:w-[60%]">
            <Media
              mediaItems={[
                {
                  type: "video",
                  src: scorpixVideos.classic,
                  alt: "Scorpix dans sa version la plus simple",
                },
                {
                  type: "video",
                  src: scorpixVideos.fang,
                  alt: "Scorpix équipé de sa mandibule fonctionnelle",
                },
                {
                  type: "video",
                  src: scorpixVideos.load,
                  alt: "Scorpix capable de transporter une charge",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Section Showroom */}
      <div className="mt-8">
        <Title>Showroom PIX 1 et Prix</Title>
        <Text>
          Le projet a été présenté lors du Showroom PIX 1, le 4 juin 2024, un
          événement ESILV permettant à chaque équipe de démontrer le travail
          accompli devant un jury et les autres participants.
        </Text>

        <div className="mx-auto w-full px-4 pt-6 md:w-[80%] md:px-10">
          <Media
            mediaItems={[
              {
                type: "image",
                src: scorpixImages.foponce,
                alt: "Photo du stand de notre équipe PIX 34 - FOPONCÉ CORP",
              },
            ]}
          />
        </div>

        <div className="mt-6">
          <Title size={2}>Épreuves du Concours</Title>
          <Text>
            Lors de cette journée, l'hexapode a été soumis à plusieurs épreuves
            afin de connaitre ses limites et mettre en valeur ses qualités.
          </Text>
        </div>

        <div className="flex flex-col pt-6 md:flex-row">
          <ul>
            <List>
              <b>Déplacement rectiligne :</b> Cette épreuve évaluait la
              précision et l'efficacité du mouvement de l'hexapode.
            </List>
            <List>
              <b>Transport d'une charge :</b> Ce test mesurait la capacité de
              l'hexapode à transporter une charge sur une certaine distance.
            </List>
            <List>
              <b>Gravir une pente :</b> Cette épreuve testait la capacité de
              l'hexapode à franchir une pente dont l'inclinaison augmentait
              progressivement.
            </List>
            <List>
              <b>Epreuve spéciale de la piscine à boules :</b> Cette épreuve
              consistait à traverser un bac rempli de boules, un défi
              particulièrement exigeant.
            </List>
          </ul>
          <div className="mt-4 w-full md:mt-0 md:ml-6 md:w-[30%]">
            <Media
              mediaItems={[
                {
                  type: "image",
                  src: scorpixImages.trial,
                  alt: "Epreuve spéciale de la piscine à boule.",
                },
              ]}
            />
          </div>
        </div>

        <Title size={2}>Résultat du Concours</Title>
        <Text>
          Les performances de Scorpix ont été remarquées, notamment pour son
          ingénierie bien optimisée et sa conception modulaire.
        </Text>

        <div className="mx-auto w-full pt-5 md:w-[60%]">
          <Media
            mediaItems={[
              {
                type: "image",
                src: scorpixImages.result,
                alt: "Photo de notre équipe FOPONCÉ CORP sur le podium du Showroom",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
