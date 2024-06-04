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
    <div className='box-border bg-blue-200 App'>
      <img src={Logo} alt='Meet App Logo' className='mx-auto logo max-h-40' />
      <div className='flex flex-row flex-wrap items-center max-w-lg gap-4 py-10 mx-auto mt-8 min-w-fit rounded-2xl px-7'>
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
