import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.contact_box}>
      <form>
        <label htmlFor="first-name">Prénom</label>
        <input type="text" name="first-name" placeholder="John" />

        <label htmlFor="last-name">Nom</label>
        <input type="text" name="last-name" placeholder="Doe" />

        <label htmlFor="email">Adresse Mail</label>
        <input type="email" name="email" placeholder="johndoe@exemple.com" />

        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          placeholder="Type your message here"
        />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
