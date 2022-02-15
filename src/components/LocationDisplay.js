import React, { Component } from 'react';

class LocationDisplay extends Component {
    render() { 
        return (
            <div id="locationInfo">
                <h1 id="location">{this.props.name}, {this.props.region}</h1>
                <p className="info" id="day">{this.props.dayOfWeek}</p>
                <p className="info" id="weather">{this.props.text}</p>
            </div>
        );
    }
}
 
export default LocationDisplay;