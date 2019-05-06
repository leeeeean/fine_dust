import { FETCH_DUST } from '../actions';
import { SELECT_LOCATION } from '../actions';
import axios from 'axios';

const url = 'https://api.waqi.info/feed/seoul/?token=70d8efad38844b4d5582432b51abd6e1bf419a20';

var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
var t= JSON.parse(xmlHttp.responseText);
export default function(state = {
  loading: false, error: '', cities: {[t.data.idx]:t}, id: [t.data.idx]
}, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
  // case `${FETCH_DUST}_PENDING`:
  //   return {
  //     loading: true,
  //     error: '',
  //     cities:{
  //       ...state.cities
  //       },
  //       id: []
  //   };
  case `${FETCH_DUST}_FULFILLED`:
    if (action.payload.data.status === 'ok') {
      return {
        loading: false,
        error: '',
        cities: {
          ...state.cities,
          [action.payload.data.data.idx]: action.payload.data
          },
        id: [action.payload.data.data.idx]
      };  
    } else {
      return{
        loading: false,
        error: 'error',
        cities: {
          ...state.cities
        },
        id: []
      };
    };
  case `${FETCH_DUST}_REJECTED`:
    return {
      loading: false,
      error: 'error',
      cities: {
        ...state.cities
      },
      id: []
    };
  // case `${SELECT_LOCATION}_PENDING`:
  //   return {
  //     loading: true,
  //     error: '',
  //     cities: {
  //       ...state.cities
  //     },
  //     id: []
  //   };
  case `${SELECT_LOCATION}_FULFILLED`:
    if (action.payload.data.status === 'ok') {
      return {
        loading: false,
        error: '',
        cities: {
          ...state.cities,
          [action.payload.data.data.idx]: action.payload.data
          },
        id: [action.payload.data.data.idx]
      };  
    } else {
      return{
        loading: false,
        error: 'error',
        cities: {
          ...state.cities
        },
        id: []
      };
    };
  case `${SELECT_LOCATION}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      cities: {
        ...state.cities
      },
      id: []
    };
  default:
    return state;
  }

}