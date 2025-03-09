import React from "react";

export default function Title({ children, size = 1 }) {
  if (size == 2) {
    return (
      <div className="text-xl">
        <p className="border-primary pt-3 pb-2 pl-2">{children}</p>
      </div>
    );
  }

  return (
    <div className="text-2xl">
      <p className="border-primary pt-6 pb-2 pl-2">{children}</p>
      <hr className="bg-primary mb-3 h-0.5 border-0" />
    </div>
  );
}
