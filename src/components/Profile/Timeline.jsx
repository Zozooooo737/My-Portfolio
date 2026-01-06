import React from "react";
import timelineData from "../../data/TimelineData";

const Timeline = () => {
  return (
    <div className="relative mx-auto w-full max-w-4xl space-y-6 py-18">
      {/* Ligne Centrale */}
      <div className="from-primary to-secondary absolute top-0 left-1/2 hidden h-full w-[3px] -translate-x-1/2 transform bg-gradient-to-b shadow-[0_0_10px_var(--color-primary)] md:block"></div>

      {/* Éléments de la Timeline */}
      {timelineData
        .slice()
        .reverse()
        .map((event, index) => (
          <div
            key={index}
            className={`group relative flex h-full w-full flex-col items-center md:flex-row ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {/* Date */}
            <div
              className={`mb-2 w-full text-center md:absolute md:top-1/2 md:w-1/2 md:-translate-y-1/2 md:transform md:text-left ${
                index % 2 === 0
                  ? "md:left-0 md:pr-10 md:text-right"
                  : "md:right-0 md:pl-10 md:text-left"
              }`}
            >
              <span className="text-text/80 bg-background/80 border-primary group-hover:shadow-primary inline-block rounded-lg border px-4 py-2 text-lg font-semibold shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                {event.date}
              </span>
            </div>

            {/* Point de connexion */}
            <div className="bg-primary absolute top-1/2 left-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full transition-all duration-300 group-hover:scale-110 md:block"></div>

            {/* Carte événement */}
            <div
              className={`relative mt-4 w-full md:mt-0 md:w-1/2 ${
                index % 2 === 0 ? "pl-0 md:pl-10" : "pr-0 md:pr-10"
              }`}
            >
              <div className="border-primary bg-opacity-10 text-text group-hover:bg-opacity-20 group-hover:shadow-primary relative rounded-xl border p-6 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-md">
                <h3 className="text-accent mb-2 text-xl font-semibold">
                  {event.title}
                </h3>
                <p className="text-text/80 mb-4 text-base">
                  {event.description}
                </p>
                {/* Bouton "En savoir plus" */}
                {event.link && (
                  <a
                    href={event.link}
                    className="text-accent hover:text-accent/80 inline-flex items-center text-base font-medium underline"
                  >
                    En savoir plus
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Timeline;
