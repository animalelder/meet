/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
// src/__tests__/CitySearch.test.js

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import App from '../App';
import { extractLocations, getEvents } from '../api';

describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch allLocations={[]} />);
  });

  test('renders text input', () => {
    const cityTextBox = screen.getByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('suggestions list is hidden by default', () => {
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();
  });

  test('renders a list of suggestions when city textbox gains focus', async () => {
    const user = userEvent.setup();
    const cityTextBox = screen.getByRole('textbox');
    await user.click(cityTextBox);
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
  });

  test('updates list of suggestions correctly when user types in city textbox', async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

    // user types "Berlin" in city textbox
    const cityTextBox = screen.getByRole('textbox');
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
    const suggestionListItems = CitySearchComponent.getAllByRole('listitem');
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
  CitySearchComponent.rerender(
    <CitySearch allLocations={allLocations} setCurrentCity={() => {}} />
  );

  const cityTextBox = CitySearchComponent.getByRole('textbox');
  await user.type(cityTextBox, 'Berlin');

  // the suggestion's textContent look like this: "Berlin, Germany"
  const BerlinGermanySuggestion = screen.getAllByRole('listitem')[0];

  await user.click(BerlinGermanySuggestion);

  expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
});

describe('<CitySearch /> integration', () => {
  test('renders suggestions list when the app is rendered.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
    await user.click(cityTextBox);

    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);

    const suggestionListItems =
      within(CitySearchDOM).queryAllByRole('listitem');
    expect(suggestionListItems.length).toBe(allLocations.length + 1);
  });
});
