import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
// import arrow from './img/arrow.svg';
// import './App.css';

class NumberOfEvents extends Component {
    
    state= {
        numberOfEvents: 15,
        infoText: '',
    };

    handleInputChanged = (event) => {
       
        // const value = event.target.value;
        const numberOfEvents = event.target.value;
        // console.log(value);

        // this.setState({
        //     numberOfEvents: e.target.value,
        // });

        console.log(this)
        
        if (numberOfEvents < 1 || numberOfEvents > 32) {
            this.setState({
                numberOfEvents: '',
                infoText: 'Enter a number between 1 and 32.',
            });
        } else {
            this.setState({
                numberOfEvents,
                infoText: '',
                
            });
            
        } 
      
        this.props.updateEvents('', numberOfEvents);
    };

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
                    onChange={this.handleInputChanged}
                    placeholder={numberOfEvents}
                />
                {/* <button className="arrow">
                    <img src={arrow} alt="Enter" 
                        className="arrow-btn"
                        onClick={this.handleInputChanged}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                this.handleInputChanged(e)
                            }
                        }}
                        >
                    </img>
                </button> */}
            </div>
        );
    }
}

export default NumberOfEvents