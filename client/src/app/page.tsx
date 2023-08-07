import Image from "next/image";
import styles from "./page.module.css";
import Annonce from "./components/front/Annonce.tsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Annonce />
    </div>
  );
}
