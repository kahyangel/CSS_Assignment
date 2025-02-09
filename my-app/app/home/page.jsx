/*
Homepage (Kwoh Si Jia)
------------------------------------------------------------
1) Designed and implemented a structured three-section layout to organize the main features of the website

2) Implemented three main content sections:  
   - "World’s Best Airports" → Allows users to explore top-rated airports.  
   - "World Clock" → Provides time zone information to help travelers manage jet lag.  
   - "Compare Prices" → Directs users to search for the best flight and travel deals.

3) All catch phrases of each section redirects user to the specific page (e.g. Discover the world's best airports -> airports page)

4) Implemented link hover effects to improve user interaction and accessibility:  
   - On hover, the link color changes to #3b94f4 (blue).  
   - An underline effect is applied to indicate interactivity.  
------------------------------------------------------------
*/
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
