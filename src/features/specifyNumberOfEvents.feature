Feature: Specify number of events

Scenario: When user has not specifed a number, 15 is the default nubmer.
Given the events have fully loaded
When the user doesn't specify the number of events
Then user will see a list of fifteen events.

Scenario: User can change the number of events
Given the events have fully loaded
When the user changes the number of events
Then user will see the chosen number of events.