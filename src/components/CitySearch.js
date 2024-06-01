// src/components/CitySearch.js
import { useState, useEffect } from 'react';

const CitySearch = ({ allLocations, setCurrentCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');
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
  }, [JSON.stringify(allLocations), allLocations]);

  return (
    <div
      id='city-search'
      className='relative m-auto appearance-none justify-self-auto'
    >
      <label
        htmlFor='city-selector'
        className='absolute z-50 uppercase opacity-75 -top-7 left-1/3 text-neutral-100'
      >
        CITIES
      </label>
      <input
        type='text'
        className='relative flex-shrink h-10 mb-0 text-center rounded-lg min-w-52 max-w-64 drop-shadow rounded-b-md placeholder-neutral-400 city'
        placeholder='Search for a city'
        name='city-selector'
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className='absolute z-50 self-center m-0 overflow-y-visible text-sm shadow-2xl last:rounded-b-md min-w-36 max-w-48 suggestions shadow-zinc-900 '>
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion}
                onClick={handleItemClicked}
                className='z-50 suggestion-list-item min-w-36 max-w-48 text-left p-2 bg-neutral-50 hover:bg-[#bcdcdb] cursor-pointer'
              >
                {suggestion}
              </li>
            );
          })}
          <li
            className='z-50 suggestion-list-item text-lef min-w-36 max-w-48 p-3 mb-2 bg-neutral-100 hover:bg-[#bcdcdb] cursor-pointer'
            key='See all cities'
            onClick={handleItemClicked}
          >
            <span>See all cities</span>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;
