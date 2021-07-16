import React from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import '../Assets/css/dashboard.css';
import Header from './Header';
function Peak() {
  return (
    <>
      <Header name="Peak Shaving & Alerts" />
      <Wrapper />
    </>
  );
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, null)(Peak);
