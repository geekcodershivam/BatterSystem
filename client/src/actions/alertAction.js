import axios from 'axios';
import history from '../history';
import {FETCH_ALERTS,DELETE_ALERT,CREATE_ALERT } from './types';
export const fetchAlerts = () => async (dispatch) => {
  const res = await axios.get('/api/fetchAll');
  dispatch({ type: FETCH_ALERTS, payload: res.data.data });
  
};

export const deletAlerts = (id) => async (dispatch) => {
  console.log(id)
  const res = await axios.delete(`http://localhost:5000/api/delete/${id}`);
  dispatch({ type: DELETE_ALERT, payload: res.data});
};

export const creatAlerts = (data) => async (dispatch) => {
  console.log(data)
  const res = await axios.post('/api/createAlert',data);
  dispatch({ type: CREATE_ALERT, payload: res.data});
  history.push('/dashboard')
}