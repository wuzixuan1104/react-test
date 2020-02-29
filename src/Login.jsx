import React from "react";

import Header from "./component/Header.js";
import ChooseType from "./component/ChooseType.js";
import Desc from "./component/Desc.js";
import AuthForm from "./component/AuthForm.js";
import FooterBg from "./component/FooterBg.js";

import { userService } from "./service";

import { ACCOUNT_TYPES, DESC_LISTS, FORM_ELEMENTS } from "./data.js";
import { checkContinueStrInvalid } from "./function/common.js";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }
  sendForm = data => {
    // if (!this.verifyParams(data)) return false;
    //send axios
    userService.login(data.email, data.password).then(
      user => {
        const { from } = this.props.location.state || {
          from: { pathname: "/home" }
        };
        this.props.history.push(from);
      },
      error => {
        this.setErrorHandler("登入失敗！");
      }
    );
  };

  verifyParams(data) {
    if (
      !(
        data &&
        typeof data === "object" &&
        "email" in data &&
        "password" in data
      )
    ) {
      this.setErrorHandler("請填寫完整表單！");
      return false;
    }

    let email = data.email;
    let pwd = data.password;

    if (!(email && pwd)) {
      this.setErrorHandler("請輸入信箱及密碼！");
      return false;
    }
    if (!checkContinueStrInvalid(email, pwd, 6)) {
      this.setErrorHandler(
        "請輸入密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複信箱及密碼！"
      );
      return false;
    }
    this.setErrorHandler();
    return true;
  }

  setErrorHandler(msg = "") {
    let response = { error: msg };
    this.setState({ response });
  }

  render() {
    return (
      <div className="account-type-page">
        <Header title="Choose Account Type" />

        <div className="type-block">
          <ChooseType types={ACCOUNT_TYPES} />
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
