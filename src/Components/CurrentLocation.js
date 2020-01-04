import React, { Component } from 'react';

export class CurrentLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.currentLocation = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        },
          () => {
            var weatherLat = `${this.state.latitude}`;
            var weatherLng = `${this.state.longitude}`;
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${weatherLat}&lon=${weatherLng}&units=metric&appid=d59b34a020afa6209f89fc580b9b02a2`)
              .then(response => response.json())
              .then(responseJson => {
                //console.log(responseJson);
                //console.log(responseJson.weather);
                this.setState({
                  data: [responseJson]
                })
              })
              .catch(error => {
                console.log(error);
              });
          });
      },
      error => this.setState({ error: error.message })
    );
  }

  render() {

    return (
      <React.Fragment>

        <div className="container offset-lg-4 col-lg-4 text-center">
          <h3 className="m-3">Current Weather</h3>

          <div className="card shadow-sm">
            <div className="card-body">
              {this.state.data.map(weatherapidata =>
                <div key={weatherapidata.id}>
                  <img src={`http://openweathermap.org/img/w/${weatherapidata.weather[0].icon}.png`} alt="weather-icon" className="img-fluid" />
                  <h4>{weatherapidata.name}, {weatherapidata.sys.country}</h4>
                  <hr />

                  <p>
                    <b>Latitude:</b> {weatherapidata.coord.lat} <br />
                    <b>Longitude:</b> {weatherapidata.coord.lon} <br />
                    <b>Temperature:</b> {weatherapidata.main.temp}°C<br />
                    <b>Feels Like:</b> {weatherapidata.main.feels_like}°C<br />
                    <b>Description:</b> {weatherapidata.weather[0].description}
                  </p>

                  <hr />

                </div>
              )
              }
            </div>
          </div> {/*  end of weather card  */}

        </div>
      </React.Fragment>
    );
  }
}

export default CurrentLocation;