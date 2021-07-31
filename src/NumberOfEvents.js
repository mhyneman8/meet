import React, { Component } from 'react';
// import { mockData } from './mock-data';
// import { getEvents } from './api';

class NumberOfEvents extends Component {
    
    state= {
        eventNumber: 15,
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
    
        this.setState({
            eventNumber: value
        });
    }


    render() {
        return (
            <div className='numberOfEvents'>
                <label 
                    className='number-label'>
                    Number of Events:
                </label>
                <input 
                    type='number' 
                    id='number-events' 
                    className='number-events' 
                    value={this.state.eventNumber}
                    onChange={this.handleInputChanged} 
                    placeholder={this.state.eventNumber}
                />
            </div>
        );
    }
}

export default NumberOfEvents