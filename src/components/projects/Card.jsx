import Tag from "@/components/projects/Tag";
import { Link } from "react-router-dom";

export default function Card({
  name,
  link,
  image,
  imageAlt,
  description,
  tags = [],
}) {
  return (
    <Link to={`/projects/${link}`}>
      <div className="bg-primary group border-primary hover:border-accent relative h-88 w-130 cursor-pointer content-end items-end overflow-hidden rounded-2xl border-4 p-6 transition-transform duration-200 hover:scale-110">
        {/* Image de fond */}
        <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full scale-150 transform rounded-2xl object-cover brightness-20 grayscale-100 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:brightness-100 group-hover:grayscale-0"
          />
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
          <h2 className="font-title mb-2 text-4xl">{name}</h2>
          <p className="text-xl">{description}</p>
        </div>

        {/* Tags en haut à droite */}
        <div className="absolute top-0 right-0 mt-2 mr-2 flex flex-col items-end gap-2">
          {tags.slice(0, 5).map((id, index) => (
            <div
              key={id}
              className="z-20 translate-x-full justify-end opacity-0 grayscale-100 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:grayscale-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Tag id={id} isTextMode={false} />
            </div>
          ))}
          {tags.length > 5 && (
            <div
              className="z-20 translate-x-full justify-end opacity-0 grayscale-100 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:grayscale-0"
              style={{ transitionDelay: "500ms" }}
            >
              <Tag id={0} number={tags.length - 5} />
            </div>
          )}
        </div>

        {/* Ombre dégradée qui apparaît au survol */}
        <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
      </div>
    </Link>
  );
}
