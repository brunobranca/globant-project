import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/ActionTypes';


const initialState = Map({
  isFetching: false,
  items: List(),
  details: Map()
});


function receiveArtists(state, artistsList) {
  var newState = fromJS({
    items: artistsList.items,
    isFetching: false
  });
  return state.merge(newState);
}


function requestArtists(state) {
  let newState = Map({
    isFetching: true
  });
  return state.merge(newState);
}


function receiveArtistDetails(state, artist) {
  var newState = fromJS({
    details: artist, // TODO:
    isFetching: false
  });
  return state.merge(newState);
}


function requestArtistDetails(state) {
  let newState = Map({
    isFetching: true
  });
  return state.merge(newState);
}


export default function artists(state=initialState, action) {
  switch(action.type) {
    case types.RECEIVE_ARTISTS:
      return receiveArtists(state, action.artists);

    case types.REQUEST_ARTISTS:
      return requestArtists(state);

    case types.RECEIVE_ARTIST_DETAILS:
      return receiveArtistDetails(state, action.artist);

    case types.REQUEST_ARTIST_DETAILS:
      return requestArtistDetails(state);

    default:
      return state;
  }
}
