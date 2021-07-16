import {GRAPH_FETCH } from '../actions/types';
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = null, action) {
  switch (action.type) {
    case GRAPH_FETCH:
      return action.payload || false;
    default:
      return state;
  }
}
