import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import Media from "@/components/ui/Media";
import List from "@/components/ui/List";
import Quote from "@/components/ui/Quote";

import { scorpixPaw } from "@/assets/ScorpixAssets";

export default function ScorpixPawMechanicsTab() {
  return (
    <div className="px-2 md:px-0">
      {/* INTRODUCTION */}
      <Text spacing="sm">
        La mécanique de la patte a pour objectif de transformer le mouvement
        circulaire délivré par le système de transmission en un mouvement
        exploitable permettant à la patte d’être fonctionnelle. Cette partie du
        projet constitue un élément clé de la locomotion de l’hexapode, car elle
        conditionne directement la stabilité, l’amplitude et la fluidité du
        déplacement.
      </Text>

      <Text spacing="sm">
        Les prototypes de la mécanique de la patte ont été réalisés en bois à
        l’aide d’une découpeuse laser. Ce choix nous a permis de prototyper
        rapidement, d’itérer fréquemment et de visualiser concrètement le
        comportement mécanique des différentes solutions envisagées.
      </Text>

      <Text spacing="md">
        La mécanique doit être compacte pour une intégration facile dans la
        structure et ajustable afin de permettre des calibrages fins.
      </Text>

      <Title size={2}>
        Objectif : Réaliser une mécanique capable d’entraîner la patte à partir
        d’un mouvement circulaire.
      </Title>

      {/* ETUDE THEORIQUE */}
      <Title>Étude du mouvement de la patte</Title>

      <Text>
        Avant toute réalisation physique, une étude théorique du mouvement de la
        patte a été menée. L’objectif était de comprendre le mouvement de la
        patte chez les arthropodes.
      </Text>

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.schema1,
            alt: "Schéma du mouvement d'une patte",
          },
        ]}
      />

      <Title>Solution technique proposée</Title>

      <Text spacing="md">
        La solution retenue repose sur un ensemble [manivelle ; crochet ;
        bielle] permettant de transmettre efficacement le mouvement tout en
        contrôlant les degrés de liberté. Cette architecture a servi de base à
        l’ensemble des prototypes développés par la suite.
      </Text>

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.schema2,
            alt: "Schéma illustrant le mouvement réalisé par le mécanisme",
          },
        ]}
      />

      <Title>Schéma cinématique</Title>

      <Text spacing="md">
        Le schéma cinématique détaille les différentes pièces du mécanisme et
        leurs interactions. Il met en évidence les points de rotation, les
        liaisons et les trajectoires suivies par chaque composant.
      </Text>

      <Media
        size="sm"
        mediaItems={[
          { type: "image", src: scorpixPaw.schema3, alt: "Schéma cinématique" },
        ]}
      />

      <Title>Description du mouvement de la bielle</Title>

      <Text>
        Le cœur du mécanisme repose sur une bielle reliée à une manivelle. La
        rotation de cette dernière entraîne un déplacement alternatif de la
        bielle, qui agit ensuite sur la patte.
      </Text>

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.schema4,
            alt: "Schéma du mouvement de la bielle (Vue de haut)",
          },
        ]}
      />

      <Title>Description des étapes du mécanisme</Title>

      <Text spacing="md">
        Le mécanisme fonctionne selon une séquence d’étapes précises, assurant
        un mouvement fluide et contrôlé de la patte. Chaque étape correspond à
        une position clé du cycle de mouvement.
      </Text>

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.schema5,
            alt: "Tableau des étapes du mécanisme",
          },
        ]}
      />

      <Title>Formules mathématiques</Title>

      <Text>
        Des relations mathématiques ont été établies afin de relier la longueur
        des pièces, l’amplitude du mouvement et la position de la patte. Ces
        formules nous ont permis de réduire la taille globale du mécanisme tout
        en conservant une amplitude suffisante.
      </Text>

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.schema6,
            alt: "Formules mathématiques",
          },
        ]}
      />

      {/* PROTOTYPES */}
      <Title>Prototype 1</Title>

      <Text spacing="xl">
        Le prototype 1 correspond à une première modélisation du mécanisme sur
        Sharp3D. Il avait pour objectif principal de comprendre le
        fonctionnement global et de mettre en évidence les axes d’amélioration
        pour les itérations suivantes.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.mode1,
            alt: "Modélisation Sharp3D – Prototype 1",
          },
        ]}
      />

      <Media
        size="md"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto1,
            alt: "Prototype 1 découpé – 10 janvier 2024",
          },
        ]}
      />

      <Text spacing="md">
        Ce prototype est fonctionnel est permet de transformer le mouvement
        circulaire qui est, ici, généré par une petite manivelle à main. Les
        principaux problèmes que nous remarquons est la longueur importante du
        mécanisme et le jeu entre la manivelle et la bielle.
      </Text>

      <Title size={2}>Problèmes rencontrés</Title>

      <ul>
        <List>Longueur importante du mécanisme.</List>
        <List>Jeu mécanique entre la manivelle et la bielle.</List>
        <List>Pièces qui ne s’encastrent pas correctement.</List>
        <List>
          Nécessité d’un degré de liberté supplémentaire pour éviter la casse.
        </List>
      </ul>

      <Title size={2}>Solutions apportées</Title>

      <ul>
        <List>
          Utilisation des formules mathématiques pour réduire les longueurs.
        </List>
        <List>Réduction du jeu interne de la manivelle.</List>
        <List>Recalcul des dimensions via un tableau de calibrage.</List>
        <List>Redessin d’une bielle en deux parties.</List>
      </ul>

      <Title size={2}>Améliorations envisagées</Title>

      <ul>
        <List>
          Réduire la hauteur du mécanisme pour qu'il soit plus compact.
        </List>
        <List>
          Réaliser un support adapté au mécanisme pour optimiser le bois
          utilisé.
        </List>
        <List>
          Envisager une pièce pour simuler l'effet de la bielle sur la patte.
        </List>
      </ul>

      <Title>Problème liée à la longueur de la bielle et de la patte</Title>

      <Text>
        Lors de la modélisation du Prototype 2, nous avons relevé un nouveau
        problème. Lorsque la bielle relève la patte, elle doit nécessairement
        avoir un degré de liberté supplémentaire afin de pouvoir bouger. Nous
        avons donc décomposer la bielle ainsi :
      </Text>

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.problem1,
            alt: "Schéma illustrant le problème de la bielle",
          },
        ]}
      />

      <Text>
        Lorsque nous réalisons une simulation de l'impact de la bielle sur la
        patte, nous rencontrons des difficultés. En effet, la position de patte
        et la longueur de la bielle peut rendre impossible le mouvement.
      </Text>

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.problem2,
            alt: "Schéma illustrant le problème de la bielle et de la patte",
          },
        ]}
      />

      <Text>
        Nous pouvons observer ici que la bielle va bien au-delà de la patte.
        Nous devons réaliser de nouveaux calculs afin de réaliser un prototype
        fonctionnel.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.schema7,
            alt: "Calculs mathématiques",
          },
        ]}
      />

      <Text>
        Nous pouvons observer sur ce schéma la raison qui empêche le
        fonctionnement du prototype 2. le cercle que décrit la bielle (B) ne
        croise jamais le cercle que décrit la patte (P). Ainsi pour résoudre ce
        problème, nous devons déterminer les conditions qui relient ces deux
        cercles pour que la patte soit fonctionnelle.
      </Text>

      <Title>Prototype 2</Title>

      <Text>
        Le prototype 2 intègre les améliorations issues du prototype 1. Une
        patte simplifiée a été ajoutée afin de visualiser concrètement l’effet
        de la bielle. La taille globale du mécanisme a été réduite grâce aux
        calculs mathématiques.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.mode2,
            alt: "Modélisation Sharp3D – Prototype 2",
          },
        ]}
      />

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto2,
            alt: "Prototype 2 découpé – 18 janvier 2024",
          },
        ]}
      />

      <Text>
        Ce prototype marque une étape clé : le système manivelle–crochet–bielle
        devient fluide et dynamique, ouvrant la voie à l’optimisation réelle de
        la patte.
      </Text>

      <Title size="2">Problèmes rencontrés</Title>

      <ul>
        <List>
          Jeu important au niveau de la manivelle qui donne trop de liberté au
          mécanisme.
        </List>
        <List>L'amplitude horizontal n'est pas assez significative.</List>
        <List>
          Les perforations ne sont pas bien calculé pour accueillir les tiges en
          bois.
        </List>
      </ul>

      <Title size="2">Solutions apportées </Title>

      <ul>
        <List>
          Repenser la forme du crochet pour donner un seul degré de liberté à la
          bielle.
        </List>
        <List>Ajouter 2 écrous autour de la liaison manivelle-crochet.</List>
        <List>
          Appliquer la formule mathématique pour mieux proportionner la taille
          des pièces et leur positions.
        </List>
        <List>
          Refaire un calibrage des dimension des tiges en bois pour connaitre
          les diamètre nécessaire à un encastrement.
        </List>
      </ul>

      <Text>
        <br />
        Ce prototype est une réussite sur le système [manivelle ; crochet ;
        bielle] car il est fluide et dynamique. Maintenant nous devons avancer
        sur l'efficacité de la patte, afin qu'elle soit optimal !
      </Text>

      <Title>Problème de collision de la bielle sur la structure</Title>

      <Text>
        En plus du problème lié à la longueur des composants, nous nous sommes
        rendus compte que dans beaucoup de cas (simulation du mécanisme) la
        bielle rentrait en contact avec la partie supérieur de la structure.
        Ainsi, nous devons mener une réflexion autour de la forme de la
        structure et de la patte.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.problem3,
            alt: "Schéma illustrant le problème de collision de la bielle",
          },
        ]}
      />

      <Text>
        On peut bien observer que la bielle rentre en contact avec la partie
        supérieur de la structure, ce qui bloque totalement le fonctionnement du
        mécanisme. <br /> <br />
        Nous pouvons affirmer que la raison principale de ce blocage est dû à la
        prolongation de la structure supérieur du support. La forme de la patte
        doit donc s'étendre encore plus loin.
      </Text>

      <Title>Prototype 3</Title>

      <Text>
        Avec le prototype 3, la forme de la manivelle et la disposition générale
        des pièces ont été repensées afin d’augmenter l’efficacité du mécanisme
        sur la patte. Le système devient plus performant à haute vitesse, mais
        révèle encore des problèmes de collision.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.mode3,
            alt: "Modélisation Sharp3D - Prototype 3",
          },
        ]}
      />

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto3,
            alt: "Prototype 3 découpé – 9 février 2024",
          },
        ]}
      />

      <Text>
        Ce prototype est presque fonctionnel et il réalise le mouvement de la
        patte. Il possède des avantages mais aussi des inconvénients. Le
        principale problème est le positionnement de la patte et sa forme qui
        rends impossible le mouvement complet. La manivelle est beaucoup mieux
        et est très fonctionnelle à haute vitesse.
      </Text>

      <Title size="2">Problèmes rencontrés :</Title>

      <ul>
        <List>
          La bielle se bloque sur la structure ce qui empêche le fonctionnement
          de la patte.
        </List>
        <List>Jeu important dans la rotule de la patte.</List>
        <List>
          Absence d'une pièce permettant la fixation de la rotule de la patte.
        </List>
      </ul>

      <Title size="2">Solutions apportées :</Title>

      <ul>
        <List>
          Trouver les conditions nécessaires et suffisantes pour le
          fonctionnement du mécanisme.
        </List>
        <List>
          Réduire le diamètre de la perforation de la bielle pour réduire le
          jeu.
        </List>
      </ul>

      <Title>Prototype 4</Title>

      <Text spacing="md">
        Le prototype 4 introduit une nouvelle forme de support de patte,
        supprimant les collisions observées précédemment. Il répond pleinement à
        la fonction principale du mécanisme, tout en restant perfectible pour
        une intégration finale.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.mode4,
            alt: "Modélisation Sharp3D - Prototype 4",
          },
        ]}
      />

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto4,
            alt: "Prototype 4 découpé – 15 février 2024",
          },
        ]}
      />

      <Text>
        Ce prototype est fonctionnel et réponds à la fonction principale que
        nous lui avons assigné : réaliser le mouvement de la patte à partir d'un
        mouvement circulaire. Il nécessite encore quelques ajustements pour
        pouvoir l'intégrer à la structure général.
      </Text>

      <Title size="2">Problèmes rencontrés :</Title>

      <ul>
        <List>
          Certains liaisons doivent être ajusté pour ne pas que cette dernière
          cède sous certains efforts (support de patte, axe de soutient de la
          structure ;
        </List>
        <List>
          La patte à un degré de liberté supplémentaire qui annule l'effet de la
          bielle sur la patte ;
        </List>
      </ul>

      <Title size="2">Solutions apportées :</Title>

      <ul>
        <List>
          Réaliser une séance de calibrage pour fixer les dimensions nécessaire
          à une bonne liaison ;
        </List>
        <List>
          Ajouter une patte afin d'avoir un volume qui prends en sandwich la
          bielle.
        </List>
      </ul>

      <Text>
        <br />
        Ce prototype est une véritable réussite même s'il nécessite quelques
        ajustements afin d'avoir un prototype finalisé.
      </Text>

      <Title>Prototype 5</Title>

      <Text>
        Ce prototype a pour but de corriger les petites erreurs afin d’être une
        version viable au développement du reste de l’hexapode. La principale
        changement est le double de la patte qui vient s’ajouter afin de rendre
        l’effet de la patte sur l’environnement plus efficace. Durant la
        réalisation de ce prototype, nous nous sommes rendu compte que la
        découpe laser ne réalisait pas une découpe parfaitement verticale. Nous
        l’étudierons en précision afin d’ajuster le calibrage.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.mode5,
            alt: "Modélisation Sharp3D - Prototype 5",
          },
        ]}
      />

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto5,
            alt: "Prototype 5 découpé – 23 février 2024",
          },
        ]}
      />

      <Text>
        Ce que nous avons beaucoup étudié sur ce prototype est les degrés de
        liberté réels que possédait chaque liaison. Car des degrés de liberté en
        trop, impliquaient des imprécisions dans le résultat obtenu et du jeu
        entre les différentes pièces.
      </Text>

      <Title size="2">Problèmes rencontrés :</Title>

      <ul>
        <List>
          Liaisons vagues qui génère des problèmes de montage ou de démontage ;
        </List>
        <List>
          Jeu important au niveau de la liaison [Patte ; Crochet] (degré de
          liberté en plus) ;
        </List>
      </ul>

      <Title size="2">Solutions apportées :</Title>

      <ul>
        <List>
          Étudier la façon dont la découpeuse laser réalise la perforation (voir
          Hexapode Général) ;
        </List>
        <List>
          Modifier la forme du crochet afin de restreindre la liberté du crochet
          ;
        </List>
      </ul>

      <Text>
        <br />
        Ce prototype a permis de mettre en valeur les différents points qui
        rendaient imprécis le mouvement. Nous avons aussi remarqué l’erreur de
        découpe de la découpeuse laser que nous devons prendre en compte afin
        d’avoir un travail abouti.
      </Text>

      <Title>Prototype 6 – Haut de gamme</Title>

      <Text>
        Le prototype 6 représente l’aboutissement du travail sur la mécanique de
        la patte. Les liaisons sont finement calibrées afin d’obtenir un
        fonctionnement fluide et précis, prêt pour l’intégration dans l’hexapode
        complet.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.mode6,
            alt: "Modélisation Sharp3D - Prototype 6",
          },
        ]}
      />

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto6,
            alt: "Prototype 6 découpé – 9 mars 2024",
          },
        ]}
      />

      <Text>
        Les modifications apportées à ce prototype ont répondu aux problèmes
        relevés dans le prototype précédent. En effet, les liaisons de ce
        prototype sont parfaitement ajustées afin de permettre, après un travail
        post-découpage, un jeu suffisant pour que les liaisons pivots soient
        fluides et un jeu restreint afin de limiter la liaison à ses degrés de
        liberté prévus. Le travail post-découpage consiste à poncer les bordures
        des différentes liaisons afin d’effacer l’effet biseauté généré par la
        découpeuse laser. Malheureusement, ce travail nécessite beaucoup de
        temps qui ralentirait la réalisation des autres prototypes.{" "}
      </Text>

      <Title size="2">Problèmes rencontrés :</Title>

      <ul>
        <List>
          Temps de post-découpage important pour obtenir des liaisons fluides ;
        </List>
      </ul>

      <Title size="2">Solutions apportées :</Title>

      <ul>
        <List>
          Étudier une version bas de gamme plus rapide à produire et à assembler
          ;
        </List>
      </ul>

      <Text>
        <br />
        Ce prototype est une réussite totale sur le plan mécanique. Il
        représente la version haut de gamme de la mécanique de la patte, avec
        des liaisons parfaitement calibrées pour un fonctionnement fluide et
        précis.
      </Text>

      <Title>Prototype 7 – Bas de gamme</Title>

      <Text>
        Afin de réduire le temps de fabrication, une version bas de gamme a été
        développée. Elle conserve un fonctionnement satisfaisant tout en étant
        plus rapide à produire et à assembler. Ce prototype vise à équilibrer
        performance et efficacité de production.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.mode7,
            alt: "Modélisation Sharp3D - Prototype 7",
          },
        ]}
      />

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto7,
            alt: "Prototype 7 découpé – 9 mars 2024",
          },
        ]}
      />

      <Text>
        Pour réaliser ce prototype, nous avons réalisé le même travail qu’avec
        le prototype précédent, nous avons réalisé une séance de calibrage. Nous
        avons désormais 2 versions finalisés de notre mécanique de patte.
      </Text>

      <Title>Prototype 8</Title>

      <Text>
        Le prototype 8 répond aux problèmes observés lors de l’intégration de la
        mécanique de la patte dans l’hexapode complet. Il se concentre sur des
        pièces isolées afin de renforcer la fiabilité globale du système.
      </Text>

      <Title size="2">Problèmes rencontrés</Title>

      <ul>
        <List>
          La liaison vilebrequin/engrenage s'est brisé lors du fonctionnement
          normal de l'hexapode.
        </List>
        <List>
          La tige supérieur du vilebrequin être trop longue et empêche la
          structure supérieur de se placer correctement.
        </List>
        <List>
          Lors du fonctionnement certains manetons des mécaniques de pattes se
          cognent entre eux.
        </List>
        <List>Lors du transport du prototype, une bielle s'est brisé.</List>
      </ul>

      <Title size="2">Solutions apportées</Title>

      <ul>
        <List>
          Modéliser un vilebrequin avec une tige plus épaisse et rectangulaire.
        </List>
        <List>
          Mesurer la hauteur entre la base intermédiaire et la base supérieur,
          pour ajuster la hauteur du vilebrequin.
        </List>
        <List>
          Modéliser une nouvelle forme de maneton afin d'éviter le cognement.
        </List>
        <List>Réaliser une bielle plus résistante.</List>
      </ul>

      <Media
        layout="grid"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.problem4,
            alt: "Prototype 8 – Améliorations du vilebrequin",
          },
          {
            type: "image",
            src: scorpixPaw.problem5,
            alt: "Prototype 8 – Améliorations du maneton",
          },
        ]}
      />

      <Text spacing="md">
        Pour la partie vilebrequin/engrenage, nous avons réalisé une liaison
        plus solide en la rendant rectangulaire. De plus, cela permettra de
        démonter cette partie plus facilement. En effet, pour démonter notre
        hexapode, nous devons retirer les engrenages des mécaniques de pattes.
        Pour le maneton, nous avons réduit l'épaisseur de l'anneau et avons
        vérifié sa résistance. Enfin, pour la bielle, nous avons augmenté sa
        largeur.
      </Text>

      <Text spacing="xl">
        Ces nouvelles pièces seront utilisées pour réaliser le prototype 2 de
        l'hexapode.
      </Text>
    </div>
  );
}
