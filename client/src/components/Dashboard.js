import React from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import '../Assets/css/dashboard.css';
import  Header from './Header'
function Dashboard(props) {
  console.log(props);
  
  return (<>
  <Header name="Dashboard"/>
  <Wrapper/>
  </>)
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, null)(Dashboard);
