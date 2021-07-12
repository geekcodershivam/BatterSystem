import React,{useEffect} from 'react'
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import history from '../history';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    backgroundColor:'blue' ,
  },
  a:{
    textDecoration: 'none',
    color:'white'
  }
}));
function Landing(props) {
  const classes = useStyles();

  useEffect(()=>{
    switch (props.auth) {
      case null:
        return;
      case false:
           history.push('/')
        return;
      default:
         history.push('/dashboard')
         return; 
      }
  },[props])
  
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
     <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.btn}
        startIcon={<LockOutlinedIcon/>}
      >
        <a className={classes.a} href="/auth/google">Login with google</a>
      </Button>
    </div>
    </Container>
    
  )
}
function mapStateToProps(state){
  return {auth:state.auth}
}
export default connect(mapStateToProps, null)(Landing);
