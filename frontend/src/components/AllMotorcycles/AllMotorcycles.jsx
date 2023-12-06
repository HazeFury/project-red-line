import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import BikeCard from "../Home/BikeCard";
import styles from "./AllMotorcycles.module.css";

export default function AllMotorcycles() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/bikes")
      .then((res) => {
        setBikes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3310/api/bikes")
  //     .then((res) => res.json())
  //     .then((data) => setBikes(data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <section className={styles.preview_bike_component}>
      <div className={styles.preview_bike_container}>
        {bikes.slice(0, 12).map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
      <Button color="secondary" variant="contained" sx={{ my: 2 }}>
        Voir plus
      </Button>
    </section>
  );
}
