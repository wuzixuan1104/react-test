import React from "react";

class Alert extends React.Component {
  render() {
    return (
      <label className={this.props.className}>{this.props.children}</label>
    );
  }
}

export class SuccessLabel extends React.Component {
  render() {
    return (
      <Alert className={"success " + (this.props.active && "active")}>
        {this.props.children}
      </Alert>
    );
  }
}

export class ErrorLabel extends React.Component {
  render() {
    return (
      <Alert className={"error " + (this.props.active && "active")}>
        {this.props.children}
      </Alert>
    );
  }
}

export class ErrorLabelWithIcon extends React.Component {
  render() {
    return (
      <Alert
        className={
          "error icon-cancel-circle " + (this.props.active && "active")
        }
      >
        {this.props.children}
      </Alert>
    );
  }
}
