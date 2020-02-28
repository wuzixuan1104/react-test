import React from "react";
import Type from "./Type.js";

class ChooseType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: Math.ceil(this.props.types.length / 2),
      currentPage: 1
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(e) {
    if (this.state.page === 1) return;

    let newPage = parseInt(e.target.getAttribute("mode"), 10)
      ? this.state.currentPage + 1
      : this.state.currentPage - 1;

    if (newPage > 0 && newPage < this.state.page + 1) {
      this.setState({ currentPage: newPage });
    }
  }
  render() {
    return (
      <div className="type-content-block" data-index={this.state.currentPage}>
        {this.state.page !== 1 && (
          <label
            className="arrow prev icon-keyboard_arrow_left"
            mode="0"
            onClick={this.changePage}
          />
        )}
        {this.state.page !== 1 && (
          <label
            className="arrow next icon-keyboard_arrow_right"
            mode="1"
            onClick={this.changePage}
          />
        )}

        {this.props.types.map(type => (
          <Type
            key={type.id}
            title={type.title}
            pic={type.pic}
            active={type.active}
          />
        ))}
      </div>
    );
  }
}

export default ChooseType;
