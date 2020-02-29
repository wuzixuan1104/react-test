import React from "react";

import Header from "./component/Header.js";
import ChooseType from "./component/ChooseType.js";
import AuthForm from "./component/AuthForm.js";
import FooterBg from "./component/FooterBg.js";

import { userService } from "./service";

import { ACCOUNT_TYPES, FORM_ELEMENTS } from "./data.js";

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      accountType: 1
    };
  }
  sendForm = data => {
    const isVerify = userService.checkFormVerify(data, this.state.accountType);
    if (typeof isVerify === "object" && "error" in isVerify) {
      this.setErrorHandler(isVerify.error);
      return false;
    }
    //clear error message
    this.setErrorHandler();
    userService.signin(data.email, data.password, this.state.accountType).then(
      user => {
        const { from } = this.props.location.state || {
          from: { pathname: "/login" }
        };
        alert("註冊成功！請重新登入！");
        this.props.history.push(from);
      },
      error => {
        this.setErrorHandler("註冊失敗，此帳號已註冊！");
      }
    );
  };
  changeType = id => {
    this.setState({ accountType: id });
  };

  setErrorHandler(msg = "") {
    let response = { error: msg };
    this.setState({ response });
  }

  render() {
    return (
      <div className="account-type-page">
        <Header title="Sign Up" />

        <div className="type-block">
          <ChooseType types={ACCOUNT_TYPES} clickFunc={this.changeType} />
        </div>

        <AuthForm
          authType="Signin"
          el={FORM_ELEMENTS}
          submitFunc={this.sendForm}
          response={this.state.response}
        />

        <FooterBg type="image/svg+xml" pic="asset/img_town_370x170@3x.svg" />
      </div>
    );
  }
}
