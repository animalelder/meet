Feature: Specify Number of Events

 Scenario: When the user hasn’t specified a number, 32 events are shown by default.
  Given a user has not specified the number of events
  When the user views the events section
  Then 32 events are shown by default

 Scenario: When the user specifies the number of events.
  Given a user has specified the number of events
  When the user views the events section 
  Then the app displays exactly as many events as the user specified