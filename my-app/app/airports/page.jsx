/*
Bootstrap Carousel Component (Kah Yan)
-------------------------------------------------------------------------------------------------------------------------------
1) Created a Carousel showcasing the top 3 airports in the world, using the imported Carousel component from Bootstrap.
2) Used the useRouter hook to allow users to navigate the specified destination page when the Carousel image is pressed.
-------------------------------------------------------------------------------------------------------------------------------
*/

"use client"; // Enables client-side rendering for this component

import {useRouter} from 'next/navigation';  //Import useRouter hook from Next.js
import './airport.css';  //Import styles from airport.css file
import Carousel from 'react-bootstrap/Carousel'; //Import Carousel component from React-Bootstrap


export default function App() {

  const router = useRouter(); //Initialise the router

  const handleCarouselClick = (path) => { //Function to handle navigation when clicking on a Carousel item
    router.push(path);
  };

  return (
    <>
    <div className="airport-body">
      <title>Best Airports in the World</title>
      <section>
      <h1 id="airport-header">Best Airports in the World</h1>
      <p id="airport-intro">Click on the Carousel to find out more about what makes these Airports the Best in the World</p>
      </section>
    
      <div className="carouselContainer">
      <Carousel fade>
          {/*Hamad International Airport*/}
          <Carousel.Item>
            <b class="rank">No. 1</b>
              <img id="hamadAirport" src="https://dohahamadairport.com/sites/default/files/styles/content_image_banner/public/news/HIA%20ORCHARD.JPG?itok=sPpjAswV" alt="Hamad International Airport" width="1400" height="850"/>
              <Carousel.Caption>
                <h1 className="airportName">Hamad International Airport</h1>
                <p className="airportDescription">State-of-the-art facilities, exceptional passenger experience, and seamless connectivity.</p>
              </Carousel.Caption>
          </Carousel.Item>
        
        {/*Singapore Changi Airport*/}
        <Carousel.Item onClick={() => handleCarouselClick('/changi')}>
          <b class="rank">No. 2</b>
            <img src="/images/changi.jpg" alt="Singapore Changi Airport" width="1400" height="850"/>
            <Carousel.Caption>
              <h1 className="airportName">Singapore Changi Airport</h1>
              <p className="airportDescription">Innovative amenities, lush gardens, and world-class passenger experience.</p>
            </Carousel.Caption>
        </Carousel.Item>

        {/*Seoul Incheon Airport*/}
        <Carousel.Item>
          <b class="rank">No. 3</b>
            <img id="incheonAirport"src="/images/incheon.jpg" alt="Seoul Incheon Airport" width="1400" height="850"/>
            <Carousel.Caption>
              <h1 className="airportName">Seoul Incheon Airport</h1>
              <p className="airportDescription">Exceptional service quality, advanced facilities, and seamless passenger experience.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
    </>
  );
}