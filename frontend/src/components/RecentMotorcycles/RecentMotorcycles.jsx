import React from "react";

function RecentMotorcycles() {
  const mostRecentMotorcycles = [
    {
      make: "constructeurTruc0",
      model: "modelMachin0",
      year: "2000",
    },
    {
      make: "constructeurTruc1",
      model: "modelMachin1",
      year: "2001",
    },
    {
      make: "constructeurTruc2",
      model: "modelMachin2",
      year: "2002",
    },
  ];

  return (
    <div>
      <h2>Les dernières moto sorties !</h2>
      <ul>
        {mostRecentMotorcycles.map((motorcycle) => (
          <li key={motorcycle.model}>
            {motorcycle.make} {motorcycle.model} ({motorcycle.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentMotorcycles;
