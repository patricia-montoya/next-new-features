import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={inter.className}>
        Find in-depth information about Next.js features and API.
      </p>
    </main>
  );
}
