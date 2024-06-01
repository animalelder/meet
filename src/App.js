import { useState, useEffect } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import Logo from './img/logo.png';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === 'See all cities'
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className='subpixel-antialiased bg-blue-200 App scroll-smooth'>
      <img src={Logo} alt='Meet App Logo' className='mx-auto logo max-h-40' />
      <div className='flex flex-row items-start max-w-lg gap-4 py-10 mx-auto my-3 bg-blue-400 border-2 drop-shadow-md bg-opacity-60 border-opacity-85 border-y-emerald-700 border-x-emerald-800 rounded-2xl px-7 max-w-fit h-28 space-between bg-blend-color-dodge'>
        <CitySearch
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
        />
        <NumberOfEvents setCurrentNOE={setCurrentNOE} />
      </div>
      <EventList events={events} />
    </div>
  );
}

export default App;
