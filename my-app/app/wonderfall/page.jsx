/*
Wonderfall at Changi Page (Kwoh Si Jia)  
------------------------------------------------------------------------------------------------------------  
1) Designed a dedicated informational page about the Wonderfall attraction at Changi Airport’s Terminal 2, which is     linked from the changi page's learn more more button, providing users with engaging visuals and descriptive content.  

2) Implemented a fixed back button at the top right corner, allowing users to return to the `/changi` page seamlessly.  
   - Used Next.js useRouter to handle client-side navigation (`router.push("/changi")`).  
   - Integrated FaArrowLeft from `react-icons` to enhance the button’s UI with a recognizable back arrow.  

3) Created a two-column layout:  
   - Left Section: Displays a high-quality image of the Wonderfall (`wonderfall2.jpg`).  
   - Right Section: Provides textual information about the attraction, formatted for readability. 
------------------------------------------------------------------------------------------------------------ 
 */
"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  const router = useRouter();

  const handleReturnClick = () => {
    router.push("/changi");
  };

  return (
    <div className={styles.container}>
      {/* Back Button - Moves with Scroll */}
      <button className={styles.returnButton} onClick={handleReturnClick}>
        <FaArrowLeft size={20} />
        <span>Back</span>
      </button>

      {/* Left Section: Image */}
      <div className={styles.leftSection}>
        <img
          src="/images/wonderfall2.jpg"
          alt="Wonderfall at Changi"
          className={styles.image}
        />
      </div>

      {/* Right Section: Factual Statements */}
      <div className={styles.rightSection}>
        <h1 className={styles.header}>Wonderfall at Changi</h1>
        <p className={styles.text}>
          Behold an iconic landmark built with nature-inspired design and
          digital wizardry in the departure hall of the new Terminal 2. This
          digital waterfall cascades among lush green walls to create a
          mesmerizing, calming spectacle.
        </p>
        <p></p>
        <p className={styles.text}>
          Within The Wonderfall lies a melodic surprise – Rhythms of Nature, an
          abstract ballet of human design and Mother Nature's harmonious dance.
          Guided by an original composition from neo-classical pianist-composer,
          Jean-Michel Blais, experience a symphonic masterpiece where design and
          nature await.
        </p>
      </div>
    </div>
  );
}