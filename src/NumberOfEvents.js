import React, { Component } from 'react';
// import { mockData } from './mock-data';
// import { getEvents } from './api';

class NumberOfEvents extends Component {
    
    state= {
        numberOfEvents: 15,
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
    
        this.setState({
            numberOfEvents: value
        });
        
    }


    render() {
        const numberOfEvents = this.state.numberOfEvents;
        return (
            <div className='NumberOfEvents'>
                <label 
                    className='number-label'>
                    Number of Events:
                </label>
                <input 
                    type='number' 
                    id='number-events' 
                    className='number-events' 
                    value={numberOfEvents}
                    onChange={(e) => this.handleInputChanged(e)} 
                    placeholder={numberOfEvents}
                />
            </div>
        );
    }
}

export default NumberOfEvents