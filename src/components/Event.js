// src/components/Event.js
import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li key={event.id} className='event'>
      <h2>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button
        className='details-btn'
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails ? (
        <div id='event-details'>
          <h3>Event Details</h3>
          <p>{event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
