import React, { Component} from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        locations: this.props.locations,
        suggestions: [],
        showSuggestions: undefined
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({showSuggestions:true});
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We can\'t find that city. Please try another city.',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                // showSuggestions: false,
                infoText: ''
            });
        }

        // this.setState({ 
        //     query: value,
        //     suggestions,
        //  });
        this.props.updateEvents(value, null);
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            suggestions: [],
            // showSuggestions: false
        });
        this.props.updateEvents(suggestion);
    };

    handleClose = () => {
        this.setState({
            showSuggestions: false
        });
    }

    render() {
        return (
            <div className="CitySearch">
                <label>Search City:</label>
                <InfoAlert text={this.state.infoText} />
                <input
                    type="text"
                    className="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => { this.setState({ showSuggestions: true }) }}
                />
                
                <ul className="suggestions"
                    style={this.state.showSuggestions ? {}: { display: 'none' }}
                >
                    <span 
                        className="close"
                        onClick={() => this.handleClose()}
                    >x</span>
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >
                                {suggestion}
                        </li>
                    ))}
                    <li
                        onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch