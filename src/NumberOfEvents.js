import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import './NumberOfEvents.css';

class NumberOfEvents extends Component {
    
    state= {
        numberOfEvents: 14,
        errorText: ''
    };

    handleInputChanged = (e) => {
        const value = e.target.value;

        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: '',
                errorText: 'Enter a number between 1 and 32.',
            });
        } else {
            this.setState({
                numberOfEvents: value,
                errorText: '',
            });
            this.props.updateNumberOfEvents(value);
        }
    }

    render() {
        const numberOfEvents = this.state.numberOfEvents;
        return (
            <div className='NumberOfEvents'>
                <label 
                    className='number-label'>
                    Number of Events:
                </label>

                <ErrorAlert text={this.state.errorText} />

                <input 
                    type='number' 
                    id='number-of-events' 
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