import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    
    state= {
        numberOfEvents: 15,
    };

    handleInputChanged = (e) => {
        const value = e.target.value;
        
        this.setState({
            numberOfEvents: value
        });
        if (value < 1 | value > 32) {
            this.setState({
                numberOfEvents: value,
                infoText: 'Enter a number between 1 and 32.',
            });
        } else {
            return this.setState({
                numberOfEvents: value,
                infoText: ''
            });
        }


        this.props.updateNumberOfEvents(value);

    }

    render() {
        const numberOfEvents = this.state.numberOfEvents;
        return (
            <div className='NumberOfEvents'>
                <label 
                    className='number-label'>
                    Number of Events:
                </label>
                <ErrorAlert text={this.state.infoText} />
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