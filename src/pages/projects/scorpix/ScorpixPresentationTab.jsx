import { scorpixImages, scorpixVideos } from "@/assets/ScorpixAssets";
import { logos } from "@/assets/Assets";
import Media from "@/components/ui/Media";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import List from "@/components/ui/List";
import Tag from "@/components/projects/Tag";
import Quote from "@/components/ui/Quote";

export default function PresentationTab() {
  const tags = [1, 2, 3, 12];

  return (
    <div>
      <div className="w-ful flex space-x-10 p-3">
        <div className="w-[70%]">
          <Text>
            Nous avons réalisé ce projet dans le cadre du Projet Ingénieur
            eXploration en première année d’ESILV, <b>PIX 1</b>. Notre objectif
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
        <div className="item-center border-primary flex h-full w-[30%] flex-col gap-y-2 border-2 p-2 text-center">
          <h1 className="bg-primary w-full pt-2 pb-3 text-4xl font-bold">
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
              <img src={logos.date} className="bg-primary w-8 rounded-md p-1" />
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
          <div className="flex flex-wrap items-center justify-center space-y-2 space-x-2">
            {tags.slice(0, 5).map((id, index) => (
              <Tag key={index} id={id} isTextMode={true} />
            ))}
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
          <b>Structure général :</b> Support et intégration des différents
          sous-systèmes.
        </List>
      </ul>
      <Text>
        Nous réaliserons pour chaque partie de notre hexapode, des modélisations
        qui aboutiront sur la conception de prototypes. Puis nous noterons, les
        problèmes rencontrés afin d'étudier les solutions possibles qui
        permettront la réalisation d'autres prototypes.
      </Text>
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
        déplacer efficacement en adoptant une locomotion tripode optimisée. Ses
        principales caractéristiques sont :
      </Text>
      <ul>
        <div className="flex w-full items-center space-x-10 p-7">
          <Quote title="Modulable">
            Un prototype adaptable, capable d'accueillir différents modules pour
            répondre à des besoins spécifiques et étendre ses fonctionnalités.
          </Quote>
          <div className="w-[60%]">
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

        <div className="flex w-full items-center space-x-10 p-7">
          <div className="w-[60%]">
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
          <Quote title="Stabilité et Précision">
            Une conception robuste avec des pattes indépendantes mais
            parfaitement synchronisées, permettant une locomotion fluide sur
            terrain plat. Les extrémités des pattes sont modulables pour
            s'adapter à différents types de terrains. Le système est si
            résilient qu'il peut continuer à fonctionner même avec une patte en
            moins.
          </Quote>
        </div>

        <div className="flex w-full items-center space-x-10 p-7">
          <Quote title="Transmission optimisée">
            Un système d'engrenages conçu pour minimiser les frictions,
            réduisant ainsi les pertes d'énergie et améliorant la
            synchronisation des pattes. Extensible avec un moteur supplémentaire
            pour un couple accru, il peut également alimenter des systèmes
            externes, comme animer une queue ou une mandibule.
          </Quote>
          <div className="w-[60%]">
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

        <div className="flex w-full items-center space-x-10 p-7">
          <div className="w-[60%]">
            <Media
              mediaItems={[
                {
                  type: "video",
                  src: scorpixVideos.disassembly,
                  alt: "Scorpix peut être entierement démonté et remonté",
                },
                {
                  type: "video",
                  src: scorpixVideos.assembly,
                  alt: "Scorpix peut être entierement démonté et remonté",
                },
              ]}
            />
          </div>
          <Quote title="Facilité de maintenance">
            L'hexapode est entièrement démontable et remontable, avec des
            sous-parties indépendantes pour une réparation rapide en cas de
            pièce cassée. Les liaisons ont été calibrées avec précision pour
            garantir des connexions optimales, et les composants sont facilement
            accessibles pour des ajustements rapides.
          </Quote>
        </div>

        <div className="flex w-full items-center space-x-10 p-7">
          <Quote title="Un Hexapode Prêt à Tout">
            L'hexapode Scorpix est conçu pour relever tous les défis. Grâce à sa
            conception modulaire et adaptable, il peut s’adapter à de multiples
            scénarios : transporter une charge, gravir des pentes, et même
            fonctionner avec une patte en moins ou deux pattes supplémentaires.
            Son architecture flexible permet également d’y intégrer une
            mandibule pour la préhension ou une queue pour l’équilibre, selon
            les besoins. Cette polyvalence en fait un véritable caméléon
            mécanique, capable d'évoluer et de s’adapter à chaque mission avec
            efficacité.
          </Quote>

          <div className="w-[60%]">
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
                  alt: "Scorpix équipé de sa mandibule fonctionnelle pour dégager le passage",
                },
                {
                  type: "video",
                  src: scorpixVideos.load,
                  alt: "Scorpix capable de transporter une charge",
                },
                {
                  type: "video",
                  src: scorpixVideos.climbing,
                  alt: "Scorpix capable de gravir des pentes rugueuses",
                },
                {
                  type: "video",
                  src: scorpixVideos.without,
                  alt: "Scorpix capable de fonctionner avec une patte en moins",
                },
                {
                  type: "video",
                  src: scorpixVideos.extended,
                  alt: "Scorpix capable d'avoir des pattes en plus",
                },
              ]}
            />
          </div>
        </div>
      </ul>
      <Title>Showroom PIX 1 et Prix</Title>
      <Text>
        Le projet a été présenté lors du Showroom PIX 1, le 4 juin 2024, un
        événement ESILV permettant à chaque équipe de démontrer le travail
        accompli devant un jury et les autres participants. Notre équipe
        s'appelait "FOPONCÉ CORP", en référence à la partie montage des pièces
        en bois qui pouvait parfois être compliqué sans un petit coup de
        ponçage.
      </Text>
      <div className="mx-auto w-[80%] justify-center px-10 pt-10 pb-0">
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
      <div>
        <Title size={2}>Épreuves du Concours</Title>
        <Text>
          Lors de cette journée, l'hexapode a été soumis à plusieurs épreuves
          afin de connaitre ses limites et mettre en valeur ses qualités.
        </Text>
      </div>
      <div className="flex pt-6">
        <ul className="text-justify">
          <List>
            <b>Déplacement rectiligne :</b> Cette épreuve évaluait la précision
            et l’efficacité du mouvement de l’hexapode. L’objectif était
            d’atteindre une ligne d’arrivée placée à une distance de plus en
            plus grande. Grâce à sa mécanique optimisée, Scorpix a relevé ce
            défi avec succès, terminant l’épreuve en un temps record.
          </List>
          <List>
            <b>Transport d'une charge :</b> Ce test mesurait la capacité de
            l’hexapode à transporter une charge sur une certaine distance. Nous
            devions déplacer une petite bouteille remplie de sable.
            Heureusement, notre module initialement conçu pour transporter une
            canette s’est avéré parfaitement adapté à cette tâche, à condition
            de positionner la bouteille à l’envers. Scorpix a ainsi accompli
            cette épreuve avec brio, remportant l’intégralité du défi haut la
            main.
          </List>
          <List>
            <b>Gravir une pente :</b> Cette épreuve testait la capacité de
            l’hexapode à franchir une pente dont l’inclinaison augmentait
            progressivement. Au départ, Scorpix rencontrait des difficultés et
            glissait sur la surface, rendant l’ascension compliquée. Cependant,
            grâce à ses pattes amovibles, il a pu surmonter les deux premiers
            niveaux avec succès. Malheureusement, les pentes aux inclinaisons
            les plus élevées se sont révélées trop exigeantes, mettant en
            évidence les limites d’adhérence de ses pattes sur des surfaces très
            inclinées.
          </List>
          <List>
            <b>Epreuve spécial de la piscine à boules :</b> Cette épreuve
            consistait à traverser un bac rempli de boules, un défi
            particulièrement exigeant pour nos machines. Malheureusement,
            Scorpix n’était pas adapté à cet environnement. Ses pattes fines
            s’enfonçaient entre les boules, l’empêchant de se dégager et le
            laissant coincé au fond du bac. Malgré cet échec, cette épreuve
            s’est révélée ludique et amusante, générant un fort engouement lors
            du Showroom PIX 1. Un moment mémorable où chaque équipe a pu tester
            les limites de son hexapode dans une ambiance animée !
          </List>
        </ul>
        <div className="w-[30%]">
          <Media
            mediaItems={[
              {
                type: "image",
                src: scorpixImages.trial,
                alt: "Epreuve spécial de la piscine à boule.",
              },
            ]}
          />
        </div>
      </div>
      <Title size={2}>Résultat du Concours</Title>
      <Text>
        Les performances de Scorpix ont été remarquées, notamment pour son
        ingénierie bien optimisée et sa conception modulaire. Cette
        reconnaissance marque une réussite technique et une validation du
        travail réalisé.
      </Text>
      <div className="mx-auto w-[60%] pt-5">
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
  );
}
