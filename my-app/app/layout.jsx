/*
RootLayout Component (Kah Yan)
-------------------------------------------------------------------------------------------------------------------------------
Defined the RootLayout component, which includes a responsive navigation bar using Bootstrap's built-in Navbar component,
which is customised with our navigation links and icons from react-icons library
-------------------------------------------------------------------------------------------------------------------------------
*/

// Enables client-side rendering for this component
"use client";

// Import font from Google
import { Inter } from 'next/font/google'

// Import global CSS styles
import './globals.css'

// Import global CSS styles
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import icons from react-icons library
import { FaSearch, FaBars } from "react-icons/fa";

// Configuring the Inter font for consistent typography
const inter = Inter({ subsets: ['latin'] })

// RootLayout component: Defines the root layout structure of the application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="home" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          WORLD 🗺️⁀જ✈︎<br />  🛫  TRAVELLER
            </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="airports">Best Airports</Nav.Link>
            <Nav.Link href="timezone">Time Zones</Nav.Link>
            <Nav.Link href="pricing">Pricing</Nav.Link>
          </Nav>

          <div style={{ marginLeft: '15px', color: 'white'}}>
            <FaSearch size={18} />
          </div>
          <div style={{ marginLeft: '15px', color: 'white'}}>
            <FaBars size={20} />
          </div>
        </Container>
      </Navbar>
    </>
    {children}</body>
    </html>
  )
}

