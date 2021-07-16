import React,{useEffect} from 'react'
import {fetchAlerts} from '../actions/alertAction'
import { connect } from 'react-redux';
import Tables from './Tables';
function TableControl(props) {

useEffect(()=>{
 props.fetchAlerts()
},[props])


const data = (props.alert.data==={})?[]:props.alert.data;
  return (
 <Tables data={data}/>
  )
}

function mapStateToProps(state) {
  return { alert:state.alert };
}
export default connect(mapStateToProps, {fetchAlerts})(TableControl);
