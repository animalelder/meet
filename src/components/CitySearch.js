// src/components/CitySearch.js
import { useState, useEffect } from 'react';

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
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

    let infoText;
    if (filteredLocations.length === 0) {
      infoText =
        'We can not find the city you are looking for. Please try another city';
    } else {
      infoText = '';
    }
    setInfoAlert(infoText);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // to hide the list
    setCurrentCity(value);
    setInfoAlert('');
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
        htmlFor='city-selector-input'
        className='absolute z-auto font-mono uppercase place-self-center -top-7 text-neutral-950/80'
      >
        SEARCH
      </label>
      <input
        type='text'
        className='relative flex-shrink h-10 font-medium text-center rounded-lg drop-shadow-md min-w-52 max-w-64 shadow-neutral-900/35 rounded-b-md placeholder-neutral-600 city'
        placeholder='Search for a city'
        data-testid='city-selector'
        name='city-selecto-input'
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className='absolute z-[1000] top-10 self-end block w-full mt-2 mb-6 text-sm border-2 border-blue-400/50 rounded-md ring-2 ring-blue-500 m-h-fit suggestions'>
          {suggestions.map((suggestion) => {
            return (
              <li
                key={suggestion}
                onClick={handleItemClicked}
                className='p-2 text-center rounded-none cursor-pointer first:h-6 min-h-fit first:rounded-b-none first:rounded-t-md suggestion-list-item first:pt-2 bg-neutral-50 hover:z-50 hover:bg-green-300'
                data-testid='suggestion-list-item'
              >
                {suggestion}
              </li>
            );
          })}
          <li
            className='w-full p-3 font-mono text-center rounded-t-none cursor-pointer rounded-b-md suggestion-list-item bg-neutral-100 hover:bg-green-300'
            key='See all cities'
            data-testid='suggestion-list-item'
            onClick={handleItemClicked}
          >
            See all cities
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;
