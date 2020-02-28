import React from "react";
import "./css/icon.css";
import "./css/login.css";

import Header from "./component/Header.js";
import ChooseType from "./component/ChooseType.js";
import Desc from "./component/Desc.js";
import Form from "./component/Form.js";
import FooterBg from "./component/FooterBg.js";

const ACCOUNT_TYPES = [
  { title: "Doctor", pic: "asset/img_doctor_90@3x.svg", active: true },
  { title: "Patient", pic: "asset/img_patient_90@3x.svg" }
];
const DESC_LISTS = [
  "Hello doctor!",
  "Please fill out the form below to get started"
];

export default class App extends React.Component {
  render() {
    return (
      <div class="account-type-page">
        <Header title="Choose Account Type" />

        <div class="type-block">
          {ACCOUNT_TYPES.map(type => (
            <ChooseType
              title={type.title}
              pic={type.pic}
              active={type.active}
            />
          ))}
        </div>

        <Desc lists={DESC_LISTS} />

        <Form />

        <FooterBg type="image/svg+xml" pic="asset/img_town_370x170@3x.svg" />
      </div>
    );
  }
}
