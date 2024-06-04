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
      className='relative flex flex-col m-auto min-h-fit justify-self-auto'
    >
      <label
        htmlFor='city-selector'
        className='absolute z-auto font-mono uppercase place-self-center -top-7 text-neutral-950/80'
      >
        SEARCH
      </label>
      <input
        type='text'
        className='flex-shrink h-10 font-medium text-center rounded-lg drop-shadow-md min-w-52 max-w-64 shadow-neutral-900/35 rounded-b-md placeholder-neutral-600 city'
        placeholder='Search for a city'
        name='city-selector'
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className='self-end block w-full mt-2 mb-6 text-sm border-2 border-blue-400 rounded-lg ring-2 ring-blue-500 m-h-fit suggestions'>
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion}
                onClick={handleItemClicked}
                className='p-2 text-center rounded-sm cursor-pointer suggestion-list-item first:pt-0 bg-neutral-50 hover:z-50 hover:bg-green-300'
              >
                {suggestion}
              </li>
            );
          })}
          <li
            className='w-full p-3 font-mono text-center cursor-pointer suggestion-list-item bg-neutral-100 hover:bg-green-300'
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
