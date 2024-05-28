import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Berat BAYRAM</h1>
        <h2>Frontend Engineer</h2>
      </div>
      <Image
        src="/profile.png"
        width={400}
        height={400}
        alt="Picture of the author"
        className={styles.profile}
      />
    </main>
  );
}
