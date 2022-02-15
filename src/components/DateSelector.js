import React, { Component } from 'react';
import '../styles/DateSelector.css';

class DateSelector extends Component {
    render() {
        const baseJsx = (
            <div className={this.props.className} onClick={() => this.props.onClick(this.props.index)}>
                test
            </div>
        );

        if (this.props.weatherInfo === {}) { return baseJsx; }

        var a = new Date(this.props.weatherInfo.last_updated_epoch * 1000);
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var dayOfWeekShort = days[a.getDay()].substring(0,3);
        
        return (
            <div className={this.props.className} onClick={() => this.props.onClick(this.props.index)}>
                <div className="dayDataContainer">
                    <p className="dayShort">{dayOfWeekShort}</p>
                    <img className="styleImg" src={this.props.weatherInfo.icon} alt={this.props.text} />
                </div>
                <div className="tempDataContainer">
                    <p className="maxTemp tempData">{this.props.weatherInfo[this.props.isFar ? "maxtemp_f" : "maxtemp_c"]}</p>
                    <p className="minTemp tempData">{this.props.weatherInfo[this.props.isFar ? "mintemp_f" : "mintemp_c"]}</p>
                </div>
            </div>
        );
    }   
}

export default DateSelector;