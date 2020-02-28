import React from "react";

class Type extends React.Component {
  render() {
    let activeClass = "type-content ";
    activeClass += this.props.active ? "active" : "";

    return (
      <section className={activeClass}>
        <div className="img">
          <embed type="image/svg+xml" src={this.props.pic} />
        </div>
        <b className="title">{this.props.title}</b>
        <span className="check-marker icon-checkmark" />
      </section>
    );
  }
}

export default Type;
