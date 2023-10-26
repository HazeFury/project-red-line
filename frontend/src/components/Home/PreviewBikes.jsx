import React from "react";
import { Button } from "@mui/material";
import BikeCard from "./BikeCard";
import styles from "./PreviewBikes.module.css";
import Data from "../../DataBase/db.json";

export default function PreviewBikes() {
  const bikes = Data;

  return (
    <section className={styles.preview_bike_component}>
      <h1 className={styles.preview_bike_title}>Les motos à la une</h1>
      <div className={styles.preview_bike_container}>
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
      <Button color="secondary" variant="contained" sx={{ my: 2 }}>
        Voir plus
      </Button>
    </section>
  );
}
