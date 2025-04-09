import React from "react";

export default function List({ children }) {
  return (
    <li className="marker:text-primary mt-1 mr-4 ml-4 list-disc text-sm md:mt-2 md:mr-8 md:ml-8 md:text-base">
      {children}
    </li>
  );
}
