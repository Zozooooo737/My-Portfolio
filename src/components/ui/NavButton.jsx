import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function NavButton({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "text-text rounded-sm px-4 py-2 text-xl font-semibold underline decoration-4 underline-offset-8 transition-all duration-300",
          isActive
            ? "decoration-primary"
            : "hover:decoration-accent decoration-background",
        )
      }
    >
      {children}
    </NavLink>
  );
}
