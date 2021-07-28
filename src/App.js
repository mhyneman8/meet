import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 15
  }

// checked 
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
      ?
        events
      :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

// checked
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  // checked
  componenetWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      
      <div className="App">
        <CitySearch  locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );  
  }
  
}

export default App;
