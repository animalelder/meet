import { useState, useEffect } from 'react';
import Logo from './img/logo-trans.png';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import EventList from './components/EventList';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import { extractLocations, getEvents } from './api';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const [warningAlert, setWarningAlert] = useState('');

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
    if (navigator.onLine) {
      setWarningAlert('');
    } else {
      setWarningAlert(
        'You are offline. The displayed list may not be up to date.'
      );
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className='relative px-3 bg-gradient-to-b from-blue-100/75 via-blue-500/75 to-blue-200 App'>
      <img src={Logo} alt='Meet App Logo' className='mx-auto logo max-h-40' />
      <div className='alerts-container fixed drop-shadow-lg font-semibold top-3 left-5 max-w-40 min-w-min z-[1000]'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div className='relative flex flex-row flex-wrap items-center max-w-lg py-10 mx-auto mt-8 gap-7 min-w-fit rounded-2xl px-7'>
        <CitySearch
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert}
        />
        <NumberOfEvents
          setCurrentNOE={setCurrentNOE}
          setErrorAlert={setErrorAlert}
        />
      </div>
      <div className='grid max-w-4xl grid-cols-1 gap-4 py-2 mx-auto my-5 mb-5 rounded-lg shadow-md min-h-fit shadow-blue-400/50 ring-2 ring-inset ring-blue-500/75 md:grid-cols-2 charts-container bg-neutral-50 backdrop-filter'>
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
}

export default App;
