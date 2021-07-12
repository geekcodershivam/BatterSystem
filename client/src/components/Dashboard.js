import React from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import '../Assets/css/dashboard.css';
function Dashboard(props) {
  console.log(props.auth);
  // return (
  //   <>
  //     <div className="item sidebar">
  //       <SideBar/>
  //     </div>
  //     <div className="item content-0">
  //       <Wrapper/>
  //     </div>
  //   </>
  // );
  return <h3>gfgnngfmgdhgf</h3>
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, null)(Dashboard);
