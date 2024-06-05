//The lines that are commented out were removed from the original code. The tests all pass. I will remove the lines after discussing with Andrew.
import { format } from 'date-fns';
import { render, screen } from '@testing-library/react';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });
  // beforeEach(() => {
  //   EventComponent = render(<Event event={allEvents[0]} />);
  // });

  test('renders event title', () => {
    render(<Event event={allEvents[0]} />);
    expect(screen.getByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event start time', () => {
    render(<Event event={allEvents[0]} />);
    expect(
      screen.getByText(format(new Date(allEvents[0].created), 'Pp'))
    ).toBeInTheDocument();
  });

  test('renders event location', () => {
    render(<Event event={allEvents[0]} />);
    expect(screen.getByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('event details are hidden by default', () => {
    render(<Event event={allEvents[0]} />);
    expect(screen.queryByTestId('.event-details')).not.toBeInTheDocument();
  });

  test("renders event details when user clicks 'show details' button", async () => {
    render(<Event event={allEvents[0]} />);
    const user = userEvent.setup();
    const button = screen.getByRole('button');
    await user.click(button, 'Show Details');
    const details = screen.queryByTestId('event-details');
    expect(details).toBeInTheDocument();
  });

  test("hides event details when user clicks 'hide details' button", async () => {
    render(<Event event={allEvents[0]} />);
    const user = userEvent.setup();
    const button = screen.getByRole('button');
    const details = screen.queryByTestId('event-details');
    await user.click(button, 'Hide Details');
    expect(details).not.toBeInTheDocument();
  });
});
