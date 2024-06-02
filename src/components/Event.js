// src/components/Event.js
import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      key={event.id}
      className='relative px-3 py-5 mb-3 antialiased border-2 border-opacity-75 rounded-md min-h-fit event drop-shadow-md hover:bg-slate-100 bg-slate-50 border-x-blue-800 border-y-blue-600'
    >
      <h2 className='text-lg text-orange-700'>{event.summary}</h2>
      <p className='text-sm text-emerald-900'>{event.created}</p>
      <p className='text-orange-700'>{event.location}</p>
      <button
        className='absolute px-2 py-1 rounded-md shadow-md cursor-pointer shadow-cyan-500/50 right-1 bottom-1 details-btn bg-gradient-to-r from-emerald-400 to-emerald-600 text-slate-50 hover:from-emerald-400 hover:to-teal-600 hover:text-slate-700'
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
          <h3 className='text-emerald-900'>Event Details</h3>
          <p className='block text-sm clear-left text-green-950'>
            {event.description}
          </p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
