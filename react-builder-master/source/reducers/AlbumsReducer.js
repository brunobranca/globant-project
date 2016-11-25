import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/ActionTypes';


const initialState = Map({
  isFetching: false,
  items: List(),
  details: Map(),
  total: 0
});


function receiveArtistAlbums(state, artistAlbums, totalAlbums) {
  var newState = fromJS({
    items: artistAlbums,
    isFetching: false,
    total: totalAlbums
  });
  return state.merge(newState);
}


function requestArtistAlbums(state) {
  let newState = Map({
    isFetching: true
  });
  return state.merge(newState);
}


function receiveAlbumDetails(state, albumDetails) {
  var newState = fromJS({
    details: albumDetails, 
    isFetching: false
  });
  return state.merge(newState);
}

function requestAlbumDetails(state) {
  let newState = Map({
    isFetching: true
  });
  return state.merge(newState);
}


export default function artistAlbums(state=initialState, action) {
  switch(action.type) {
    case types.RECEIVE_ARTIST_ALBUMS:
      return receiveArtistAlbums(state, action.albums, action.total);

    case types.REQUEST_ARTIST_ALBUMS:
      return requestArtistAlbums(state);

    case types.RECEIVE_ALBUM_DETAILS:
      return receiveAlbumDetails(state, action.details);

    case types.REQUEST_ALBUM_DETAILS:
      return requestAlbumDetails(state);

    default:
      return state;
  }
}
