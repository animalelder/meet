// src/components/Event.js
import { useState } from "react";
// import { Button } from './ui/button';
import { format } from "date-fns";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li
      key={event.id}
      className="event relative  mx-2 my-4 bg-[#2b3a4b] p-4 text-slate-100 ring-2 ring-blue-900 ring-offset-blue-100 drop-shadow-lg"
    >
      <h2 className="text-lg text-white">{event.summary}</h2>
      <p className="text-sm text-slate-50">
        {format(new Date(event.created), "Pp")}
      </p>
      <p className="text-lg text-slate-50">{event.location}</p>
      <button
        className="absolute bottom-2  right-2 mx-2 w-28 rounded bg-slate-100 text-black ring-2 ring-blue-400 ring-offset-blue-100"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div
          className="event-details text-slate-50"
          id="event-details"
          data-testid="event-details"
        >
          <h3 className="text-lg text-orange-400">Event Details</h3>
          <p className="text-sm">{event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
