import { Link } from "react-router-dom";

export default function NextTab({ to, label }) {
  return (
    <div className="mt-10 mb-10 flex justify-center sm:mb-4 sm:justify-end">
      <Link
        to={to}
        className="bg-primary text-background hover:bg-accent inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm transition active:scale-95 sm:text-base"
      >
        <span>Lire la section suivante :</span>
        <span className="font-semibold">{label}</span>
        <span className="text-lg leading-none font-semibold">→</span>
      </Link>
    </div>
  );
}
