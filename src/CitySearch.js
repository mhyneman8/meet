import React, { Component} from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: false
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We can\'t find that city. Please try another city.',
            });
        } else {
            this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            infoText: '',
            showSuggestions: false,
        });
        this.props.updateCitySearch(suggestion);
        // this.props.updateEvents(suggestion);
    };

    // handleClose = () => {
    //     this.setState({
    //         showSuggestions: false
    //     });
    // }

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
                    onBlur={() => { this.setState({ showSuggestions: false}) }}
                />
                
                <ul className="suggestions"
                    style={this.state.showSuggestions ? {}: { display: 'none' }}
                >
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion}
                            onMouseDown={() => this.handleItemClicked(suggestion)}
                        >
                                {suggestion}
                        </li>
                    ))}
                    <li key={'all'}
                        onMouseDown={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch