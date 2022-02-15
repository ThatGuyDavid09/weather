import React, { Component } from 'react';
import '../styles/TempButtons.css';

class TempButtons extends Component {
    constructor() {
        super();
        this.state = {
            isFar: true
        };
    }

    changeTempType = (isFar) => {
        this.setState({ isFar: isFar });
        this.props.onChangeTempType(isFar);
    }

    render() {
        return (
            <div id="tempButtonsContainer">
                <p className="data" id={this.state.isFar ? "selected" : "unselected"} onClick={() => this.changeTempType(true)}>°F</p>
                <p id="seperator" className="data">|</p>
                <p className="data" id={this.state.isFar ? "unselected" : "selected"} onClick={() => this.changeTempType(false)}>°C</p>
            </div>
        );
    }
}

export default TempButtons;