import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numberOfEvents, setNumberOfEvents] = useState('32');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);

    let errortext;
    if (isNaN(value)) {
      errortext = 'Please enter a number';
    } else if (value < 1) {
      errortext = 'Please enter a number greater than 0';
    } else {
      errortext = '';
      setCurrentNOE(value);
    }
    setErrorAlert(errortext);
  };

  return (
    <div
      id='number-of-events'
      className='relative self-start flex-1 object-none object-top min-w-10 max-w-16 xs:min-w-24 xs:max-w-28'
    >
      <label
        htmlFor='number-of-events-input'
        className='absolute hidden font-mono uppercase xs:block indent-3 place-self-center -top-7 text-neutral-950/80'
      >
        # of...
      </label>
      <input
        type='text'
        className='relative h-10 font-medium text-center rounded-lg drop-shadow-md xs:grow max-w-16 xs:min-w-24 number shadow-neutral-900/35'
        value={numberOfEvents}
        name='number-of-events-input'
        onClick={(e) => e.target.select()}
        onFocus={(e) => e.target.select()}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;
