import React from "react";

class FooterBg extends React.Component {
  render() {
    return (
      <figure className="footer-bg">
        <embed type={this.props.type} src={this.props.pic} />
      </figure>
    );
  }
}

export default FooterBg;
