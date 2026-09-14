import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import Media from "@/components/ui/Media";
import NextTab from "@/components/projects/NextTab";

import { scorpixPaw } from "@/assets/ScorpixAssets";

export default function ScorpixPawTab() {
  return (
    <div className="px-2 md:px-0">
      <Text>
        La patte constitue l’élément de notre hexapode en contact direct avec le
        sol. Elle a pour rôle de transmettre le mouvement généré par la
        mécanique, permettant ainsi de déplacer l’hexapode. Sa conception doit
        garantir à la fois flexibilité et solidité pour supporter le poids de
        l’hexapode, tout en assurant une démarche stable et efficace sur
        différents types de surfaces.
      </Text>

      <Title size="2">
        Objectif : Réaliser une patte qui doit pouvoir supporter le poids de
        l’hexapode et permettre le déplacement de ce dernier.
      </Title>

      <Title size="3">Prototype 1</Title>

      <Text spacing="md">
        Une patte a déjà été réalisée dans la partie Mécanique de Patte afin de
        se rendre compte de son effet. La patte est simple et n’est pas
        techniquement complexe.
      </Text>

      <Media
        size="xs"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto1,
            alt: "Patte - Prototype 1",
          },
        ]}
      />

      <Text spacing="lg">
        Cette patte n’est pas très complexe, mais est suffisante pour la
        réalisation de notre hexapode 1.
      </Text>

      <Title size="3">Prototype 2</Title>

      <Text spacing="lg">
        Lors de l’imagination du prototype 2 de notre hexapode, nous avons pensé
        à ajouter une pièce à chaque patte. Cette pièce apporte une amélioration
        : permettre à l’hexapode d’être plus haut sur patte et d’améliorer son
        adhérence sur un certain type de sole.
      </Text>

      <Media
        size="md"
        layout="grid"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.mode2_1,
            alt: "Modélisation Sharp3D - Prototype 2 (Normal)",
          },
          {
            type: "image",
            src: scorpixPaw.mode2_2,
            alt: "Modélisation Sharp3D - Prototype 2 (Extended)",
          },
        ]}
      />

      <Text spacing="lg">
        Le fonctionnement est très simple et amovible. Le pied est pris en étaux
        entre les deux pattes et fixé par un axe pivot. Une autre pièce en forme
        de bague vient aussi compléter ce système afin de bloquer le pied.
        Lorsque la bague est relevée, nous pouvons tourner le pied et changer sa
        longueur et sa forme.
      </Text>

      <Media
        size="md"
        layout="grid"
        mediaItems={[
          {
            type: "image",
            src: scorpixPaw.proto2_1,
            alt: "Prototype 2 (Normal) - Découpé le 9 février 2024 ",
          },
          {
            type: "image",
            src: scorpixPaw.proto2_2,
            alt: "Prototype 2 (Extended) - Découpé le 9 février 2024 ",
          },
          {
            type: "image",
            src: scorpixPaw.proto2_3,
            alt: "Prototype 2 (Lock) - Découpé le 9 février 2024 ",
          },
        ]}
      />

      <Text spacing="md">
        <br />
        Un côté est simple et arrondi et l’autre est plus long et crochus. Le
        coté crochus pourra permettre d’avoir plus d’adhérence sur certaines
        surfaces comme la moquette.
      </Text>

      <Text spacing="md">
        Avec ce simple système, nous pouvons imaginer réaliser beaucoup de défis
        bonus comme évoluer sur un plan incliné, ou sur des surfaces moins
        adhérentes.
      </Text>

      <Text spacing="xl">
        Cette nouvelle patte sera utilisée pour le prototype 2 de l’hexapode.
      </Text>

      <NextTab to="/projects/scorpix/structure" label="Structure" />
    </div>
  );
}
