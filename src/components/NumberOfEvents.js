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
    <>
      <input
        type='text'
        className='number mx-5 text-primary bg-primary-foreground rounded-md p-2 m-2 ring-2 ring-offset-blue-100 ring-blue-900'
        value={numberOfEvents}
        onClick={(e) => e.target.select()}
        onFocus={(e) => e.target.select()}
        onChange={handleInputChange}
      />
    </>
  );
};

export default NumberOfEvents;
