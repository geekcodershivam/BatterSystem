import React from 'react';
import '../Assets/css/wrapper.css';
import Forms from './Forms'
import Tables from './Tables';
import {connect} from 'react-redux'
function Wrapper(props) {
  const data=props.alert===null ? []: props.alert;
  return (
    <div className="wrapper">
      <div className="item content-1">Forms</div>
      <Forms  />
      {/* <div >Content-3</div> */}
      <Tables data={data}/>
    </div>
  );
}

function mapStateToProps({alert}){
  return {alert};
}
export default connect(mapStateToProps,null)(Wrapper)
