
import { FETCH_ALERTS,DELETE_ALERT } from '../actions/types';
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_ALERTS:
      return action.payload || false;
    case DELETE_ALERT:
      return {...state,delete:action.payload}
    default:
      return null;
  }
}
