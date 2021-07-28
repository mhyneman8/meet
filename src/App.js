import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import axios from 'axios';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
// import { mockData } from './mock-data';
import { extractLocations, getEvents } from './api';
// import NProgress from 'nprogress';


class App extends Component {
  state = {
    events: [],
    locations: []
  }

  // checkToken() {
  //   const checkToken = async (accessToken) => {
  //     const result = await fetch(
  //       `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  //     )
  //       .then((res) => res.json())
  //       .catch((error) => error.json());
  //     return result;
  //   };
  // }
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

  // getAccessToken() {
  //   const accessToken = localStorage.getItem('access_token');
  //   const tokenCheck = accessToken && (await checkToken(accessToken));

  //   if (!accessToken || tokenCheck.error) {
  //     await localStorage.removeItem("access_token");

  //     const searchParams = new URLSearchParams(window.location.search);
  //     const code = await searchParams.get("code");

  //     if (!code) {
  //       const results = await axios.get("https://k3o9f64iji.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");

  //       const { authUrl } = results.data;
  //       return (window.location.href = authUrl);
  //     };
  //     return code && getAccessToken(code);
  //   } 
  //   return accessToken;
  // }

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
