// src/__tests__/CitySearch.test.js

import { render, screen } from '@testing-library/react';
import { extractLocations, getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
  });

  test('renders text input', () => {
    const cityTextBox = screen.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('suggestions list is hidden by default', () => {
    const suggestionList = screen.queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();
  });

  test('renders a list of suggestions when city textbox gains focus', async () => {
    const user = userEvent.setup();
    const cityTextBox = screen.queryByRole('textbox');
    await user.click(cityTextBox);
    const suggestionList = screen.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
  });

  test('updates list of suggestions correctly when user types in city textbox', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    // user types "Berlin" in city textbox
    const cityTextBox = screen.queryByRole('textbox');
    await user.type(cityTextBox, 'Berlin');

    // filter allLocations to locations matching "Berlin"
    const suggestions = allLocations
      ? allLocations.filter((location) => {
          return (
            location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1
          );
        })
      : [];

    // get all <li> elements inside the suggestion list
    const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
    }
  });
});

test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
  let CitySearchComponent = render(<CitySearch />);
  const user = userEvent.setup();
  const allEvents = await getEvents();
  const allLocations = extractLocations(allEvents);
  CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

  const cityTextBox = CitySearchComponent.queryByRole('textbox');
  await user.type(cityTextBox, 'Berlin');

  // the suggestion's textContent look like this: "Berlin, Germany"
  const BerlinGermanySuggestion =
    CitySearchComponent.container.querySelectorAll('.suggestion-list-item')[0];

  await user.click(BerlinGermanySuggestion);

  expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
});
