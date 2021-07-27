import React, { Component } from 'react';
import { mockData } from './mock-data';
import { getEvents } from './api';

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
            <div>
                <label 
                    // for='number-events' 
                    className='number-label'>
                    Number of Events:
                </label>
                <input 
                    type='text' 
                    id='number-events' 
                    className='number-events' 
                    value={this.state.eventNumber}
                    onChange={this.handleInputChanged} 
                    placeholder={this.state.eventNumber}
                />
                {/* not sure why I wanted this */}
                {/* <div>{mockData}</div>   */}
            </div>
            

        );
    }
}

export default NumberOfEvents