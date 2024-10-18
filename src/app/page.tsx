"use client";
import { Header, Hero, About, Contacts, Footer } from "@/components";

import styles from "./page.module.scss";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (function () {
      let delay = false;

      document.addEventListener("wheel", { passive: false }, function (event) {
        event.preventDefault();
        if (delay) return;

        delay = true;
        setTimeout(function () {
          delay = false;
        }, 200);

        // const wd = event.deltaY || -event.originalEvent.detail;
        const wd = event.deltaY || -event.deltaMode;

        const a = document.getElementsByTagName("section");
        if (wd < 0) {
          for (let i = 0; i < a.length; i++) {
            const t = a[i].getClientRects()[0].top;
            if (t >= 40) break;
          }
        } else {
          let i = 0;
          for (i = a.length - 1; i >= 0; i--) {
            const t = a[i].getClientRects()[0].top;
            if (t < -20) break;
          }
          if (i >= 0 && i < a.length) {
            document.body.animate({
              scrollTop: a[i].offsetTop,
            });
          }
        }
      });
    })();
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}
