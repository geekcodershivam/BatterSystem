import React from 'react';
import { connect } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
function Header(props) {
  console.log(props.auth);
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '10px 10px 10px 10px',
      marginBottom: '25px',
      borderBottom: '1px solid #cecfd8'
    }}>
      <FormLabel
          style={{ fontWeight: '600', color: '#0d1148' }}
          component="legend"
        >
          {props.name}
        </FormLabel>
      
      <FormLabel style={{
            display: 'inline-flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontWeight: '600', 
            color: '#0d1148'
      }}>
        <h4>Carlsberg Group</h4>
      <NotificationsActiveIcon style={{marginLeft: '18px'}}frontSize="large"/>
      </FormLabel>
    </div>
  );
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, null)(Header);
