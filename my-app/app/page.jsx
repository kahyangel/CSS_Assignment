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
        <h1>Your Perfect Travel Guide!</h1>
      </div>

      {/* Main Content */}
      <div className={styles.tagline}>Explore the World with Ease</div>
      <div className={styles.topSection}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2 className={styles.header}>World's Best Airports</h2>
          <p>Discover the world's best airports</p>
          <a href="/airports" className={styles.link}>
            Learn More
          </a>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h2 className={styles.header}>World Clock</h2>
          <p>Prepare yourself for jetlag</p>
          <a href="/timezone" className={styles.link}>
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <h2 className={styles.header}>Compare Prices</h2>
        <p>Find yourself the best deals</p>
        <a href="/pricing" className={styles.link}>
          Learn More
        </a>
      </div>
    </div>
  );
}
