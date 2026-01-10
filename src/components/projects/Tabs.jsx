import { NavLink, useLocation } from "react-router-dom";

export default function Tabs({ tabs, basePath = "" }) {
  const location = useLocation();

  return (
    <div>
      <div className="flex gap-x-1 overflow-x-auto pb-2 md:gap-x-4 md:pb-0">
        {tabs.map(({ label, path }) => {
          const tabPath = path ? `${basePath}/${path}` : basePath;

          const isActive = location.pathname === tabPath;

          return (
            <NavLink
              key={path}
              to={tabPath}
              className={`md:text-md px-3 py-1 text-sm font-medium whitespace-nowrap md:px-4 md:py-2 ${
                isActive
                  ? "border-primary text-primary border-b-2 font-semibold"
                  : "hover:text-accent hover:border-accent text-gray-500 hover:border-b-2"
              }`}
            >
              {label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
