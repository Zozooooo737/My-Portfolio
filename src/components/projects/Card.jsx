import Tag from "@/components/projects/Tag";
import { Link } from "react-router-dom";

export default function Card({
  name,
  link,
  image,
  imageAlt,
  description,
  skills = [],
}) {
  return (
    <div className="h-full w-full px-6 pb-22 sm:px-10 sm:pt-10 sm:pb-20 md:px-10 md:pt-20 md:pb-20 lg:px-0 lg:py-0">
      <Link to={`/projects/${link}`}>
        <div className="bg-primary group border-primary md:hover:border-accent relative h-full w-full cursor-pointer content-end overflow-hidden rounded-2xl border-4 p-6 transition-transform duration-200 md:hover:scale-110 lg:h-88 lg:w-130">
          {/* Image */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full rounded-2xl object-cover brightness-100 grayscale-0 transition-all duration-500 ease-in-out md:scale-150 md:brightness-20 md:grayscale-100 md:group-hover:scale-100 md:group-hover:brightness-100 md:group-hover:grayscale-0"
            />
          </div>

          {/* Dégradé MOBILE ONLY */}
          <div className="absolute inset-0 z-10 md:hidden">
            <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* Dégradé DESKTOP (hover uniquement) */}
          <div className="absolute inset-0 z-10 hidden opacity-0 transition-opacity duration-500 md:block md:group-hover:opacity-100">
            <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-black/60 to-transparent"></div>
          </div>

          {/* Contenu */}
          <div className="relative z-20 md:transition-opacity md:duration-300 md:group-hover:opacity-0">
            <h2 className="font-title mb-2 text-4xl">{name}</h2>
            <p className="text-xl">{description}</p>
          </div>

          {/* Tags (desktop only hover) */}
          <div className="absolute top-0 right-0 mt-2 mr-2 hidden flex-col items-end gap-2 md:flex">
            {skills.slice(0, 5).map((skill, index) => (
              <div
                key={skill.id}
                className="z-20 translate-x-full opacity-0 grayscale-100 transition-all duration-500 ease-in-out md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-hover:grayscale-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Tag
                  name={skill.name}
                  logo={skill.logo}
                  color={skill.color}
                  isTextMode={false}
                />
              </div>
            ))}
            {skills.length > 5 && (
              <div
                className="z-20 translate-x-full opacity-0 grayscale-100 transition-all duration-500 ease-in-out md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-hover:grayscale-0"
                style={{ transitionDelay: "500ms" }}
              >
                <Tag name={`+${skills.length - 5}`} isTextMode />
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
