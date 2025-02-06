'use client'; // Add this line at the top of the file

import React, { useState, useEffect } from 'react';
import './page.modules.css';
import axios from 'axios';


const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [timezone, setTimezone] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Fetch the list of countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryList = response.data.map(country => ({
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

    // Find the selected country's data
    const selectedCountryData = countries.find(country => country.name === countryName);
    if (selectedCountryData && selectedCountryData.latlng) {
      const [latitude, longitude] = selectedCountryData.latlng;

      // Fetch timezone and current time using TimeZoneDB API
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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Country Timezone Finder</h1>

      {/* Dropdown for selecting a country */}
      <label htmlFor="country">Select a country: </label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Select a country --</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {/* Display the timezone and current time */}
      {selectedCountry && (
        <div style={{ marginTop: '20px' }}>
          <h2>{selectedCountry}</h2>
          <p><strong>Timezone:</strong> {timezone}</p>
          <p><strong>Current Time:</strong> {currentTime}</p>
        </div>
      )}
    </div>
  );
};

export default App;