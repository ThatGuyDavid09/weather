import React, { Component } from 'react';

class WeatherDisplay extends Component {
    render() {
        return <img id="weatherIcon" src={this.props.icon} alt="current weather" />;
    }
}

export default WeatherDisplay;