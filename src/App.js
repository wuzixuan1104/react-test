import React from "react";
import "./css/icon.css";
import "./css/login.css";

import Header from "./component/Header.js";
import ChooseType from "./component/ChooseType.js";
import Desc from "./component/Desc.js";
import Form from "./component/Form.js";
import FooterBg from "./component/FooterBg.js";

const ACCOUNT_TYPES = [
  { id: 1, title: "Doctor", pic: "asset/img_doctor_90@3x.svg", active: true },
  { id: 2, title: "Patient", pic: "asset/img_patient_90@3x.svg" },
  { id: 3, title: "Doctor", pic: "asset/img_doctor_90@3x.svg", active: true },
  { id: 4, title: "Patient", pic: "asset/img_patient_90@3x.svg" }
];
const DESC_LISTS = [
  "Hello doctor!",
  "Please fill out the form below to get started"
];

export default class App extends React.Component {
  render() {
    return (
      <div className="account-type-page">
        <Header title="Choose Account Type" />

        <div className="type-block">
          <ChooseType types={ACCOUNT_TYPES} />
        </div>

        <Desc lists={DESC_LISTS} />

        <Form />

        <FooterBg type="image/svg+xml" pic="asset/img_town_370x170@3x.svg" />
      </div>
    );
  }
}
