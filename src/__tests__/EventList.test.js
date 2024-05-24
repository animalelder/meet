// src/__tests__/EventList.test.js

//The lines that are commented out were removed from the original code. The tests all pass. I will remove the lines after discussing with Andrew.

import { render, within, waitFor, screen } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from '../App';

describe('<EventList /> component', () => {
  let EventListComponent;

  test('has an element with "list" role', () => {
    render(<EventList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    EventListComponent = render(<EventList />);
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(allEvents.length);
  });
});

describe('<EventList /> integration', () => {
  let EventListComponent;
  //   beforeEach(() => {
  //     EventListComponent = render(<EventList />);
  // });

  test('renders a list of 32 events when the app is mounted and rendered', async () => {
    render(<EventList />);
    const { container } = render(<App />);
    // const AppDOM = container.firstChild;
    // const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = screen.queryAllByRole('listitem');
      expect(EventListItems.length).toBe(32);
    });
  });
});
