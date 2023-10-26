import React from "react";
import { Button } from "@mui/material";

import styles from "./PreviewAbout.module.css";

export default function PreviewAbout() {
  return (
    <section className={styles.about_text_container}>
      <h3>À propos de nous</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        tenetur velit non totam dolorem. Dolorem velit maiores distinctio
        perspiciatis? Provident repellat, reiciendis ex fuga doloribus quod
        pariatur, voluptatum omnis minima, adipisci itaque molestiae amet
        laboriosam minus maxime sint distinctio ipsam ea sequi. Eaque dolores
        dolore minima soluta suscipit dolor itaque deserunt totam quod ullam
        voluptatibus hic asperiores nam, qui rem. Excepturi quis, labore
        praesentium accusantium facilis dicta, cumque ut deserunt obcaecati
        optio ea, debitis saepe sapiente enim minus nostrum nihil esse itaque
        vitae distinctio qui? Dolores eum quae consequuntur ut quisquam
        provident quam culpa tenetur, quaerat, laboriosam ex sint, aut numquam
        maiores rem tempora vitae deleniti facere. Repellendus praesentium ullam
        numquam explicabo. Minus libero sequi perferendis perspiciatis
        voluptatem, aut necessitatibus.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit
        aliquam aperiam dolor iste commodi a nemo, beatae magni eaque amet
        mollitia reprehenderit quae reiciendis doloribus nobis nisi, sunt, ipsum
        placeat quam omnis debitis voluptatum voluptate id? Itaque eligendi
        tempore veritatis quos sint aut dolor excepturi accusantium quisquam
        alias! Officia quibusdam in itaque ipsam, aspernatur sit laboriosam nisi
        magni necessitatibus esse corrupti saepe odit dolor minima impedit quas
        delectus? Repudiandae.
      </p>
      <Button color="secondary" variant="contained" sx={{ my: 8 }}>
        Voir plus
      </Button>
    </section>
  );
}
