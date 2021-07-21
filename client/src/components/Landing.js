import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import history from "../history";
const btn = {
  backgroundColor: "blue",
};

class Landing extends Component {
  componentDidMount() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        history.push("/");
        return;
      default:
        history.push("/dashboard");
        return;
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div
          style={{
            marginTop: "64px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={btn}
            startIcon={<LockOutlinedIcon />}
            onClick={(e) => {
              window.location.href = "/auth/google";
            }}
          >
            Login with google
          </Button>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, null)(Landing);
