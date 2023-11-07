import React from "react";
import { useMotorcyclesContext } from "../../contexts/motorcyclesContext";

function RecentMotorcycles() {
  const { motorcycles } = useMotorcyclesContext();

  return (
    <div>
      <h2>Les dernières moto sorties !</h2>
      <ul>
        {motorcycles.map((motorcycle) => (
          <li key={motorcycle.model}>
            {motorcycle.make} {motorcycle.model} ({motorcycle.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentMotorcycles;
