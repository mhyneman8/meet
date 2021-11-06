import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './nprogress.css';

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
    numberOfEvents: 14,
    currentCity: 'all',
    loading: true,
    showWelcomeScreen: undefined
  }

  updateEvents = (location, numberOfEvents) => {
    console.log('events');
    // const { currentCity, numberOfEvents } = this.state;
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
      ?
        events.slice(0, numberOfEvents)
      :
        events.filter((event) => event.location === location);

        this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        currentCity: location,
        numberOfEvents: numberOfEvents
        });
    });
  }

  updateCitySearch(location) {
    console.log('CitySearch');
    this.setState({ currentCity: location });
    const { numberOfEvents } = this.state;
    this.updateEvents(location, numberOfEvents);
  }

  updateNumberOfEvents(eventNumber) {
    console.log('NumberOfEvents')
    this.setState({ numberOfEvents: eventNumber });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, eventNumber);
  }

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
    }
      if (!navigator.onLine) {
        this.setState({
          infoText:
            "You are offline. Events displayed may not be up-to-date",
        });
      } else {
        this.setState({
          infoText: "",
        });
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
        <div className="title">
          <h1 className="title-text">
            Meet App
          </h1>
          <CitySearch  
            updateCitySearch={(e) => this.updateCitySearch(e)}
            locations={this.state.locations} 
          />

        </div>
        
        <NumberOfEvents 
          updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)}
        />

        { this.state.loading ? <Loader /> : ''}
        { !navigator.onLine ? <InfoAlert text='You are currently offline. The data shown may not be current.' /> : '' }

        <h4 className="mt-4">Events in each city</h4>

        <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                View Number of Events in {this.state.currentCity}
              </Accordion.Header>
              <Accordion.Body>
                <ResponsiveContainer height={300} width={400}>
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
                  >
                    <CartesianGrid />
                    <XAxis type="category" dataKey="city" name="city" />
                    <YAxis
                      type="number"
                      dataKey="number"
                      name="number of events"
                    />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter data={this.getData()} fill="#ff715b" />
                  </ScatterChart>
                </ResponsiveContainer>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header className="font-weight-bold">
                View Most Popular Types of Events in{" "}
                {this.state.currentCity}
              </Accordion.Header>
              <Accordion.Body>
              <EventGenre events={this.state.events} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        {/* <div className="data-vis-wrapper">

          <EventGenre events={this.state.events} />

          <ResponsiveContainer height={350} width={500}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
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
              <Scatter data={this.getData()} fill="#ff715b" />
            </ScatterChart>
          </ResponsiveContainer>
        </div> */}

        <EventList 
          events={this.state.events} 
        />

        <WelcomeScreen 
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} 
        />
      </div>
    );  
  }
}

export default App;
