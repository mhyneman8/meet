import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import Loader from './Loader';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 15,
    currentCity: 'all',
    loading: false
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
      ?
        events.slice(0, numberOfEvents)
      :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        currentCity: location
      
        });
      }
    });
  }

  updateNumberOfEvents(eventNumber) {
    this.setState({ numberOfEvents: eventNumber });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, eventNumber);
  }

  componentWillMount() {
    this.setState({ loading: true });
  }

  componentDidMount() {
    this.setState({ loading: false });
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ 
        events: events.slice(0, numberOfEvents), 
        locations: extractLocations(events) });
      }
    });
  }

  componenetWillUnmount(){
    this.mounted = false;
  }

  render() {
    if (this.state.loading)
      return <Loader />
    return (
      
      <div className="App">
        <h1 className="title">
          Meet App
        </h1>

        <CitySearch  
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
          // numberOfEvents={this.state.numberOfEvents}  
          events={this.state.events}
        />

        <NumberOfEvents 
          updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)}
          // numberOfEvents={this.state.numberOfEvents}
        />

        <EventList 
          events={this.state.events} 
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );  
  }
  
}

export default App;
