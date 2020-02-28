import React from "react";

class ChooseType extends React.Component {
  render() {
    let activeClass = "type-content ";
    activeClass += this.props.active ? "active" : "";

    return (
      <section className={activeClass}>
        <div class="img">
          <embed type="image/svg+xml" src={this.props.pic} />
        </div>
        <b class="title">{this.props.title}</b>
        <span class="check-marker icon-checkmark" />
      </section>
    );
  }
}

export default ChooseType;
