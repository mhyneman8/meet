import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import Loader from './Loader';
import WelcomeScreen from './WelcomeScreen';
import { InfoAlert } from './Alert';
import EventGenre from './EventGenre';

import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 15,
    currentCity: 'all',
    loading: true,
    showWelcomeScreen: undefined
  }

  updateEvents = (location, eventCount) => {
    console.log('update events')
    console.log(eventCount)

    let locationEvents;
    getEvents().then((events) => {
      if (location === 'all' && eventCount === 0) {
        locationEvents = events;
      } else if (location !== 'all' && eventCount === 0) {
        locationEvents = events;
      } else if (location === '' && eventCount > 0) {
        locationEvents = events.filter((event) => event.location === location);
      } else if (location === '' && eventCount === '') {
        locationEvents = events;
      }

      // const locationEvents = (location === 'all')
      // ?
      //   events.slice(0, numberOfEvents)
      // :
      //   events.filter((event) => event.location === location);
      // if (this.mounted) {
        // const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          // events: filteredEvents,
          events: locationEvents,
          // .slice(0, numberOfEvents),
          currentCity: location,
          numberOfEvents: eventCount
        });
      // }
    });
  }

  // updateNumberOfEvents(eventNumber) {
  //   console.log('update num of events')
    
  //     this.setState({ numberOfEvents: eventNumber });
  //     const { currentCity } = this.state;
  //     this.updateEvents(currentCity, eventNumber); 
  // };
  // updateNumberOfEvents = newCount => {
  //   const { currentCity } = this.state;
  //   this.updateEvents(currentCity, newCount);
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

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift();
      return { city, number };
    })
    return data;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) 
      return <div className="App" />
    
    return (
      <div className="App">
        <h1 className="title">
          Meet App
        </h1>

        <CitySearch  
          locations={this.state.locations} 
          updateEvents={this.updateEvents}
          events={this.state.events}
        />

        <NumberOfEvents 
          // updateNumberOfEvents={this.updateNumberOfEvents}
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />

        { this.state.loading ? <Loader /> : ''}
        
        <InfoAlert text={this.state.infoText} />

        <h4>Events in each city</h4>

        <div className="data-vis-wrapper">

          <EventGenre events={this.state.events} />

          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />

              <XAxis type="category" 
                dataKey="city" 
                name="city" 
              />
              <YAxis type="number" 
                dataKey="number" 
                name="number of events"  
                allowDecimals={false} 
              />

              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        

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
