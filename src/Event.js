import React, { Component } from 'react';
import { mockData } from './mock-data';

class Event extends Component {
   
    state = {
        show: false,
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
        return (
            <div className="events">
                <ul className="event-list">
                    <li className="event-title">
                        {event.summary}
                        <div className="show-hide-details">
                            
                            {!this.state.show
                                ? <button className="show-more"
                                    onClick={() => this.handleShowButton()}
                                    >Show More</button>
                                : <button className="show-less"
                                    onClick={() => this.handleShowButton()}
                                    >Show Less</button>
                            } 
                        </div>
                        <button className="show-hide">Show more</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Event;