import { render, screen } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  test('has an element with "textbox" role', () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('default value is 32', () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    expect(screen.getByRole('textbox')).toHaveValue('32');
  });

  test('update numberOfEvents when user types', async () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    const numberOfEvents = screen.getByRole('textbox');
    const user = userEvent.setup();
    await user.clear(numberOfEvents);
    await user.type(numberOfEvents, '10');
    expect(numberOfEvents).toHaveValue('10');
  });

  test('number of events updates properly when user types a number in input', async () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    const numberOfEventsInput = screen.getByRole('textbox');
    const user = userEvent.setup();

    // Attempt to enter a negative number
    await user.clear(numberOfEventsInput);
    await user.type(numberOfEventsInput, '5');

    expect(numberOfEventsInput).toHaveValue('5');
  });
});
