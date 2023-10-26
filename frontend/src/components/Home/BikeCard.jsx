import React from "react";
import PropTypes from "prop-types";
import styles from "./BikeCard.module.css";

export default function BikeCard({ bike }) {
  return (
    <figure className={styles.card_container}>
      <div className={styles.image_box}>
        <img className={styles.bike_image} src={bike.image} alt={bike.model} />
      </div>
      <p className={styles.bike_brand}>{bike.brand}</p>
      <p className={styles.bike_model}>{bike.model}</p>
    </figure>
  );
}

BikeCard.propTypes = {
  bike: PropTypes.shape({
    image: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
};
