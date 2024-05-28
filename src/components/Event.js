// src/components/Event.js
import { useState } from 'react';
import { Button } from './ui/button';
import { format } from 'date-fns';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      key={event.id}
      className='event drop-shadow-lg bg-primary border-secondary text-primary-foreground p-4 my-4 mx-2 ring-2 ring-offset-blue-100 ring-blue-900'
    >
      <h2 className='left-1/4 subpixel-antialiased text-lg'>{event.summary}</h2>
      <p className='text-sm'>{format(new Date(event.created), 'Pp')}</p>
      <p className='text-lg'>{event.location}</p>
      <Button
        variant='secondary'
        className='details-btn rounded mx-2 ring-2 ring-offset-blue-100 ring-blue-400'
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </Button>
      {showDetails ? (
        <div
          className='event-details text-slate-50'
          id='event-details'
          data-testid='event-details'
        >
          <h3 className='text-yellow-700'>Event Details</h3>
          <p>{event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
