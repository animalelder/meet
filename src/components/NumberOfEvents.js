import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numberOfEvents, setNumberOfEvents] = useState('32');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNumberOfEvents(value);
      setCurrentNOE(value);
    }
  };

  return (
    <div id='number-of-events'>
      <input
        type='text'
        className='number text-primary'
        value={numberOfEvents}
        onClick={(e) => e.target.select()}
        onFocus={(e) => e.target.select()}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;
