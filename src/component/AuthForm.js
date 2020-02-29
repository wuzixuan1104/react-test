import React from "react";
import FormInput from "./FormInput.js";
import { ErrorLabelWithIcon, SuccessLabel } from "./../widget/Alert.js";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  render() {
    let showAlert = null;
    const resp = this.props.response;

    if (resp !== null) {
      if ("error" in resp && resp.error)
        showAlert = (
          <ErrorLabelWithIcon active="true"> {resp.error} </ErrorLabelWithIcon>
        );
      else if ("success" in resp && resp.success)
        showAlert = <SuccessLabel active="true"> {resp.success} </SuccessLabel>;
    }

    return (
      <form className="login-form">
        {showAlert}

        {this.props.el.map(el => {
          if (el.htmlTag.toLowerCase() === "input")
            return (
              <FormInput
                key={el.name}
                name={el.name}
                icon={el.icon}
                placeholder={el.placeholder}
                title={el.title}
                link={el.link}
                onChangeHandler={this.handleInputChange}
              />
            );
          return null;
        })}

        <div className="footer-block">
          <span className="signup">
            {this.props.authType.toLowerCase() === "login" && (
              <span>
                No account? <a href="/signin">Signup</a>
              </span>
            )}
          </span>

          <button
            type="button"
            onClick={() => this.props.submitFunc(this.state)}
          >
            {this.props.authType}
          </button>
        </div>
      </form>
    );
  }
}

export default AuthForm;
