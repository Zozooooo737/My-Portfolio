import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import Media from "@/components/ui/Media";
import List from "@/components/ui/List";

import { scorpixStruct } from "@/assets/ScorpixAssets";

export default function ScorpixStructureTab() {
  return (
    <div>
      <Text spacing="md">
        La structure général est la pièce support de tous les autres composants.
        Son rôle est de représenter l'hexapode à travers un corps centrale pour
        supporter la transmission les moteurs et les piles ; et 6 pattes pour
        accueillir leur mécanisme et la patte.
      </Text>

      <Text>
        La structure générale doit être démontable et légère, tout en
        garantissant un centre de gravité correctement positionné afin d’assurer
        la stabilité et le bon fonctionnement du système.
      </Text>

      <Title size="2">
        Objectif : Réaliser un support pour accueillir tous les composants de
        l'hexapode.
      </Title>

      <Title size="">Description de notre structure générale</Title>

      <Text spacing="md">
        Nous voulons que notre structure générale soit le plus simple possible.
        Notre priorité est de le rendre facilement démontable afin de pouvoir le
        ranger facilement. Mais aussi pour pouvoir facilement accéder aux
        différentes pièces.
      </Text>

      <Text spacing="md">
        En effet, lors du développement du projet, nous avons décomposé notre
        hexapode en 4 parties : mécanique de patte, patte, transmission et
        structure générale. Ainsi, nous voulons retrouver cette décomposition
        dans l'apparence de notre hexapode.
      </Text>

      <Text spacing="md">
        L'esthétisme n'est pas notre priorité pour le moment, nous chercherons
        un prototype fonctionnel pour ensuite prendre du temps sur les détails.
      </Text>

      <Title size="3">Objectif de la structure</Title>

      <Text spacing="lg">
        Nous voulons que notre structure contiennes les différentes parties de
        notre hexapode :
      </Text>

      <List>La transmission composé d'un ensemble d'engrenages.</List>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.transmission,
            alt: "Transmission",
          },
        ]}
      />

      <List>
        Les mécaniques des pattes composé de deux pièce : vilebrequin/bielle et
        coulisseau/patte.
      </List>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.mechanic,
            alt: "Mécanique de la Patte",
          },
        ]}
      />

      <List>
        Les pattes sont fixées à l'extrémité des mécaniques des pattes. Ainsi,
        il n'y pas besoin de prévoir un espace sur la structure pour les fixer.
        Mais, les pattes ont des degrés de libertés afin de pouvoir bouger, donc
        nous ne devons le prendre en compte.
      </List>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.paw,
            alt: "Patte",
          },
        ]}
      />

      <List>
        Le moteur doit être fixé de façon stable sur le support et doit être
        facilement démontable afin de le déplacer entre les différents
        prototypes.
      </List>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.engine,
            alt: "Moteur",
          },
        ]}
      />

      <List>
        La batterie doit idéalement trouver sa place sur la structure mais son
        poids important aura une influence sur le centre de gravité de
        l'hexapode.
      </List>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.battery,
            alt: "Transmission",
          },
        ]}
      />

      <Text>
        Notre objectif est aussi d'optimiser le poids de l'hexapode, et pour
        cela nous avons opter pour la solution suivante : réaliser un châssis.
        De plus, la disposition générale des pièces, nous conduis à réaliser
        plusieurs étages raccorder par des tiges en bois.
      </Text>

      <Title size="3">Disposition des composants</Title>

      <Text spacing="md">
        Voici un schéma, présentant la façon dont nous voulons disposer nos
        composants dans la structure générale.
      </Text>

      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.schema1,
            alt: "Schéma de la disposition des composants dans la structure générale",
          },
        ]}
      />

      <Title size="3">Comment fixer le moteur et la batterie ?</Title>

      <Text>
        La première problématique que nous nous sommes posé et comment fixé le
        moteur sur la structure générale. En effet, ce dernier doit rester en
        place afin de pouvoir délivré continuellement un moment à la chaine de
        transmission.
      </Text>

      <Text>
        Dans un premier temps, nous avons remarqué que le moteur ne pouvait se
        trouver entre la base inférieur et supérieur en raison de sa hauteur
        importante. Nous avons donc, imaginer une boite dans lequel nous
        pourront le caler pour que ce dernier puisse être raccordé à la
        structure.
      </Text>

      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.problem1,
            alt: "Placement du moteur",
          },
        ]}
      />

      <Text spacing="md">
        Malheureusement, nous avons remarqué que ce dispositif entravera le
        fonctionnement des mécaniques de pattes proches de lui. Ainsi, nous
        étions obligés de fixer le moteur au-dessus du système de transmission.
      </Text>

      <Text spacing="md">
        Pour ce qui concerne la batterie, nous avons aussi remarqué que sa
        taille importante entravera le fonctionnement des mécaniques de pattes
        autour de lui.
      </Text>

      <Text spacing="lg">
        Pour conclure, nous sommes contraints de placer le moteur et la batterie
        sur la partie supérieure de la structure.
      </Text>

      <Title size="3">Prototype 1</Title>

      <Text spacing="md">
        Voici le prototype 1 qui nous permettra de relever les différentes
        anomalies de notre hexapode en fonctionnement. Nous avons modélisé un
        châssis en plusieurs étages afin de disposer les composants. Nous avons
        relié les châssis par des tiges en bois dont nous avons réalisé le
        calibrage afin d'avoir une liaison encastrement. Il pèse 240 grammes
        (avec batterie).
      </Text>

      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.mode1w,
            alt: "Modélisation Sharp3D - Prototype 1 (avec composants)",
          },
        ]}
      />

      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.mode1wo,
            alt: "Modélisation Sharp3D - Prototype 1 (sans composants)",
          },
        ]}
      />

      <Text spacing="md">
        Ce prototype a été aisément monté, car nous avons calibré les liaisons
        de façon à ne pas perdre du temps sur le ponçage des pièces. De plus,
        nous avons mis de la cire de bougie afin d'améliorer les liaisons
        mécaniques et d'éviter toute casse. Les premiers tests nous ont révélé
        des problèmes liés aux composants que nous nous n'aurons jamais remarqué
        en étudiants les composants séparément. Nous avons relevé aussi deux
        points de fragilités majeures : les dents des engrenages et la liaison
        vilebrequin/engrenage.
      </Text>

      <Media
        layout="grid"
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.proto1_1,
            alt: "Prototype 1 - Découpé le 20 mars 2024 (1)",
          },
          {
            type: "image",
            src: scorpixStruct.proto1_2,
            alt: "Prototype 1 - Découpé le 20 mars 2024 (2)",
          },
        ]}
      />

      <Title size="2">Problèmes rencontrés</Title>

      <ul className="pb-6">
        <List>
          <b>(Transmission)</b> L’hexapode se déplace en tournant sur lui-même
          au lieu d’effectuer un déplacement rectiligne.
        </List>
        <List>
          <b>(Transmission)</b> La chaîne de transmission s’est cassée
          lorsqu’une résistance s’est opposée au fonctionnement des pattes,
          provoquant la rupture de dents d’engrenages.
        </List>
        <List>
          <b>(Mécanique de la patte)</b> La liaison vilebrequin / engrenage
          s’est brisée lors du fonctionnement normal de l’hexapode.
        </List>
        <List>
          <b>(Mécanique de la patte)</b> La tige supérieure du vilebrequin est
          trop longue et empêche la structure supérieure de se placer
          correctement.
        </List>
        <List>
          <b>(Mécanique de la patte)</b> Lors du fonctionnement, certains
          manetons des mécaniques de pattes se cognent entre eux.
        </List>
        <List>
          <b>(Structure générale)</b> Lors du transport de l’hexapode, la
          batterie tombe et n’est plus maintenue en place.
        </List>
      </ul>

      <Title size="2">Solutions apportées</Title>

      <ul className="pb-6">
        <List>
          Repenser la chaîne de transmission afin d’inverser la rotation de
          trois engrenages d’un même côté.
        </List>
        <List>Réaliser de nouveaux engrenages avec des dents plus larges.</List>
        <List>
          Modéliser un vilebrequin avec une tige plus épaisse et de forme
          rectangulaire.
        </List>
        <List>
          Mesurer la hauteur entre la base intermédiaire et la base supérieure
          afin d’ajuster précisément la hauteur du vilebrequin.
        </List>
        <List>
          Modéliser une nouvelle forme de maneton afin d’éviter les collisions.
        </List>
        <List>
          Modéliser une pièce venant plaquer la batterie sur la base supérieure
          pour assurer son maintien.
        </List>
      </ul>

      <Title size="2">Améliorations envisagées</Title>

      <ul>
        <List>
          Harmoniser la forme du trou de maintien du moteur sur la base
          inférieure.
        </List>
        <List>
          Réduire la distance entre les trous définissant la largeur de la
          batterie pour améliorer son maintien.
        </List>
        <List>
          Modéliser des écrous papillons afin de maintenir les étages en place
          tout en facilitant le démontage.
        </List>
        <List>
          Prévoir un système permettant d’enrouler les fils pour éviter leur
          dispersion dans le mécanisme.
        </List>
      </ul>

      <Text spacing="lg">
        <br />
        Ce premier prototype nous apportés beaucoup de choses à corriger et
        d'axes d'améliorations. Nous devons maintenant revenir sur les
        composants et produire de nouveaux sous prototypes afin de pouvoir
        réaliser un nouveau prototype d'hexapode.
      </Text>

      <Title>Prototype 2</Title>

      <Text>
        Le prototype 2 a pour principal objectif de réaliser une trajectoire
        rectiligne. Pour cela, nous avons réalisé une nouvelle transmission afin
        de réaliser ce déplacement. De plus, nous avons apporté toutes les
        modifications nécessaires afin de régler les problèmes du prototype 1 et
        des améliorations.
      </Text>

      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.mode2w,
            alt: "Modélisation Sharp3D - Prototype 2 (avec composants)",
          },
        ]}
      />

      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.mode2wo,
            alt: "Modélisation Sharp3D - Prototype 2 (sans composants)",
          },
        ]}
      />

      <Text spacing="md">
        Ce prototype a reçu beaucoup de changement comparé au prototype 1. Nous
        avons amélioré la transmission, les mécaniques de pattes et les pattes.
        De plus, nous avons pu positionné la batterie sous la transmission. Nous
        pouvons aussi relevé que cette hexapode est facilement montable et
        démontable.
      </Text>

      <Media
        layout="grid"
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.proto2_1,
            alt: "Prototype 2 - Découpé le 27 mars 2024 (1)",
          },
          {
            type: "image",
            src: scorpixStruct.proto2_2,
            alt: "Prototype 2 - Découpé le 27 mars 2024 (2)",
          },
        ]}
      />

      <div className="pt-4">
        <Media
          size="sm"
          mediaItems={[
            {
              type: "image",
              src: scorpixStruct.proto2_3,
              alt: "Prototype 2 - Découpé le 27 mars 2024 (3)",
            },
          ]}
        />
      </div>

      <Text spacing="md">
        Lors des premiers tests, nous avons constaté que le déplacement de
        l’hexapode est bien rectiligne. En revanche, nous avons identifié un
        point de fragilité majeur sur ce nouveau prototype : l’engrenage moteur.
        En effet, lorsque l’hexapode commence à marcher, il cesse très
        rapidement de fonctionner, car la liaison moteur / engrenage se brise.
      </Text>

      <Text spacing="md">
        Nous avons ainsi mis en évidence un point essentiel à améliorer : la
        résistance globale du mécanisme de l’hexapode. Lorsque le système est
        actionné manuellement, une résistance importante se fait sentir. Après
        une courte étude, nous avons identifié que ce phénomène est
        principalement dû à des frottements excessifs.
      </Text>

      <Title size="2">Problèmes rencontrés</Title>

      <ul className="pb-6">
        <List>
          <b>(Structure générale)</b> Frottements importants entre la
          transmission et la structure générale.
        </List>
        <List>
          <b>(Structure générale)</b> Présence de nombreuses frictions dans le
          mécanisme lors du fonctionnement.
        </List>
      </ul>

      <Title size="2">Solutions apportées</Title>

      <ul className="pb-6">
        <List>
          Ajouter des rondelles en dessous et au-dessus de la transmission afin
          d’éviter tout contact direct avec la structure générale lors du
          fonctionnement.
        </List>
        <List>Utiliser un lubrifiant adapté au bois.</List>
      </ul>

      <Title size="2">Améliorations envisagées</Title>

      <ul className="pb-6">
        <List>
          Arrondir le bord supérieur des vilebrequins afin de faciliter leur
          montage et leur démontage.a
        </List>
      </ul>

      <Text spacing="lg">
        Ce premier prototype nous a permis d’identifier de nombreux points à
        corriger ainsi que plusieurs axes d’amélioration. Nous devons désormais
        retravailler certains composants et produire de nouveaux sous-prototypes
        afin de pouvoir concevoir une nouvelle version de l’hexapode plus
        robuste et fiable.
      </Text>

      <Title size="3">Prototype 3</Title>

      <Text>
        Le prototype 3 a pour mission d'être fonctionnelle et pour cela, nous
        devons régler un problème majeur : les frottements. Pour cela nous avons
        apporté quelques modifications sur la structure générale et sur la façon
        dont il faut le monter.
      </Text>

      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.mode3w,
            alt: "Modélisation Sharp3D - Prototype 3 (avec composants)",
          },
        ]}
      />

      <Media
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.mode3wo,
            alt: "Modélisation Sharp3D - Prototype 3 (sans composants)",
          },
        ]}
      />

      <Text spacing="md">
        Le prototype 3 de la structure générale a été conçu afin de répondre aux
        problématiques de frottements observées sur les versions précédentes.
        Cette itération intègre l’ajout de boulons associés à des rondelles,
        positionnés de manière stratégique au niveau des éléments mobiles,
        notamment la transmission et les mécaniques de pattes.
      </Text>

      <Text spacing="md">
        Ces éléments permettent de créer un espace entre les pièces en mouvement
        et la structure, évitant ainsi tout contact direct avec les surfaces
        fixes. Cette solution limite considérablement les frottements, réduit
        les résistances mécaniques et améliore la fluidité globale du système
        lors du fonctionnement de l’hexapode.
      </Text>

      <Text spacing="lg">
        L’intégration de ces boulons a également permis de mieux guider les
        pièces en rotation et de stabiliser leur position, tout en conservant
        une structure démontable et facilement ajustable. Les tests réalisés ont
        montré une nette diminution des efforts nécessaires pour actionner le
        mécanisme, aussi bien à la main qu’en fonctionnement motorisé.
      </Text>

      <Media
        layout="grid"
        mediaItems={[
          {
            type: "image",
            src: scorpixStruct.proto3_1,
            alt: "Prototype 3 - Découpé le 4 avril 2024 (1)",
          },
          {
            type: "image",
            src: scorpixStruct.proto3_2,
            alt: "Prototype 3 - Découpé le 4 avril 2024 (2)",
          },
        ]}
      />

      <Text spacing="md">
        <br />
        Le prototype 3 de la structure générale répond pleinement aux objectifs
        fixés. Les solutions mises en place permettent de limiter efficacement
        les frottements, d’améliorer la fiabilité du système et d’assurer un
        fonctionnement plus fluide et plus durable de l’hexapode.
      </Text>

      <Text spacing="xl">
        Cette version valide les choix de conception retenus pour la structure
        générale.
      </Text>
    </div>
  );
}
