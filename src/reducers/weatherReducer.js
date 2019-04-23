import { GET_LOCATION, FETCH_WEATHER } from '../actions/types';

const initialState = {
    data: [], 
    lat: '',
    long: ''

};

export default function (state = initialState, action){
    switch (action.type) {
        case GET_LOCATION:
        return {
            ...state,
            lat: action.payload,
            long: action.payload
        };
        case FETCH_WEATHER:
        return {
            ...state,
            data:action.payload
        };
        default:
        return state;
    }
}