import React from "react";
import "./css/icon.css";
import "./css/login.css";

import Header from "./component/Header.js";
import ChooseType from "./component/ChooseType.js";
import Desc from "./component/Desc.js";
import Form from "./component/Form.js";
import FooterBg from "./component/FooterBg.js";

import { ACCOUNT_TYPES, DESC_LISTS, FORM_ELEMENTS } from "./data.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="account-type-page">
        <Header title="Choose Account Type" />

        <div className="type-block">
          <ChooseType types={ACCOUNT_TYPES} />
        </div>

        <Desc lists={DESC_LISTS} />

        <Form el={FORM_ELEMENTS} />

        <FooterBg type="image/svg+xml" pic="asset/img_town_370x170@3x.svg" />
      </div>
    );
  }
}
