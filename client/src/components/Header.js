import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  console.log(props.auth);
  return (
    <div></div>
  );
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, null)(Header);
