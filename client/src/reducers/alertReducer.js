import { FETCH_ALERTS, DELETE_ALERT, CREATE_ALERT } from '../actions/types';
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {data:{},createOrdelete:""}, action) {
  switch (action.type) {
    case FETCH_ALERTS:
      return {data:action.payload || false};
    case DELETE_ALERT:
    case CREATE_ALERT:
      return {...state,createOrdelete:action.payload};
    default:
      return state;
  }
}
