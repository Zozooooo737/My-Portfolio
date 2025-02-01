import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function NavButton({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "rounded-sm px-8 py-2 text-xl font-semibold transition-all duration-300",
          isActive
            ? "text-background bg-primary"
            : "bg-background text-text hover:bg-accent hover:text-background hover:shadow-box",
        )
      }
    >
      {children}
    </NavLink>
  );
}
