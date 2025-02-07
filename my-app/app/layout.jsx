"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch, FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation"; // Import the hook

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Conditionally render Navbar */}
        {(pathname !== "/" && pathname !== "/home") && (
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="home" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                WORLD 🗺️⁀જ✈︎<br /> 🛫 TRAVELLER
              </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="airports">Best Airports</Nav.Link>
                <Nav.Link href="timezone">Time Zones</Nav.Link>
                <Nav.Link href="pricing">Pricing</Nav.Link>
                <Nav.Link href="search">
                  <FaSearch size={18} />
                </Nav.Link>
                <Nav.Link href="#menu">
                  <FaBars size={20} />
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )}
        {/* Render children */}
        {children}
      </body>
    </html>
  );
}

