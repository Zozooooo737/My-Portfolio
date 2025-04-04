import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function NavButton({
  to,
  children,
  className = "",
  activeClass = "",
  onClick,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          // Styles de base
          "text-text relative px-4 py-3 text-xl font-semibold transition-all duration-300",

          // Pseudo-élément pour le soulignement
          "after:absolute after:bottom-1 after:left-1/2 after:h-1 after:w-0",
          "after:bg-primary after:origin-center after:rounded-full",
          "after:transition-all after:duration-300 after:ease-out",

          // Effet hover - s'étend des deux côtés
          "hover:after:bg-accent hover:after:left-4 hover:after:w-[calc(100%-2rem)]",

          // État actif
          isActive
            ? clsx(
                "after:bg-primary hover:after:bg-primary font-medium after:left-4 after:w-[calc(100%-2rem)]",
                activeClass,
              )
            : "hover:text-text/90",

          // Classes personnalisées
          className,
        )
      }
    >
      {children}
    </NavLink>
  );
}
