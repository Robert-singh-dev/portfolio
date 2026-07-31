import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} id="home">
      <div className={styles.introGrid}>
        <h1 className={styles.title}>
          <span className={styles.thin}>Web</span> <span className={styles.bold}>Developer</span>
        </h1>
        <p className={styles.paragraph}>
          I specialize in building dynamic, animated web experiences that bring
          interfaces to life, ensuring both aesthetic appeal and intuitive functionality.
        </p>
      </div>
      <hr className={styles.divider} />
    </section>
  );
}
