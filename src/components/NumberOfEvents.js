import { useState } from 'react';

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState('32');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNumberOfEvents(value);
    }
  };

  return (
    <div id='numberOfEvents'>
      <input type='text' value={numberOfEvents} onChange={handleInputChange} />
    </div>
  );
};

export default NumberOfEvents;
