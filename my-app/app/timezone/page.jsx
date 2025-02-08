'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [timezone, setTimezone] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [flag, setFlag] = useState('');

  // Apply global styles dynamically
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.fontFamily = "'Poppins', Arial, sans-serif";
    document.body.style.background = ' #1e3c72';
    document.body.style.color = '#fff';

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
        let countryList = response.data.map((country) => ({
          name: country.name.common,
          capital: country.capital ? country.capital[0] : null,
          latlng: country.latlng,
          flag: country.flags.svg,
        }));

        countryList = countryList.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  // Update Date & Time every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const formattedTime = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      setCurrentDateTime(`${formattedDate} | ${formattedTime}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle country selection change
  const handleCountryChange = async (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);

    const selectedCountryData = countries.find((country) => country.name === countryName);
    if (selectedCountryData) {
      setFlag(selectedCountryData.flag);
      if (selectedCountryData.latlng) {
        const [latitude, longitude] = selectedCountryData.latlng;

        try {
          const apiKey = 'Q5I3B2TPLTEZ'; // Replace with your TimeZoneDB API key
          const response = await axios.get(
            `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`
          );

          if (response.data.status === 'OK') {
            setTimezone(response.data.zoneName);
          } else {
            setTimezone('N/A');
          }
        } catch (error) {
          console.error('Error fetching timezone data:', error);
          setTimezone('N/A');
        }
      } else {
        setTimezone('N/A');
      }
    }
  };

  return (
    <div style={{ background: '#1e3c72', minHeight: '100vh' }}>
      <div className={styles.container}>
        <h1 className={styles.title}>🌍 Country Timezone Finder</h1>
  
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
  
        {/* Display the flag, timezone, and current date/time */}
        {selectedCountry && (
          <div className={styles.resultContainer}>
            <h2 className={styles.countryName}>{selectedCountry}</h2>
            {flag && <img src={flag} alt={`${selectedCountry} flag`} className={styles.flag} />}
            <p className={styles.resultItem}>
              <strong>Timezone:</strong> {timezone}
            </p>
            <p className={styles.resultItem}>
              <strong>Current Date & Time:</strong> {currentDateTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}  

export default App;
