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
    loading: true
  }

  updateEvents = (location, numberOfEvents) => {
    console.log('events');
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

  // updateCitySearch = (location) => {
  //   this.setState({ currentCity: location });
  //   const { numberOfEvents } = this.state;
  //   this.updateEvents(location, numberOfEvents);
  // }

  updateNumberOfEvents(eventNumber) {
    console.log('NumberOfEvents')
    this.setState({ numberOfEvents: eventNumber });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, eventNumber);
  }

  componentWillMount() {
    this.setState({ loading: true });
  }

  componentDidMount() {
   
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ 
        events: events.slice(0, numberOfEvents), 
        locations: extractLocations(events),
        loading: false 
        });
      }
    });
  }

  render() {
    // if (this.state.loading)
    //   return <Loader />
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

        { this.state.loading ? <Loader /> : ''}

        <EventList 
          events={this.state.events} 
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );  
  }
  
}

export default App;
