// src/components/Event.js
import { useState } from 'react';
import { Button } from './ui/button';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      key={event.id}
      className='event drop-shadow-lg bg-primary text-primary-foreground'
    >
      <h2 className='subpixel-antialiased'>{event.summary}</h2>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <Button
        variant='secondary'
        className='details-btn rounded mx-2 ring-2 ring-offset-blue-100 ring-blue-400'
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </Button>
      {showDetails ? (
        <div
          className='event-details'
          id='event-details'
          data-testid='event-details'
        >
          <h3>Event Details</h3>
          <p>{event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
