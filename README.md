# meet

## Description

Meet is a serverless, progressive web application with React using a test-driven development technique. Users can filter events by city, show/hide event details, specify number of events, use the app when offline, add an app shortcut to the home screen, and view a chart showing the number of upcoming events by city.

## User Stories

#### Feature 2: Show/Hide an events details

As a user, I should be able to expand details of events, So that I can read more about events I’m interested in.

#### Feature 3: Specify number of events

As a user,
I should be able to control the number of events shown per screen,
So that I can see more or less events.
 
#### Feature 4: Use App when offline
As a user,
I should be able to see events while offline,
So that I can still see information when I’m out of internet range.
 
#### Feature 5: Data visualization
As a user,
I should be able to see the number of upcoming events in a city,
So that I can quickly visualize events.
 
### Gherkin

#### Feature 2: Show/Hide an event’s details
Given user is looking at events
When the user clicks to see more
Then the user will see an expanded copy of the event details.
 
#### Feature 3: Specify number of events
Given user is searching events on main page
When the user clicks on the number of events shown
Then more or less events will populate 
 
#### Feature 4: Use the app when offline
Given user is not connected to internet
When user uses app to read events details
Then user will see event information without connection to internet
 
#### Feature 5: Data visualization
Given main page is open
When user looks at multiple cities
Then user will see number of upcoming events in listed cities
 
## How to Run:

npm install npm run start
npm run build to create a production build

## Dependencies

* testing-library/jest-dom
* testing-library/react
* testing-library/user-event
* react
* react-dom
* react-scripts
* web-vitals
* workbox-background-sync
* workbox-broadcast-update
* workbox-cacheable-response
* workbox-core
* workbox-expiration,
* workbox-google-analytics,
* workbox-navigation-preload,
* workbox-precaching,
* workbox-range-requests,
* workbox-routing,
* workbox-strategies,
* workbox-streams

### DevDependencies
gh-pages

##API Used:
This application uses Google Calendar API to fetch upcoming events

