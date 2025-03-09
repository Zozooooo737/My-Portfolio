import React from "react";

const Quote = ({ title, children }) => {
  return (
    <div className="bg-background border-primary rounded-lg border-2 border-l-8 p-6 shadow-lg">
      {title && (
        <h3 className="text-primary mb-2 text-lg font-semibold">{title}</h3>
      )}
      <blockquote className="text-xl text-gray-200 italic">
        "{children}"
      </blockquote>
    </div>
  );
};

export default Quote;
