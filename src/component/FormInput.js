import React from "react";

class FormInput extends React.Component {
  render() {
    let iconClass = "icon " + this.props.icon;
    return (
      <label className="input-block">
        <i className={iconClass} />
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
        <span className="type-title">{this.props.title}</span>

        {this.props.link !== null && (
          <a href={this.props.link.href} className="forgot">
            {this.props.link.name}
          </a>
        )}
      </label>
    );
  }
}

export default FormInput;
