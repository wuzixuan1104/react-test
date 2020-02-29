import React from "react";
import { Redirect } from "react-router-dom";
import { userService } from "./../service";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutFlag: false
    };
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ logoutFlag: true });
  };
  render() {
    if (this.state.logoutFlag) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div className="control-box" style={this.props.styleObj}>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Logout;
