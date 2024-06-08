# meetJS: a Progressive Web App

Test-driven Development app utilizing the Google Calendar API and serverless functions

## Project Description

The Meet app is a progressive web application with a serverless backend,
offering offline access to upcoming events in specific cities. Its responsive design
ensures seamless display across devices, delivering an optimized user experience.
Developed via Test-driven development, it prioritizes code quality and test coverage for increased app performance.

## About Serverless Function Usage

This app uses serverless functions to handle backend operations without the need for maintaining server infrastructure. For example, when a user requests upcoming events or chooses to filter events by city, the serverless backend can respond to these requests by retrieving and processing any data from the database.

With the use of serverless architecture, the app maintains scalability, and cost-effectiveness--while giving any user seamless access to the event information. Using serverless functions is an efficient option for a modern web app.

## Run this project locally

- Clone this repository

- Go to the project directory

      cd project-folder

- Install project dependencies

      npm install

- Start the server at localhost:3000 in the default web browser

      npm run start

## User Features

### Feature 1: Filter Events By City

#### User Story

- As a user,
  I should be able to filter events by city
  So that I can see a list of events taking place in that city.

#### Possible Scenarios

- **_Scenario_**: When the user hasn't searched for a city, show upcoming events from all cities

  - _Given_ I have navigated to the main page but have not specified a city
  - _When_ I look at the events list
  - _Then_ I should see events from all cities

- **Scenario**: User should see a list of suggestions when they search for a city

  - _Given_ I have navigated to the main page
  - _When_ I start typing in the search box to search for a city
  - _Then_ I should see a list of city names that match my input as suggestions

- **Scenario**: User can select a city from the suggested list
  - _Given_ the list of suggested cities is displayed
  - _When_ I click on a city name from the suggestions
  - _Then_ I should only see events happening in the selected city

### Feature 2: Show/Hide Event Details

#### User Story

- As a user,
  I should be able to expand an event to see more details and collapse it to hide those details,
  So that I can switch my focus between the event list and a single event.

#### Possible Scenarios

- **_Scenario_**: An event element is collapsed by default

  - _Given_ I have navigated to the main page
  - _When_ I look at the list of events
  - _Then_ the list should be minimized with each event showing only the summary

- **_Scenario_**: User can expand an event to see details

  - _Given_ an event is collapsed
  - _When_ I click on an event's "SHOW DETAILS" button
  - _Then_ the container should expand to show all event information

- **_Scenario_**: User can collapse an event to hide details
  - _Given_ an event is expanded
  - _When_ I click on the event's "hide details" button
  - _Then_ the event should collapse by hiding the event details

### Feature 3: Specify Number of Events to Display

#### User Story

- As a user,
  I should be able to specify the number of events I want to view at a time,
  So that I can limit the amount of information displayed in the app based on preference.

#### Possible Scenarios

- **_Scenario_**: When user hasn’t specified a number, 32 events are shown by default

  - _Given_ I have navigated to the main page
  - _When_ I have not specified a number of events to view
  - _Then_ 32 events should be displayed as the default

- **_Scenario_**: User can change the number of events displayed
  - _Given_ I have navigated to the main page
  - _When_ I can specify thea number of events to be displayed in the app
  - _Then_ see the desired result on the page

### Feature 4: Use the App While Offline

#### User Story

- As a user,
  I should be able to view events and use the app even when I'm offline,
  So that I can access event information without an internet connection, ensuring I have the information I need at any time.

#### Possible Scenarios

- **_Scenario_**: Show cached data when there’s no internet connection

  - _Given_ I have previously visited the page and loaded event data
  - _When_ I access the app without an internet connection
  - _Then_ I should see the previously cached event data

- **_Scenario_**: Show error when user changes search settings (city, number of events)
  - _Given_ I am accessing the app without an internet connection
  - _When_ I try to change the search settings like city or number of events
  - _Then_ I should see an error message indicating the action cannot be completed offline

### Feature 5: Add App Shortcut to Device Home Screen

#### User Story

- As a user,
  I should be able to add a shortcut of the app to my device's home screen,
  So that I can quickly access the app without having to navigate through my browser, making it feel more like a native app.

#### Possible Scenarios

- **_Scenario_**: User can install the meet app as a shortcut on their device home screen
  - _Given_ I am using a compatible browser on my device
  - _When_ I choose to add the app to my home screen
  - _Then_ the app should be added as a shortcut on my home screen for easier access

### Feature 6: Display Charts Visualizing Event Data

#### User Story

- As a user,
  I should be able to see charts describing the data about selected events, such as the number of upcoming events in each city,
  So that I can see the frequency of events in different locations to learn about the culture in selected cities.

#### Possible Scenarios

- **_Scenario_**: Show a chart with the number of upcoming events in each city
  - _Given_ I am on the main page
  - _When_ I navigate to the chart section
  - _Then_ I should see a chart displaying the number of upcoming events in each city
