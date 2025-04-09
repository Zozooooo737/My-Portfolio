import React from "react";

export default function Title({ children, size = 1 }) {
  if (size == 2) {
    return (
      <div className="text-lg md:text-xl">
        <p className="border-primary pt-2 pb-1 pl-1 md:pt-3 md:pb-2 md:pl-2">
          {children}
        </p>
      </div>
    );
  }

  return (
    <div className="text-xl md:text-2xl">
      <p className="border-primary text-primary pt-4 pb-1 pl-1 md:pt-6 md:pb-2 md:pl-2">
        {children}
      </p>
      <hr className="bg-primary mb-2 h-0.5 border-0 md:mb-3" />
    </div>
  );
}
