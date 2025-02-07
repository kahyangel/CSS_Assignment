"use client";
import styles from './page.module.css'

export default function TravelPage() {
    return (
      <div className={styles.container}>
        {/* Tagline Section */}
        <div className={styles.tagline}>
          Your Perfect Travel Guide!
        </div>
  
        {/* Top Section */}
        <div className={styles.topSection}>
          {/* Left Section: World's Best Airports */}
          <div className={styles.leftSection}>
            <h2 className={styles.header}>World's Best Airports</h2>
            <a href="/airports" className={styles.link}>Discover the world's best airports</a>
          </div>
  
          {/* Right Section: World Clock */}
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
  