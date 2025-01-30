import React from "react";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4 text-center">
      <div className="font-title shadowTitlePrimary text-8xl uppercase">
        Bienvenue
      </div>
      <p className="my-3 text-2xl">
        Passionné d'ingénierie, j'aime explorer de nouveaux horizons à travers
        mes projets. Entre mécanique, électronique, mécatronique et
        programmation, chaque défi est une occasion d'innover, de résoudre des
        problèmes complexes et d'affiner mon expertise. <br />
        <br />
        Curieux de voir ce que ça donne ? Plongez dans mes réalisations !
      </p>
      <button className="text-background bg-primary hover:bg-accent hover:shadow-box mt-7 cursor-pointer rounded-md px-6 py-4 text-2xl font-bold uppercase transition">
        Découvrir mes projets
      </button>
    </div>
  );
}
