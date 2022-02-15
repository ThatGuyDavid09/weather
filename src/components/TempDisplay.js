import React, { Component } from 'react';

class TempDisplay extends Component {
    render() { 
        return  <p id="temp">{this.props.temp}</p>;
    }
}

export default TempDisplay;