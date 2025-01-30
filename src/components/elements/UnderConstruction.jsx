import React from "react";

export default function UnderConstruction() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="bg-accent rounded-2xl p-6">
        <h1 className="text-background text-4xl font-bold">
          🚧 Page en construction 🚧
        </h1>
        <p className="text-background mt-4 text-lg">
          Cette page est en cours de développement. Revenez bientôt !
        </p>
      </div>
    </div>
  );
}
