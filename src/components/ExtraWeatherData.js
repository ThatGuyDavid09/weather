import React, { Component } from 'react';

class ExtraWeatherData extends Component {
    render() { 
        return (
            <div id="extraDataContainer">
                <p className="extraData">Precipitation: {this.props.percip}</p>
                <p className="extraData">Humidity: {this.props.humidity}%</p>
                <p className="extraData">Wind: {this.props.wind}</p>
            </div>
        );
    }
}
 
export default ExtraWeatherData;