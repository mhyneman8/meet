import React, { Component } from 'react';

class Event extends Component {
   
    state = {
        summary: "",
        description: "",
        location: "",
        dateTime: "",
        timeZone: "",
        show: false
    };

    handleShowButton = () => {
        if (this.state.show === true) {
            this.setState({ show: false});
        } else {
            this.setState({ show: true});
        }
    };   

    render() {
        const { event } = this.props;
        const dateTime = new Date(event.start.dateTime).toLocaleTimeString();
        const date = new Date(event.start.dateTime).toLocaleDateString();
        
        return (
            <div className="event">
                <div className="event-list">
                    <h1 className="event-title">
                        {event.summary}
                    </h1>
                    <p className="event-location">
                        {event.location}
                    </p>
                    <p className="event-dateTime">
                        start: {dateTime} - {event.start.timeZone}
                    </p>
                    <p>
                        {date}
                    </p>
                   
                    <button 
                        onClick = { () => this.handleShowButton()}
                        className="details-btn">
                            {/* Show more */}
                            {!this.state.show ? 'Show Details' : 'Hide Details'}
                    </button>
                    { this.state.show === true && 
                        (<div className="details">
                            <h2>About Event: </h2>
                            <p>{event.description}</p>
                        </div> )
                    }
                </div>                    
            </div>
        )
    }
}

export default Event;