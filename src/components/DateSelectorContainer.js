import React, { Component } from 'react';
import '../styles/DateSelectorContainer.css';
import DateSelector from './DateSelector';

class DateSelectorContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedIndex: 0
        }
    }

    handleReselect = (index) => {
        this.setState({ selectedIndex: index });
        this.props.onSelect(this.generateWeatherInfo(index));
    }

    generateWeatherInfo(index) {
        // if (index === 0) {
        //     const current = this.props.weather.current;
        //     console.log(current)
        //   return {
        //     icon: current.condition.icon,
        //     text: current.condition.text,
        //     temp_f: current.temp_f,
        //     temp_c: current.temp_c,
        //     precip_in: current.precip_in,
        //     precip_mm: current.precip_mm,
        //     humidity: current.humidity,
        //     wind_mph: current.wind_mph,
        //     wind_kph: current.wind_kph,
        //     last_updated_epoch: current.last_updated_epoch
        //   }
        // } else {
        const day = this.props.weather.forecast.forecastday[index].day;
        return {
            icon: day.condition.icon,
            text: day.condition.text,
            temp_f: day.avgtemp_f,
            temp_c: day.avgtemp_c,
            precip_in: day.totalprecip_in,
            precip_mm: day.totalprecip_mm,
            humidity: day.avghumidity,
            wind_mph: day.maxwind_mph,
            wind_kph: day.maxwind_kph,
            last_updated_epoch: this.props.weather.forecast.forecastday[index].date_epoch,
            maxtemp_f: day.maxtemp_f,
            maxtemp_c: day.maxtemp_c,
            mintemp_f: day.mintemp_f,
            mintemp_c: day.mintemp_c
        };
        // }
      }

    render() {
        return (
            <div id="dateSelectorContainer">
                {/*[...Array(8).keys()].map(i => <div key={i} >{i}</div>)*/}
                {[...Array(this.props.weather.forecast.forecastday.length).keys()].map(i => <DateSelector weatherInfo={this.generateWeatherInfo(i)} key={i} index={i} className={i === this.state.selectedIndex ? "selected" : ""} onClick={this.handleReselect} isFar={this.props.isFar} />)}
            </div>
        );
    }
}

export default DateSelectorContainer;