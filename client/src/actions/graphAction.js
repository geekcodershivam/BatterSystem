import {GRAPH_FETCH} from './types';
import axios from 'axios';
export const FetchGraphsData = (data) => async (dispatch) => {
  const res = await axios.get('/api/fetchGraphs');
  dispatch({ type: GRAPH_FETCH, payload: res.data.data});

}