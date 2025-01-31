"use client";
import './page.modules.css';
import Carousel from 'react-bootstrap/Carousel';


export default function App() {
  return (
    <>
    <title>Best Airports in the World</title>
    <section>
    <h1 id="header">Best Airports in the World</h1>
    </section>

    <Carousel fade>
      <Carousel.Item>
        <div className="carouselImage">
          <img id="hamadAirport" src="https://dohahamadairport.com/sites/default/files/styles/content_image_banner/public/news/HIA%20ORCHARD.JPG?itok=sPpjAswV" alt="Hamad International Airport" width="1400" height="820"/>
        </div>
          <Carousel.Caption>
            <h1 className="airportName">Hamad International Airport</h1>
            <p className="airportDescription">State-of-the-art facilities, exceptional passenger experience, and seamless connectivity.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselImage">
          <img src="/images/changi.jpg" alt="Singapore Changi Airport" width="1400" height="820"/>
        </div>
        <Carousel.Caption>
          <h1 className="airportName">Singapore Changi Airport</h1>
          <p className="airportDescription">Innovative amenities, lush gardens, and world-class passenger experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselImage">
          <img id="incheonAirport"src="/images/incheon.jpg" alt="Seoul Incheon Airport" width="1400" height="820"/>
        </div>
        <Carousel.Caption>
          <h1 className="airportName">Seoul Incheon Airport</h1>
          <p className="airportDescription">Exceptional service quality, advanced facilities, and seamless passenger experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  );
}