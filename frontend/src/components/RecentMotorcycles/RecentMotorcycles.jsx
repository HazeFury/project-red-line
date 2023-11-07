import React from "react";
import { useMotorcyclesContext } from "../../contexts/motorcyclesContext";
import styles from "./RecentMotorcycles.module.css";

function RecentMotorcycles() {
  const { motorcycles, loading, error } = useMotorcyclesContext();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error ! {error}</p>;
  }

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
      <h2 className={styles.section_title}>Les meilleures ventes du mois</h2>
      <ul>
        {mostRecentMotorcycles.map((motorcycle, index) => (
          <li className={styles.sales_list} key={motorcycle.model}>
            {index + 1} - {motorcycle.make} {motorcycle.model} (
            {motorcycle.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentMotorcycles;
