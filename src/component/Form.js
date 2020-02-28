import React from "react";
import FormInput from "./FormInput.js";
import { checkContinueStrInvalid } from "./../common.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errorTxt: null
    };
  }

  sendForm = e => {
    e.preventDefault();
    let email = this.state.email;
    let pwd = this.state.password;
    if (!(email && pwd)) {
      this.setErrorHandler("請輸入信箱及密碼！");
      return false;
    }
    if (!checkContinueStrInvalid(this.state.email, this.state.password, 6)) {
      this.setErrorHandler(
        "請輸入密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複信箱及密碼！"
      );
      return false;
    }
    this.setErrorHandler();
    alert("password check success!");
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  setErrorHandler(msg = "") {
    this.setState({ errorTxt: msg });
  }
  render() {
    let errorClass =
      "error icon-cancel-circle " + (this.state.errorTxt ? "active" : "");
    return (
      <form className="login-form">
        <label className={errorClass}>{this.state.errorTxt}</label>
        {this.props.el.map(input => (
          <FormInput
            key={input.name}
            name={input.name}
            icon={input.icon}
            placeholder={input.placeholder}
            title={input.title}
            link={input.link}
            onChangeHandler={this.handleInputChange}
          />
        ))}

        <div className="footer-block">
          <span className="signup">
            No account? <a href="/">Signup</a>
          </span>
          <button type="button" onClick={this.sendForm}>
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
