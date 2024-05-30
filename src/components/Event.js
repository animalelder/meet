// src/components/Event.js
import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      key={event.id}
      className='event relative drop-shadow-lg hover:bg-slate-100 pb-3 bg-slate-50 border-2 border-blue-800 rounded-md px-3 py-2 my-2 mx-2'
    >
      <h2 className='text-xl text-orange-400'>{event.summary}</h2>
      <p className='text-emerald-900'>{event.created}</p>
      <p className='text-emerald-800'>{event.location}</p>
      <button
        className='details-btn absolute bg-emerald-600 drop-shadow-sm text-slate-50 rounded-md hover:bg-emerald-400 hover:text-slate-700'
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Less' : 'More'}
      </button>
      {showDetails ? (
        <div
          className='event-details'
          id='event-details'
          data-testid='event-details'
        >
          <h3>Event Details</h3>
          <p className='block text-slate-800'>{event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
