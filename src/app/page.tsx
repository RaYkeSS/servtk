"use client";
import { Header, Hero, About, Contacts, Footer } from "@/components";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <Header />
        <Hero />
        <About />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
