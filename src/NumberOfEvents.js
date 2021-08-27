import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import arrow from './img/arrow.svg';
// import './App.css';



class NumberOfEvents extends Component {
    
    state= {
        numberOfEvents: 15,
    };

    handleInputChanged = (e) => {
        // e.preventDefault();
        // const value = e.target.value;
        
        console.log(e.target.value);

        this.setState({
            numberOfEvents: e.target.value,
        });

        console.log(this.state.numberOfEvents)
        const value = this.state.numberOfEvents;
        if (value < 1 || value > 32) {
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
                <button className="arrow">
                    <img src={arrow} alt="Enter" 
                        className="arrow-btn"
                        onClick={this.handleInputChanged} >
                    </img>
                </button>
            </div>
        );
    }
}

export default NumberOfEvents