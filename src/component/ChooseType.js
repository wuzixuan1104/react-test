import React from "react";
import Type from "./Type.js";

class ChooseType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: Math.ceil(this.props.types.length / 2),
      currentPage: 1,
      types: this.props.types,
      typeSelectIdx: 1
    };
  }
  changePage = e => {
    if (this.state.page === 1) return;

    let newPage = parseInt(e.target.getAttribute("mode"), 10)
      ? this.state.currentPage + 1
      : this.state.currentPage - 1;

    if (newPage > 0 && newPage < this.state.page + 1) {
      this.setState({ currentPage: newPage });
    }
  };
  clickType = id => {
    this.setState({ typeSelectIdx: id });
  };
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

        {this.state.types.map(type => (
          <Type
            key={type.id}
            id={type.id}
            title={type.title}
            pic={type.pic}
            active={type.id === this.state.typeSelectIdx}
            clickFunc={() => this.clickType(type.id)}
          />
        ))}
      </div>
    );
  }
}

export default ChooseType;
