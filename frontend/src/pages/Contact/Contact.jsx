import ContactForm from "../../components/ContactForm/ContactForm";
// import styles from "./Contact.module.css";
import globalStyles from "../GlobalPageStyle.module.css";

export default function Contact() {
  return (
    <div>
      <main className={globalStyles.main_container}>
        <ContactForm />
      </main>
    </div>
  );
}
