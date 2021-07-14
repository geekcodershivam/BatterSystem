import React from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import '../Assets/css/dashboard.css';
function Dashboard(props) {
  console.log(props.auth);
  
  return <Wrapper/>
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, null)(Dashboard);
