'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [timezone, setTimezone] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Apply global styles dynamically
  useEffect(() => {
    // Set global styles for the body
    document.body.style.margin = '0';
    document.body.style.fontFamily = "'Roboto', Arial, sans-serif";
    document.body.style.background = 'rgb(72, 95, 132))';
    document.body.style.color = '#d8e5ec';

    // Cleanup function to reset styles when the component unmounts
    return () => {
      document.body.style.margin = '';
      document.body.style.fontFamily = '';
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, []);

  // Fetch the list of countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryList = response.data.map((country) => ({
          name: country.name.common,
          capital: country.capital ? country.capital[0] : null,
          latlng: country.latlng, // Latitude and Longitude of the capital
        }));
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  // Handle country selection change
  const handleCountryChange = async (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);

    const selectedCountryData = countries.find((country) => country.name === countryName);
    if (selectedCountryData && selectedCountryData.latlng) {
      const [latitude, longitude] = selectedCountryData.latlng;

      try {
        const apiKey = 'Q5I3B2TPLTEZ'; // Replace with your TimeZoneDB API key
        const response = await axios.get(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`
        );
        if (response.data.status === 'OK') {
          setTimezone(response.data.zoneName);
          setCurrentTime(response.data.formatted);
        } else {
          setTimezone('N/A');
          setCurrentTime('N/A');
        }
      } catch (error) {
        console.error('Error fetching timezone data:', error);
        setTimezone('N/A');
        setCurrentTime('N/A');
      }
    } else {
      setTimezone('N/A');
      setCurrentTime('N/A');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Country Timezone Finder</h1>

      {/* Dropdown for selecting a country */}
      <div className={styles.dropdownContainer}>
        <label htmlFor="country" className={styles.label}>
          Select a country:
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className={styles.select}
        >
          <option value="">-- Select a country --</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* Display the timezone and current time */}
      {selectedCountry && (
        <div className={styles.resultContainer}>
          <h2 className={styles.countryName}>{selectedCountry}</h2>
          <p className={styles.resultItem}>
            <strong>Timezone:</strong> {timezone}
          </p>
          <p className={styles.resultItem}>
            <strong>Current Time:</strong> {currentTime}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;