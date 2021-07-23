import React, { Component } from 'react';
import { mockData } from './mock-data';

class Event extends Component {
   
    state = {
        summary: "",
        description: "",
        location: "",
        dateTime: "",
        show: false,
    };

    handleShowButton = () => {
        // this.setstate = { show: !this.state.show };
        if (this.state.show === true) {
            this.setState({ show: false});
        } else {
            this.setState({ show: true});
        }
    };   

    render() {
     
        return (
            <div className="event">
                <div className="event-list">
                    <h1 className="event-title">
                        {this.state.summary}
                    </h1>
                    <p className="event-location">
                        {this.state.location}
                    </p>
                    <p className="event-dateTime">
                        {this.state.dateTime}
                    </p>
                   
                    <button 
                        onClick = { () => this.handleShowButton()}
                        className="show-more">
                            Show more
                    </button>
                    { this.state.show === true && 
                        (<div className="details">
                            <h2>About Event: </h2>
                            <p>{this.state.description}</p>
                            <button
                                onClick = {() => this.handleShowButton()}
                                className="show-less">
                                    Show less
                            </button>
                        </div> )
                    }
                </div>                    
            </div>
        )
    }
}

export default Event;