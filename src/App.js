import WeatherDisplay from './components/WeatherDisplay';
import DateSelectorContainer from './components/DateSelectorContainer';
import './styles/App.css';
import React, { Component } from 'react';
import { Helmet } from "react-helmet";


class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {},
      weatherInfo: {},
      isFar: true
    };
  }

  componentDidMount() {
    this.tick();
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  tick() {
    let ref = this;
    navigator.geolocation.getCurrentPosition(function(pos) {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      const url = `https://api.weatherapi.com/v1/forecast.json?key=c561f3d5588f44d59a8234059212112&q=${lat},${long}&days=6`;

      ref.getWeather(url).then(data => {
        ref.setState({ weather: data});
        ref.setState({ weatherInfo: ref.generateWeatherInfo(true) });
      })
    })
    
    
    // console.log(this.state);
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  handleTempChange = (isFar) => {
    this.setState({ isFar: isFar });
  }

  generateWeatherInfo(isCurrent) {
    if (isCurrent) {
      return {
        icon: this.state.weather.current.condition.icon,
        text: this.state.weather.current.condition.text,
        temp_f: this.state.weather.current.temp_f,
        temp_c: this.state.weather.current.temp_c,
        precip_in: this.state.weather.current.precip_in,
        precip_mm: this.state.weather.current.precip_mm,
        humidity: this.state.weather.current.humidity,
        wind_mph: this.state.weather.current.wind_mph,
        wind_kph: this.state.weather.current.wind_kph,
        last_updated_epoch: this.state.weather.current.last_updated_epoch
      }
    }
  }

  handleReselect = (weatherInfo) => {
    this.setState({ weatherInfo: weatherInfo });
  }

  async getWeather(url) {    
    // const url = "http://api.weatherapi.com/v1/forecast.json?key=c561f3d5588f44d59a8234059212112&q=Louisville&days=6";

    const response = await fetch(url);
    const data = await response.json();
    
    return data
  }

  render() {
    if (this.state.weather.current === undefined) { return <div>Loading...</div> }
  

    try {
      return (
      <div>
        <Helmet>
          <title>Simple weather app</title>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Helmet>

          <div id="mainContainer">
            <div id="alignContainer">
              <WeatherDisplay weatherInfo={this.state.weatherInfo} weather={this.state.weather.current} location={this.state.weather.location} handleTempChange={this.handleTempChange}/>
              <DateSelectorContainer weather={this.state.weather} isFar={this.state.isFar} onSelect={this.handleReselect} />
            </div>
        </div>
      </div>
      );
    } catch (e) {
      return <div id="loading">Loading...</div>
    }

  };
}

export default App;
