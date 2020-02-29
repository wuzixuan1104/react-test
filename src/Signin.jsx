import React from "react";

import Header from "./component/Header.js";
import ChooseType from "./component/ChooseType.js";
import AuthForm from "./component/AuthForm.js";
import FooterBg from "./component/FooterBg.js";

import { ACCOUNT_TYPES, FORM_ELEMENTS } from "./data.js";

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }
  sendForm = data => {
    // if (!this.verifyParams(data)) return false;
    alert("password check success!");
  };
  render() {
    return (
      <div className="account-type-page">
        <Header title="Sign Up" />

        <div className="type-block">
          <ChooseType types={ACCOUNT_TYPES} />
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
