export default function ProjectCard({ name, image, imageAlt, description }) {
  return (
    <div className="bg-primary group relative h-86 w-130 cursor-pointer content-end items-end overflow-hidden rounded-2xl p-6 transition-transform duration-200 hover:scale-105">
      <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full scale-150 transform rounded-2xl object-cover brightness-20 grayscale-100 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:brightness-100 group-hover:grayscale-0"
        />
      </div>
      <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="font-title mb-2 text-4xl">{name}</h2>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
