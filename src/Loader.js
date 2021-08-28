import React, { Component } from 'react';
import Spinner from './img/Spinner.svg';

class Loader extends Component {
    
    render() {
        return (
            <div className="loader">
                <img src={Spinner} alt="loading spinner"></img>
            </div>
        )
    }
}

export default Loader;
