import React from "react";

class FormInput extends React.Component {
  render() {
    let iconClass = "icon " + this.props.icon;
    return (
      <label class="input-block">
        <i className={iconClass} />
        <input type={this.props.type} placeholder={this.props.placeholder} />
        <span class="type-title">{this.props.title}</span>
        {this.props.link !== null && (
          <a href={this.props.link.href} class="forgot">
            {this.props.link.name}
          </a>
        )}
      </label>
    );
  }
}

export default FormInput;
