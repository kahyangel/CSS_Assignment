"use client";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
    const flightsAPI = "http://localhost:3000/api/flights";
    const { data, error, isLoading } = useSWR(flightsAPI, fetcher);
    if (error) {
        return <h1>failed to load</h1>;
    }
    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <h1>Please Choose a Destination</h1>
            <label>Please Choose a Destination: </label>
            <select value={selectedValue} onChange={handleChange}>
                <option value="">-- Choose --</option>
                <option value="japan">Japan</option>
                <option value="korea">Korea</option>
                <option value="china">China</option>
            </select>
            <p id="dest">Selected: {selectedValue}</p>
        </div>
    );
};
