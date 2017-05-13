import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
  renderWeather(e) {
    const name = e.city.name;
    const temps = e.list.map(weather => weather.main.temp);
    const pressures = e.list.map(weather => weather.main.pressure);
    const humidities = e.list.map(weather => weather.main.humidity);
    const { lon, lat } = e.city.coord;

    return (
      <tr key={ name }>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="red" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
};

const mapDispatchToProps = ({ weather }) => {
  return {
    weather: weather
  };
};

export default connect(mapDispatchToProps)(WeatherList);
