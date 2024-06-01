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
    <div
      id='number-of-events'
      className='relative flex-shrink m-auto min-w-fit justify-self-auto'
    >
      <label
        htmlFor='number-of-events'
        className='absolute z-50 uppercase opacity-75 -top-7 left-4 text-neutral-100'
      >
        Number of Events
      </label>
      <input
        type='text'
        className='relative flex-shrink h-10 text-center rounded-lg number drop-shadow'
        value={numberOfEvents}
        name='number-of-events'
        onClick={(e) => e.target.select()}
        onFocus={(e) => e.target.select()}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;
