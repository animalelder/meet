// src/components/Event.js
import { useState } from 'react';
import { format } from 'date-fns';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      key={event.id}
      className='relative px-3 py-3 my-3 mb-3 subpixel-antialiased rounded-md shadow-md first:mt-2 min-h-fit event shadow-blue-400 hover:bg-slate-50 odd:bg-slate-100 even:bg-neutral-100 ring-2 ring-blue-800/75'
    >
      <h2 className='my-1 text-xl font-bold tracking-wider text-orange-700/85 drop-shadow-md'>
        {event.summary}
      </h2>
      <p className='text-sm tracking-wide font-medium drop-shadow-sm my-1 indent-1.5 text-blue-900/90'>
        {format(new Date(event.created), 'Pp')}
      </p>
      <p className='text-orange-700/85 text-lg font-medium tracking-wide py-1 drop-shadow-md indent-0.5'>
        in {event.location}
      </p>
      <button
        className='absolute px-2 py-1 rounded-md shadow-md cursor-pointer shadow-cyan-500/50 right-1 bottom-1 ring-2 ring-emerald-600/75 details-btn bg-gradient-to-r from-emerald-300 to-emerald-600 text-slate-50 hover:from-emerald-400 hover:to-teal-600 hover:text-slate-700'
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide' : 'Details'}
      </button>
      {showDetails ? (
        <div
          className='event-details'
          id='event-details'
          data-testid='event-details'
        >
          <h3 className='my-1 font-medium tracking-wider text-emerald-900/95 drop-shadow-sm'>
            Event Details
          </h3>
          <p className='block py-1 mb-5 font-medium text-neutral-800/80 indent-3'>
            {event.description}
          </p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
