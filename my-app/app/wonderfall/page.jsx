"use client";

import React from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation'; // Import useRouter hook from Next.js
import { FaArrowLeft } from "react-icons/fa"; // Import the return arrow icon

export default function WonderfallPage() {

  const router = useRouter(); //Initialize router

  const handleReturnClick = () => { // Use useRouter hook to return to the airports page
    router.push('/changi');
  };

  return (
    <div className={styles.container}>
      {/* Left Section: Image */}
      <div className={styles.leftSection}>
        <img
          src="/images/wonderfall2.jpg" 
          alt="Wonderfall at Changi"
          className={styles.image}
        />
      </div>
      <button id="return-button" onClick={handleReturnClick}>
        <FaArrowLeft size={20} color="black" />
        <b id="return">Back</b>
      </button>

      {/* Right Section: Factual Statements */}
      <div className={styles.rightSection}>
        <h1 className={styles.header}>Wonderfall at Changi</h1>
        {/* <p className={styles.text}>The Wonderfall at Changi Airport is a breathtaking indoor waterfall that is the tallest of its kind in the world.</p>
        <p className={styles.text}>Located in Jewel Changi, it stands at an impressive height of 40 meters, cascading from the center of a stunning glass dome.</p>
        <p className={styles.text}>Surrounded by lush greenery, the Wonderfall creates a mesmerizing experience for travelers and visitors alike.</p>
        <p className={styles.text}>It is a prime example of Singapore’s innovation and dedication to creating world-class attractions.</p> */}
        <p className={styles.text}>Behold an iconic landmark built with nature-inspired design and digital wizardry in the departure hall of the new Terminal 2. This digital waterfall cascades among lush green walls to create a mesmerizing, calming spectacle.</p>
        <p></p>
        <p className={styles.text}>Within The Wonderfall lies a melodic surprise – Rhythms of Nature, an abstract ballet of human design and Mother Nature's harmonious dance. Guided by an original composition from neo-classical pianist-composer, Jean-Michel Blais, experience a symphonic masterpiece where design and nature awaits.</p>
      </div>
    </div>
  );
}
