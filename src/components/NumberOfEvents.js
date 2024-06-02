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
      className='relative object-none object-top shrink min-w-fit max-w-28'
    >
      <label
        htmlFor='number-of-events'
        className='absolute uppercase indent-3 place-self-center -top-7 text-neutral-950/80'
      >
        # of Events
      </label>
      <input
        type='text'
        className='relative h-10 text-center rounded-lg shadow-md shrink min-w-10 number shadow-neutral-900/35'
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
