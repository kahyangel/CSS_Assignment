"use client";

import React from "react";
import styles from "./page.module.css"; // Import your CSS module

export default function Page() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.branding}>
          WORLD 🗺️⁀જ✈︎<br /> 🛫 TRAVELLER
        </div>
        <div className={styles.tagline}>Your Perfect Travel Guide!</div>
      </div>

      {/* Main Content */}
      <div className={styles.topSection}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2 className={styles.header}>World's Best Airports</h2>
          <a href="/airports" className={styles.link}>Discover the world's best airports</a>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h2 className={styles.header}>World Clock</h2>
          <a href="/timezone" className={styles.link}>Prepare yourself for jetlag</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <h2 className={styles.header}>Compare Prices</h2>
        <a href="/pricing" className={styles.link}>Find yourself the best deals</a>
      </div>
    </div>
  );
}
