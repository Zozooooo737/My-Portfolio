import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import Media from "@/components/ui/Media";
import List from "@/components/ui/List";

import { MathJax } from "better-react-mathjax";

import { scorpixTransmi } from "@/assets/ScorpixAssets";

export default function ScorpixTransmissionTab() {
  return (
    <div className="px-2 md:px-0">
      <Text spacing="sm">
        La transmission a pour rôle de transformer le couple et le mouvement
        généré par le moteur afin de faire fonctionner le mécanisme des pattes.
        Le système doit réaliser une réduction de sa vitesse de rotation. Pour
        répondre à cela, nous réaliserons une chaîne d'engrenage.
      </Text>
      <Text>La chaîne d'engrenage doit être simple et fiable.</Text>
      <Title size={2}>
        Objectif : Réaliser une chaîne d'engrenage afin de transférer le couple
        du moteur dans tous les mécanismes de pattes.
      </Title>
      <Title size={3}>Explication</Title>
      <Text spacing="sm">
        Nous voudrions apporter à chaque mécanique de patte qui sera au nombre
        de 6, un moment qui le permettra de faire bouger sa patte. Nous avons à
        notre disposition 2 moteurs dont nous connaissons leur caractéristique.
      </Text>
      <Text spacing="sm">
        Nous souhaitons utiliser un moteur pour la réalisation de la fonction
        principale de notre hexapode : avancer de façon rectiligne d’un point A
        à un point B.
      </Text>
      <Text spacing="sm">
        Nous utiliserons le deuxième moteur pour mettre en mouvement d’autres
        éléments d’ordre secondaire comme les pinces ou la tête.
      </Text>
      <Title size={3}>Caractéristiques du moteur</Title>
      <div className="items-center md:flex md:flex-row">
        <ul>
          <List>Alimentation: 6 Vcc typique</List>
          <List>Vitesse à vide : 570 t/min à 6 Vcc</List>
          <List>
            Couple :
            <ul>
              <List>de blocage : 1,5 kg.cm</List>
              <List>en charge : 400 g.cm</List>
            </ul>
          </List>
          <List>Dimensions : 49 x 12 x 15,5 mm</List>
          <List>Diamètre de l'axe : 3 mm (avec méplat)</List>
          <List>Longueur de l'axe : 10 mm</List>
          <List>Poids : 25 g</List>
        </ul>

        <Media
          size="xs"
          mediaItems={[
            {
              type: "image",
              src: scorpixTransmi.image1,
              alt: "FIT0564 - Micromoteur à engrenages métalliques 6V",
            },
          ]}
        />
      </div>
      <Title size={3}>Formules associées aux engrenages</Title>
      <Text spacing="sm">
        Nous allons modéliser nos propres engrenages pour notre hexapode. Pour
        cela, nous devrons déterminer différentes caractéristiques à l'aide de
        formules pour nous permettre de réaliser une modélisation de ses
        engrenages.
      </Text>
      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.image2,
            alt: "Caractéristiques des engrenages",
          },
          {
            type: "image",
            src: scorpixTransmi.image3,
            alt: "Formules des engrenages",
          },
        ]}
      />
      <Title size={3}>Solution proposée</Title>
      <Text spacing="md">
        Nous connaissons les caractéristiques de notre moteur qui généra le
        mouvement nécessaire au fonctionnement de notre hexapode.
        Malheureusement, la vitesse de rotation de ce moteur est nettement plus
        élevée que nécessaire. Nous devons réduire le moment généré par le
        moteur.
      </Text>
      <Text spacing="sm">
        Ne pouvant utiliser de l’électronique dans notre projet, nous sommes
        obligés d’utiliser une chaîne de transmission. Opter pour ce choix nous
        arrange pour les raisons suivantes :
      </Text>
      <ul>
        <List>
          C’est une solution simple à mettre en place, peu coûteux, fiable ;
        </List>
        <List>
          Nous pourrons inclure les 6 engrenages qui entraînent les mécanismes
          de patte dans cette chaîne de transmission autour d’un grand engrenage
          centrale afin de synchroniser les mouvements ;
        </List>
      </ul>
      <Text spacing="md">
        <br />
        Ainsi, l’idée est simple : la chaîne de transmission commence avec le
        moteur qui est lié un engrenage. Ensuite, à l’aide d’un ou plusieurs
        engrenages, nous réduisons la vitesse de rotation. Puis, nous terminons
        la chaîne avec un plus grand engrenage afin de connecter sur celui-ci,
        les 6 engrenages des mécanismes de patte.
      </Text>
      <Text spacing="sm">
        Voici les points à travailler afin de proposer cette solution :
      </Text>
      <ul>
        <List>
          Étudier les engrenages de façon générale afin de savoir lequel
          répondra au mieux à notre objectif ;
        </List>
        <List>
          Calculer le nombre de dents que devra posséder chaque engrenage afin
          d'obtenir la vitesse de rotation voulue ;
        </List>
        <List>
          Réaliser le dessin de la forme général de nos engrenages afin qu'ils
          puissent former ensemble une chaîne de transmission ;
        </List>
        <List>
          Réaliser un support afin de voir comme la chaîne de transmission
          marchera avec le moteur ;
        </List>
      </ul>
      <Title size={3}>Schéma cinématique</Title>
      <Media
        size="md"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.schema1,
            alt: "Schéma cinématique de la chaîne de transmission",
          },
        ]}
      />
      <Title size={3}>Formules associées aux chaînes de transmission</Title>
      <Text spacing="md">
        Nous avons étudié les chaînes de transmission afin de connaître les
        formules qui lient les engrenages entre eux. Notre objectif est
        d'établir notre chaîne de transmission qui répondra à notre besoin.
      </Text>
      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.schema2,
            alt: "Exemple d'une chaîne de transmission",
          },
        ]}
      />
      <Text spacing="md">Voici les formules que nous utiliserons :</Text>
      <ul>
        <List>
          Rapport de réduction :
          <span className="block w-full text-center text-2xl">
            <MathJax
              inline
            >{`\\( r = \\frac{Z_{menante}}{Z_{menée}} \\)`}</MathJax>
          </span>
        </List>
        <List>
          Vitesse de rotation :
          <span className="block w-full text-center text-2xl">
            <MathJax
              inline
            >{`\\( n_{sortie} = r \\times n_{entrée} \\)`}</MathJax>
          </span>
        </List>
      </ul>
      <Title size={3}>
        Première Méthode - Calcul du nombre de dents des engrenages
      </Title>
      <Text spacing="md">
        Dans cette section, notre objectif sera de déterminer les
        caractéristiques de nos engrenages afin de les modéliser. Nos engrenages
        s’inscrivent dans une chaîne de transmission. Je rappelle que cette
        chaîne de transmission a deux buts :
      </Text>
      <ul className="ml-6 list-disc">
        <List>
          Transformer une vitesse de rotation de départ en une autre d’arrivée ;
        </List>
        <List>
          Avoir en sortie 6 engrenages afin d’actionner le mécanisme des pattes
          de façon synchronisée ;
        </List>
      </ul>
      <Text spacing="md">
        <br />
        Voici les paramètres fixés qui nous permettront de calculer les autres
        caractéristiques :
      </Text>
      <ul className="ml-6 list-disc">
        <List>
          Moteur (E1) : vitesse de rotation du moteur fournie,{" "}
          <MathJax inline>{`\\( T_1 = 570\\ \\text{tr/min} \\)`}</MathJax>
        </List>
        <List>
          Engrenages de sortie (E3) : vitesse de rotation désirée,{" "}
          <MathJax inline>{`\\( T_3 = 200\\ \\text{tr/min} \\)`}</MathJax>
        </List>
      </ul>
      <Text spacing="md">
        <br />
        Notre chaîne de transmission est composée d’un engrenage relié au moteur
        (E1), d’un engrenage central (E2) et de 6 engrenages identiques (E3). On
        nomme leur vitesse de rotation par{" "}
        <MathJax inline>{`\\( T_{[num]} \\)`}</MathJax> et le nombre de dents
        par <MathJax inline>{`\\( D_{[num]} \\)`}</MathJax>.
      </Text>
      <Text spacing="md">
        La première méthode que j’ai voulue utiliser était par tâtonnement : je
        fixe des valeurs pour le nombre de dents, puis je calcule la vitesse de
        rotation de E3 afin de vérifier si j’ai bien la vitesse voulue.
      </Text>
      <Text spacing="md">
        Par exemple, voici la première proposition réalisée :{" "}
        <MathJax inline>{`\\( D_1 = 12,\\ D_2 = 36,\\ D_3 = 24 \\)`}</MathJax>.
        Nous réalisons le calcul des vitesses de rotation à l’aide des formules
        associées aux engrenages :
      </Text>
      <ul className="ml-6 list-disc">
        <List>
          Calcul du rapport de réduction entre E1 et E2 :{" "}
          <MathJax
            inline
          >{`\\( R_{1/2} = \\frac{D_1}{D_2} = \\frac{12}{36} = 0.333 \\)`}</MathJax>
        </List>
        <List>
          Calcul de la vitesse de rotation de E2 :{" "}
          <MathJax
            inline
          >{`\\( T_2 = 0.333 \\times 570 = 190\\ \\text{tr/min} \\)`}</MathJax>
        </List>
        <List>
          Calcul du rapport de réduction entre E2 et E3 :{" "}
          <MathJax
            inline
          >{`\\( R_{2/3} = \\frac{D_2}{D_3} = \\frac{36}{24} = 1.5 \\)`}</MathJax>
        </List>
        <List>
          Calcul de la vitesse de rotation de E3 :{" "}
          <MathJax
            inline
          >{`\\( T_3 = 1.5 \\times 190 = 285\\ \\text{tr/min} \\)`}</MathJax>
        </List>
      </ul>
      <Text spacing="md">
        <br />
        On remarque que 285 tr/min ne correspond pas à la vitesse de rotation
        désirée de 200 tr/min, donc cette configuration ne convient pas.
      </Text>
      <Text spacing="md">
        Deuxième proposition réalisée :{" "}
        <MathJax inline>{`\\( D_1 = 15,\\ D_2 = 30,\\ D_3 = 16 \\)`}</MathJax>.
        Nous réalisons le calcul des vitesses de rotation à l’aide des formules
        associées aux chaînes de transmission :
      </Text>
      <ul className="ml-6 list-disc">
        <List>
          Calcul du rapport de réduction entre E1 et E2 :{" "}
          <MathJax inline>{`\\( R_{1/2} = \\frac{15}{30} = 0.5 \\)`}</MathJax>
        </List>
        <List>
          Calcul de la vitesse de rotation de E2 :{" "}
          <MathJax
            inline
          >{`\\( T_2 = 0.5 \\times 570 = 285\\ \\text{tr/min} \\)`}</MathJax>
        </List>
        <List>
          Calcul du rapport de réduction entre E2 et E3 :{" "}
          <MathJax inline>{`\\( R_{2/3} = \\frac{30}{16} = 1.875 \\)`}</MathJax>
        </List>
        <List>
          Calcul de la vitesse de rotation de E3 :{" "}
          <MathJax
            inline
          >{`\\( T_3 = 1.875 \\times 285 = 534.375\\ \\text{tr/min} \\)`}</MathJax>
        </List>
      </ul>
      <Text spacing="md">
        <br />
        On remarque que 534.375 tr/min ne correspond pas à la vitesse de
        rotation désirée de 200 tr/min, donc cette configuration ne convient
        pas.
      </Text>
      <Text spacing="md">
        La méthode de tâtonnement ne convient pas pour trouver la bonne
        configuration de cette chaîne de transmission.
      </Text>
      <Title size={3}>
        Deuxième méthode - Calcul du nombre de dents des engrenages
      </Title>
      <Text spacing="md">
        Nous avons vu que la première méthode ne permet pas de déterminer la
        configuration de nos engrenages. Nous allons utiliser une autre
        technique : nous allons poser certaines inconnues en paramètre afin de
        déterminer le reste des inconnues.
      </Text>
      <Text spacing="md">Voici les paramètres qui sont déjà fixés :</Text>
      <ul className="ml-6 list-disc">
        <List>
          Moteur (E1) : vitesse de rotation du moteur fournie,{" "}
          <MathJax inline>{`\\( T_1 = 570\\ \\text{tr/min} \\)`}</MathJax>
        </List>
        <List>
          Engrenages de sortie (E3) : vitesse de rotation désirée,{" "}
          <MathJax inline>{`\\( T_3 = 200\\ \\text{tr/min} \\)`}</MathJax>
        </List>
      </ul>
      <Text spacing="md">
        <br />
        Voici les inconnues que nous avons posées en paramètre :
      </Text>
      <ul className="ml-6 list-disc">
        <List>
          Engrenage de sortie (E3) :{" "}
          <MathJax inline>{`\\( D_3 = 25\\ \\text{dents} \\)`}</MathJax>
        </List>
        <List>
          Engrenage central (E2) :{" "}
          <MathJax inline>{`\\( D_2 = 60\\ \\text{dents} \\)`}</MathJax>
        </List>
      </ul>
      <Text spacing="md">
        <br />
        Notre objectif est d'effectuer le chemin inverse (sorties → central →
        moteur) et de déterminer le nombre de dents de l'engrenage moteur afin
        d'obtenir sa vitesse de rotation fixée. Puis nous vérifierons cette
        configuration en faisant le calcul dans le bon sens (moteur → central →
        sorties).
      </Text>
      <Text spacing="md">
        Déterminons le nombre de dents <MathJax inline>{`\\( D_1 \\)`}</MathJax>{" "}
        de l'engrenage moteur :
      </Text>
      <ul className="ml-6 list-disc">
        <List>
          Pour l'engrenage de sortie (E3) :{" "}
          <MathJax inline>
            {`\\( D_3 = 25,\\ T_3 = 200\\ \\text{tr/min} \\)`}
          </MathJax>
        </List>

        <List>
          Pour l'engrenage central (E2) :{" "}
          <MathJax inline>
            {`
            D_2 = 60,\\ 
            R_{3/2} = \\frac{D_3}{D_2} = \\frac{25}{60} = 0.4166,\\ 
            T_2 = T_3 \\times R_{3/2} = 200 \\times 0.4166 = 83.333\\ \\text{tr/min}
            `}
          </MathJax>
        </List>

        <List>
          Pour l'engrenage moteur (E1) :{" "}
          <MathJax inline>
            {`
            D_1 = ? ,\\ 
            R_{2/1} = \\frac{D_2}{D_1} = \\frac{60}{D_1},\\ 
            T_1 = T_2 \\times R_{2/1} = 83.333 \\times \\frac{60}{D_1}
            `}
          </MathJax>
        </List>

        <List>
          On sait que{" "}
          <MathJax inline>{`\\( T_1 = 570\\ \\text{tr/min} \\)`}</MathJax>,
          ainsi on obtient l'équation suivante :{" "}
          <MathJax inline>
            {`\\( 570 = 83.333 \\times \\frac{60}{D_1} \\)`}
          </MathJax>
        </List>

        <List>
          Résolution :{" "}
          <MathJax inline>
            {`\\( D_1 = \\frac{83.333 \\times 60}{570} \\approx 8.8 \\)`}
          </MathJax>
        </List>

        <List>
          On arrondit le nombre de dents, ainsi l'engrenage devra posséder{" "}
          <MathJax inline>{`\\( D_1 = 9\\ \\text{dents} \\)`}</MathJax>
        </List>
      </ul>
      <Text spacing="md">
        <br />
        En conclusion, la configuration de notre chaîne de transmission est la
        suivante :
      </Text>
      <ul className="ml-6 list-disc">
        <List>
          <MathJax inline>{`\\( D_1 = 9\\ \\text{dents} \\)`}</MathJax>
        </List>
        <List>
          <MathJax inline>{`\\( D_2 = 60\\ \\text{dents} \\)`}</MathJax>
        </List>
        <List>
          <MathJax inline>{`\\( D_3 = 25\\ \\text{dents} \\)`}</MathJax>
        </List>
      </ul>

      <Title size={3}>Support de la chaîne de transmission</Title>

      <Text>
        Afin de tester dans de bonnes conditions les prototypes de transmission,
        nous devions réaliser un support afin de positionner les engrenages et
        le moteur. Voici la modélisation de ce dernier :
      </Text>

      <Media
        size="md"
        layout="grid"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.support1,
            alt: "Modéliation 3D du support de la chaîne de transmission",
          },
          {
            type: "image",
            src: scorpixTransmi.support2,
            alt: "Modéliation 3D du support de la chaîne de transmission",
          },
        ]}
      />

      <Title size="3">Prototype 1</Title>

      <Text spacing="md">
        Voici le résultat du prototype 1 des engrenage que nous utiliserons dans
        notre chaîne de transmission.
      </Text>

      <Media
        size="sm"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.mode1,
            alt: "Modéliation Sharp3D - Prototype 1",
          },
        ]}
      />

      <Text spacing="sm">
        Cette modélisation semble prometteuse, mais nous devons la tester sur le
        support de la chaîne de la transmission. Voici, le prototype 1 sur ce
        support :
      </Text>

      <Media
        size="md"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.proto1,
            alt: "Prototype 1 - Découpé le 29 février 2024",
          },
        ]}
      />

      <Text>
        Lorsque nous avons mis en route le moteur, la chaîne de transmission a
        été fonctionnelle. A partir, d'un seul mouvement circulaire délivré par
        le moteur, nous avons pu réduire la vitesse de rotation et le distribuer
        sur 6 engrenages disposés en cercle.
      </Text>

      <Title siaz={3}>
        Problème lié au sens de rotation des engrenages de pattes
      </Title>

      <Text spacing="md">
        Lors des réalisé avec le prototype 1 de notre hexapode, nous avons pu
        constater que le déplacement obtenu n'est pas celui souhaité. Nous
        devons donc réaliser une nouvelle chaîne de transmission qui puisse
        répondre à notre besoin.
      </Text>

      <Text spacing="md">
        Voici un schéma illustrant la chaîne de transmission actuellement mis en
        place et mettant en évidence les rotations des engrenages.
      </Text>

      <Media
        size="md"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.schema3,
            alt: "Schéma illustrant le problème de rotation",
          },
        ]}
      />

      <Text spacing="md">
        Nous pouvons bien observer que les 6 engrenages "patte" ont le même sens
        de rotation. Nous avons représenté par une flèche bleue le sens de
        déplacement effectué par chaque patte qui résulte de la rotation de son
        engrenage. Ainsi, on comprend mieux pourquoi l'hexapode effectue des
        tours sur lui-même.
      </Text>

      <Text spacing="md">
        Notre objectif et donc d'inverser le sens de rotation de 3 engrenages
        d'un même coté. Pour cela, nous avons énuméré plusieurs solutions qui
        ont des avantages comme des inconvénients. Gardons en tête, que nous
        souhaitons une solution simple et un hexapode esthétiquement
        équilibré/symétrique.
      </Text>

      <Media
        size="xl"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.schema4,
            alt: "Tableau comparatif des solutions possibles",
          },
        ]}
      />

      <Text spacing="md">
        Après avoir débattu en équipe, nous avons choisi le Solution 1 pour
        plusieurs raisons. Dans un premier temps, l'équilibre et la symétrie de
        cette chaîne de transmission apportera du charme à l'aspect visuel de
        notre hexapode. De plus, la structure générale ne subira pas de
        complexification supplémentaire, car la hauteur du système est d'une
        unité (3 mm).
      </Text>

      <Text spacing="md">
        Concernant l'augmentation de la largeur globale de l'hexapode, nous nous
        sommes projetés sur les éléments supplémentaires que nous allons
        ajouter. En effet, nous avons besoin d'espace entre les deux pattes
        avant afin de pouvoir positionner une mandibule. De plus, cette
        augmentation de la largeur générera un espace plus grand entre les
        mécaniques de patte ce qui nous permettra de positionner la batterie en
        dessous comme prévu initialement. Par la même occasion, cela aura pour
        avantage de baisser le centre de gravité de l'hexapode.
      </Text>

      <Text spacing="md">
        Nous allons désormais réaliser le prototype 2 de la transmission avec
        cette nouvelle solution afin de la tester pour pouvoir ensuite
        l'injecter dans l'hexapode.
      </Text>

      <Title size={"3"}>Prototype 2</Title>

      <Text>
        Voici le prototype 2 de notre chaîne de transmission. Grâce à elle, nous
        allons pouvoir distribuer les bons moments aux 6 mécaniques de pattes.
        En effet, sur le prototype 1, les 6 mécaniques tournaient dans le même
        sens. Nous devions changer le sens de rotation de 3 mécaniques d'un même
        coté. Pour cela, nous avons opté pour la solution 1.
      </Text>

      <Media
        size="xl"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.mode1,
            alt: "Modéliation Sharp3D - Prototype 1",
          },
        ]}
      />

      <Text spacing="md">
        Cette modélisation nous montre que cette nouvelle transmission va avoir
        un impact significatif sur la taille de l'hexapode, mais nous saurons
        tirer avantage de cet effet secondaire.
      </Text>

      <Text spacing="md">
        Par exemple, nous avons ajouté une pièce sur le support de la
        transmission afin de vérifier si l'on pourra placer le moteur sous
        celui-ci. Le moteur doit trouver sa place entre les 2 nouveaux axes
        positionnés et les 2 axes des grands engrenages.
      </Text>

      <Text spacing="xl">
        Modification de la chaîne de transmission :{" "}
        <MathJax inline>{`\\( D_1 = 9\\ \\text{dents} \\)`}</MathJax>,{" "}
        <MathJax inline>{`\\( D_2 = 67\\ \\text{dents} \\)`}</MathJax>,{" "}
        <MathJax inline>{`\\( D_3 = 25\\ \\text{dents} \\)`}</MathJax>
      </Text>

      <Media
        size="xl"
        mediaItems={[
          {
            type: "image",
            src: scorpixTransmi.proto1,
            alt: "Prototype 2 - Découpé le 23 mars 2024",
          },
        ]}
      />

      <Text spacing="md">
        Cette nouvelle a correctement fonctionné lorsque nous l'avons branché et
        délivre bien la bonne rotation aux engrenages d'extrémités. De plus, le
        moteur se glisse bien entre les 4 axes.
      </Text>

      <Text spacing="xl">
        Nous allons choisir cette solution pour réaliser notre prototype 2
        d'hexapode général.
      </Text>
    </div>
  );
}
