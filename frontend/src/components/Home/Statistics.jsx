import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Statistics.module.css";

export default function PreviewBikes() {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/bikes/statistics")
      .then((res) => {
        console.log(res.data);
        return setStatistics(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className={styles.statistics}>
      <h3 className={styles.preview_bike_title}>Des chiffres en vrac</h3>
      <table>
        <tbody>
          <tr>
            <th>Nombre total de motos</th>
            <td>{statistics.numberBikes}</td>
          </tr>
          <tr>
            <th>Somme totale de kilomètres</th>
            <td>{statistics.sumAllKilometers}</td>
          </tr>
          <tr>
            <th>Moyenne des kilomètres parcourus</th>
            <td>{statistics.averageKilometers}</td>
          </tr>
          <tr>
            <th>Somme totale des prix</th>
            <td>{statistics.sumAllPrices}</td>
          </tr>
          <tr>
            <th>Moyenne des prix</th>
            <td>{statistics.averagePrices}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
