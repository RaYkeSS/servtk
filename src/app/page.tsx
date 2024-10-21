"use client";
import {
  Header,
  Hero,
  About,
  Services,
  Stages,
  Benefits,
  Contacts,
  Footer,
} from "@/components";

import styles from "./page.module.scss";
import "@/scss/globals.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Stages />
        <Benefits />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
