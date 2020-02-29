import React from "react";

import Header from "./component/Header.js";
import ChooseType from "./component/ChooseType.js";
import Desc from "./component/Desc.js";
import AuthForm from "./component/AuthForm.js";
import FooterBg from "./component/FooterBg.js";

import { userService } from "./service";

import { ACCOUNT_TYPES, DESC_LISTS, FORM_ELEMENTS } from "./data.js";

export default class Login extends React.Component {
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

    userService.login(data.email, data.password, this.state.accountType).then(
      user => {
        const { from } = this.props.location.state || {
          from: { pathname: "/" }
        };
        this.props.history.push(from);
      },
      error => {
        this.setErrorHandler("登入失敗！");
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
        <Header title="Choose Account Type" />

        <div className="type-block">
          <ChooseType types={ACCOUNT_TYPES} clickFunc={this.changeType} />
        </div>

        <Desc lists={DESC_LISTS} />

        <AuthForm
          authType="Login"
          el={FORM_ELEMENTS}
          submitFunc={this.sendForm}
          response={this.state.response}
        />

        <FooterBg type="image/svg+xml" pic="asset/img_town_370x170@3x.svg" />
      </div>
    );
  }
}
