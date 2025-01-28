import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-15 flex items-center justify-between bg-green-200">
      <div className="bg-cyan-600">Logo</div>
      <div className="bg-red-600">
        <nav className="text-text ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active bg-amber-300" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "active bg-amber-300" : ""
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${isActive ? "active bg-amber-300" : ""} text-xl`
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active bg-amber-300" : ""
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active bg-amber-300" : ""
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
