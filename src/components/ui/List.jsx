import React from "react";

export default function List({ children }) {
  return (
    <li className="marker:text-primary mt-2 mr-8 ml-8 list-disc">{children}</li>
  );
}
