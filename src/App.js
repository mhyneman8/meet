import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Loader from './Loader';
import WelcomeScreen from './WelcomeScreen';
import { InfoAlert } from './Alert';

import { extractLocations, getEvents, checkToken, getAccessToken } from './api';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 15,
    currentCity: 'all',
    loading: true,
    // showWelcomeScreen: undefined
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

  // componentWillMount() {
  //   this.setState({ loading: true });
  // }

  async componentDidMount() {
   
    const { numberOfEvents } = this.state;
    this.mounted = true;

    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {

      getEvents().then((events) => {
        if (this.mounted) {
        this.setState({ 
          events: events.slice(0, numberOfEvents), 
          locations: extractLocations(events),
          loading: false 
          });
        }
      });
      if (!navigator.onLine) {
        this.setState({
          infoText:
            "You are offline. Events displayed may not be up-to-date",
        });
      } else {
        return this.setState({
          infoText: "",
        });
      }
    }
  }
  render() {
    if (this.state.showWelcomeScreen === undefined) 
      return <div className="App" />
    
    return (
      <div className="App">
        <h1 className="title">
          Meet App
        </h1>

        <InfoAlert text={this.state.infoText} />

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

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );  
  }
  
}

export default App;
