import React from "react";
import { Button } from "@mui/material";
import BikeCard from "../Home/BikeCard";
import styles from "./AllMotorcycles.module.css";
import Data from "../../DataBase/db.json";

export default function AllMotorcycles() {
  const bikes = Data;

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
