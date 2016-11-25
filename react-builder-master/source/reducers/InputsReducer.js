import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/ActionTypes';


const initialState = Map({
  input: ''
});



function setInputValue(state, value) {
  let newState = Map({
    input: value
  });
  return state.merge(newState);
}

export default function artists(state=initialState, action) {
  switch(action.type) {
    case types.SET_INPUT_VALUE:
      return setInputValue(state, action.value);

    default:
      return state;
  }
}
