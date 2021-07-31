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
    eventNumber: 15,

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
      if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  // checked
  componenetWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      
      <div className="App">
        <h1>Meet App</h1>

        <CitySearch  locations={this.state.locations} 
          updateEvents={this.updateEvents}
          // numberOfEvents={this.state.eventNumber}  
        />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents} />
      </div>
    );  
  }
  
}

export default App;
