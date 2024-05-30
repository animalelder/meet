// src/components/CitySearch.js
import { useState, useEffect } from "react";

const CitySearch = ({ allLocations, setCurrentCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];

    setQuery(value);
    setSuggestions(filteredLocations);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // to hide the list
    setCurrentCity(value);
  };

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);

  return (
    <>
      <input
        type="text"
        className="city m-2 mx-10 rounded-md p-2 text-slate-950 ring-2 ring-blue-900 ring-offset-blue-100 placeholder-shown:text-slate-800"
        placeholder="Search for a city"
        data-test-id="city-search-input"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className="suggestions text-primary">
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion}
                onClick={handleItemClicked}
                className="suggestion-list-item"
              >
                {suggestion}
              </li>
            );
          })}
          <li key="See all cities" onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default CitySearch;
