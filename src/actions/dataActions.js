import { GET_LOCATION, FETCH_WEATHER } from './types';

export const fetchWeatherdata = () => dispatch => {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=d59b34a020afa6209f89fc580b9b02a2')
    .then(res => res.json())
       .then(data =>
         dispatch({
           type: FETCH_WEATHER,
           payload: data
         })
       );
   }

export const getLocation = () => {
    return function (dispatch) {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Not Supported'));
            }
            navigator.geolocation.getCurrentPosition((position) => {
                var action = {
                    type: GET_LOCATION,
                    payload: {
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    }
                }
                resolve(position);
                dispatch(action)
            }, () => {
                reject(new Error('Permission denied'));
            });
        });
    }
};


