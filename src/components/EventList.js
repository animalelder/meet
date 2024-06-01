// src/components/EventList.js
import Event from './Event';

const EventList = ({ events }) => {
  return (
    <ul
      id='event-list'
      className='max-w-2xl p-0 mx-auto list-none'
      title='event-list'
      data-testid='event-list'
    >
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </ul>
  );
};

export default EventList;
