import React, { Component } from 'react';
import '../styles/WeatherDisplay.css';
import TempButtons from './TempButtons';
import WeatherIcon from './WeatherIcon';
import ExtraWeatherData from './ExtraWeatherData';
import TempDisplay from './TempDisplay';
import LocationDisplay from './LocationDisplay';

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            isFar: true
        };
    }

    handleTempTypeChange = (isFar) => {
        this.setState({ isFar: isFar });
        this.props.handleTempChange(isFar);
    }

    render() {
        var a = new Date(this.props.weatherInfo.last_updated_epoch * 1000);
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var dayOfWeek = days[a.getDay()]


        return (
            <div id="weatherDataContainer">
                <WeatherIcon icon={this.props.weatherInfo.icon}/>
                <TempDisplay temp={Math.round(this.props.weatherInfo[this.state.isFar ? "temp_f" : "temp_c"])}/>
                <TempButtons onChangeTempType={this.handleTempTypeChange} />
                <ExtraWeatherData 
                    percip={this.props.weatherInfo[this.state.isFar ? "precip_in" : "precip_mm"]}
                    humidity={this.props.weatherInfo.humidity} 
                    wind={this.props.weatherInfo[this.state.isFar ? "wind_mph" : "wind_kph"]} 
                />
                <LocationDisplay 
                    name={this.props.location.name} 
                    region={this.props.location.region}
                    text={this.props.weatherInfo.text}
                    dayOfWeek={dayOfWeek}
                />
            </div>);
    }
}

export default WeatherDisplay;