import React from "react";

const Quote = ({ title, children }) => {
  return (
    <div className="bg-background border-primary rounded-lg border-2 border-l-8 p-3 shadow-lg md:p-6">
      {title && (
        <h3 className="text-primary mb-1 text-base font-semibold md:mb-2 md:text-lg">
          {title}
        </h3>
      )}
      <blockquote className="text-sm text-gray-200 italic md:text-xl">
        "{children}"
      </blockquote>
    </div>
  );
};

export default Quote;
