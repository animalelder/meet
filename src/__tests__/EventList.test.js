// src/__tests__/EventList.test.js

import { render, within, waitFor, screen } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from '../App';

describe('<EventList /> component', () => {
  let EventListComponent;
  // beforeEach(() => {
  //   EventListComponent = render(<EventList />);
  // });

  test('has an element with "list" role', () => {
    EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole('list')).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    EventListComponent = render(<EventList />);
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole('listitem')).toHaveLength(
      allEvents.length
    );
  });
});

describe('<EventList /> integration', () => {
  let EventListComponent;
  //   beforeEach(() => {
  //     EventListComponent = render(<EventList />);
  // });

  test('renders a list of 32 events when the app is mounted and rendered', async () => {
    EventListComponent = render(<EventList />);
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(32);
    });
  });
});
