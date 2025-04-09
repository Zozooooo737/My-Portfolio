import React from "react";

export default function Text({ children }) {
  return (
    <p className="px-1 text-justify text-sm md:pl-2 md:text-base">{children}</p>
  );
}
