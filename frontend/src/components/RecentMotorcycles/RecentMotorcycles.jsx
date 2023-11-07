import React from "react";
import { useMotorcyclesContext } from "../../contexts/motorcyclesContext";

function RecentMotorcycles() {
  const { motorcycles } = useMotorcyclesContext();

  // la méthode sort fonctionne de la manière suivante :
  // je dois lui expliquer comment comparer deux éléments dans
  // un tableau donné
  // Si la fonction callback return false : motorcycleA doit apparaitre avant motorcycleA
  // Sinon, si la fonction callback return true : motorcycleA doit apparaitre après motorcycleA
  motorcycles.sort(
    // la moto A apparait après la moto B si l'année de A est moins récente que l'année de B
    (motorcycleA, motorcycleB) => motorcycleA.year - motorcycleB.year < 0
  );

  // Et on ne garde que les 5 premiers résultats
  const mostRecentMotorcycles = motorcycles.slice(0, 5);

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
