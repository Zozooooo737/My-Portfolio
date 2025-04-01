import { useState } from "react";
import { documents } from "@/assets/Assets";

const CVViewer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cvUrl = documents.cv;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Enzo_Bottura_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="border-primary bg-background mb-20 rounded-xl border-2 p-8 text-center shadow-[0_0_20px_5px_rgba(119,131,238,0.3)]">
      <h2 className="text-text mb-6 text-3xl font-bold">Mon CV</h2>

      {/* Aperçu du CV uniquement sur écrans moyens et plus */}
      <div className="mb-4 hidden h-[600px] w-full overflow-hidden rounded-xl shadow-md md:block">
        <iframe
          src={cvUrl}
          title="CV - Enzo BOTTURA"
          className="h-full w-full border-none"
          onLoad={() => setIsLoading(false)}
        ></iframe>
        {isLoading && (
          <p className="text-text mt-4 text-center">Chargement du CV...</p>
        )}
      </div>

      {/* Le bouton de téléchargement est visible tout le temps */}
      <button
        onClick={handleDownload}
        className="bg-primary hover:bg-secondary rounded-xl px-4 py-2 font-semibold text-white shadow-md transition-all duration-300"
      >
        Télécharger mon CV
      </button>
    </section>
  );
};

export default CVViewer;
