import EventList from './components/Eventlist';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

function App() {
  return (
    <div className='App'>
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
}

export default App;
