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
    Object.assign(document.body.style, {
      margin: '0',
      fontFamily: "'Poppins', Arial, sans-serif",
      background: '#1e3c72',
      color: '#fff',
    });

    return () => Object.assign(document.body.style, {
      margin: '',
      fontFamily: '',
      background: '',
      color: '',
    });
  }, []);

  // Fetch countries list
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v3.1/all');
        const sortedCountries = data
          .map(({ name, capital, latlng, flags }) => ({
            name: name.common,
            capital: capital?.[0] || null,
            latlng,
            flag: flags?.svg || '',
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(sortedCountries);
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
      setCurrentDateTime(
        `${now.toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })} | ${now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}`
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle country selection change
  const handleCountryChange = async (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);

    const countryData = countries.find((c) => c.name === countryName);
    if (!countryData) return;

    setFlag(countryData.flag);
    if (!countryData.latlng) return setTimezone('N/A');

    const [latitude, longitude] = countryData.latlng;
    try {
      const apiKey = 'Q5I3B2TPLTEZ'; 
      const { data } = await axios.get(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`
      );

      setTimezone(data.status === 'OK' ? data.zoneName : 'N/A');
    } catch (error) {
      console.error('Error fetching timezone:', error);
      setTimezone('N/A');
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>🌍 Country Timezone Finder</h1>

        {/* Country Dropdown */}
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

        {/* Display Country Info */}
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
};

export default App;
