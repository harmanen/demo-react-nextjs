import Form from "./components/Customer/Form";
import styles from "./styles/rootPage.module.css";

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
}

export const metadata = {
  title: "Ab Yritys Oy",
};
