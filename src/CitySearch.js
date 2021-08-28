import React, { Component} from 'react';

class CitySearch extends Component {
    state = {
        query: '',
        // locations: this.props.locations,
        suggestions: [],
        showSuggestions: false
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });

        this.setState({ 
            query: value,
            suggestions,
         });
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            // suggestions: [],
            showSuggestions: false,
           
        });
        this.props.updateEvents(suggestion, null);
        // this.props.updateCitySearch(suggestion);
    };

    render() {
        return (
            <div className="CitySearch">
                <label>Search City:</label>
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
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >
                                {suggestion}
                        </li>
                    ))}
                    <li key={'all'}
                        onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch