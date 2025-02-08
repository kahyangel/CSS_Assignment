/*
Changi Component (Kah Yan)
-------------------------------------------------------------------------------------------------------------------------------
1) Created an introduction section that displays a welcome message, airport image, and a "Back" button for navigation to 
the /airports page using Next.js' useRouter.

2) Created a dynamic display of categories which allows users to select activity categories using buttons which will update the 
displayed content dynamically.

3) Created activity Cards using the card component provided by Bootstrap. It generates cards with images, titles, descriptions, 
and a "Learn More" button for activities in the selected category.

4) Imported cloud and plane icons to add to the page's background.
-------------------------------------------------------------------------------------------------------------------------------
*/


"use client"; // Enables client-side rendering for this component

import Button from 'react-bootstrap/Button';  // Import buttons from React-Bootstrap
import Card from 'react-bootstrap/Card';  // Import cards from React-Bootstrap

import { useRouter } from 'next/navigation'; // Import useRouter hook from Next.js
import React, { useState } from 'react'; // Imports the useState hook from React

import './changi.css';  //Import styles from changi.css file
import data from '../changi/data'; // Import data from 

import { FaArrowLeft } from "react-icons/fa"; // Import the return arrow icon
import { FaCloud } from "react-icons/fa"; // Import cloud icon from React Icons
import { IoIosCloudy,IoIosCloud } from "react-icons/io"; // Import cloud icons from React Icons
import { BiSolidPlaneAlt } from "react-icons/bi"; // Import plane icon from React Icons




export default function App() {

  const router = useRouter(); //Initialize router

  const handleReturnClick = () => { // Use useRouter hook to return to the airports page
    router.push('/airports');
  };

  const [selectedCategory, setSelectedCategory] = useState("Art"); //Sets the default category to "Art"

    return (
      <>
      <div className="changi-body">
        {/*Introduction */}
        <div id="intro-container">
          <div id="header">
            <p><FaCloud id="cloud-icon1"/></p>
            <BiSolidPlaneAlt id="plane-icon"/>
            <h1 id="title">Welcome to Singapore Changi Airport</h1><br />
            <p id="comment">Scroll down below to learn more about<br />Singapore Changi Airport.</p>
            <IoIosCloudy id="cloud-icon2"/>
          </div>
          <img src="/images/changiTerminal.jpg" alt="Singapore Changi Airport" width="1100" height="750"/>
          <button id="returnButton" onClick={handleReturnClick}>
            <FaArrowLeft size={20} color="black" />
            <b id="return">Back</b>
          </button>
        </div>

        {/*Things to Try - Header */}
        <div id="things-to-try-container">
          <IoIosCloud id="cloud-icon4"/>
          <h1 id="tryHeader">Things You Must Try at Changi Airport <IoIosCloud id="cloud-icon3"/></h1>

          {/*Things to Try - Categories */}
          <div id="categories">
          {Object.keys(data).map((category) => (
            <Button
              key={category}
              className={`category-btn btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
          </div>
          <div id="card-container">

            {/*Things to Try - Card 1 */}
            {data[selectedCategory]?.map((item) => (
              <Card id="card" style={{ width: '18rem' }}>
                <Card.Img id="card-img" variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title id="card-title">{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Button id="learn-button" variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  }