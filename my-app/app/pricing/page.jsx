"use client";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import styles from './page.module.css';

export default function App() {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedFlights, setSelectedFlights] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFlights = async () => {
            if (!selectedValue) return; // Stop if no destination is selected

            setLoading(true); // Show loading while fetching

            try {
                const response = await fetch("/api/flights");
                const data = await response.json();

                if (!data?.destination || !data.destination[0]) {
                    setSelectedFlights([]);
                    setLoading(false);
                    return;
                }

                const key = selectedValue;
                const flights = data.destination[0][key] || [];

                //Sort flights before setting state
                const sortedFlights = [...flights].sort((a, b) => a.price - b.price);
                setSelectedFlights(sortedFlights);
            } catch (error) {
                console.error("Error fetching flights:", error);
                setSelectedFlights([]);
            } finally {
                setLoading(false); // Stop loading after fetching
            }
        };

        fetchFlights();
    }, [selectedValue]); // Re-fetch when destination changes

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}><strong>Compare Flight Prices ✈️</strong></h1>
            <label className={styles.label}><strong>Please Choose a Destination: </strong></label>
            <select className={styles.select} value={selectedValue} onChange={handleChange}>
                <option value="">Select a destination</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea</option>
                <option value="China">China</option>
            </select>

            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", color: "white"}}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : selectedValue && selectedFlights.length > 0 ? (
                <div>
                    <h2 className={styles.ftitle}>Flights to {selectedValue}</h2>
                    <div className={styles.flights}>
                        <div className={styles.cheapest}>
                            <h3>Cheapest</h3>
                            <h3>Flight</h3>
                            <p className={styles.airline}><strong>{selectedFlights[0]?.airline}</strong></p> 
                            <p className={styles.price}>${selectedFlights[0]?.price}</p>
                            <a className={styles.bookinglink} href="https://sg.trip.com/?locale=en-SG&curr=SGD" target="_blank">
                                Book Now
                            </a>
                        </div>
                        <div className={styles.expensive}>
                            <h3>Most Expensive</h3>
                            <h3>Flight</h3>
                            <p className={styles.airline}><strong>{selectedFlights[selectedFlights.length - 1]?.airline}</strong></p>
                            <p className={styles.price}>${selectedFlights[selectedFlights.length - 1]?.price}</p>
                            <a className={styles.bookinglink} href="https://sg.trip.com/?locale=en-SG&curr=SGD" target="_blank">
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                selectedValue && <p className={styles.unavail}>No flights available for {selectedValue}</p>
            )}
        </div>
    );
}



