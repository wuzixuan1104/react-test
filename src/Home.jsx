import React from "react";

import Header from "./component/Header.js";
import Desc from "./component/Desc.js";
import FooterBg from "./component/FooterBg.js";

export default class Home extends React.Component {
  render() {
    return (
      <div className="account-type-page">
        <Header title="Welcome Back!" />

        <Desc lists={["Hi Shari", "Have a good day!"]} />

        <FooterBg type="image/svg+xml" pic="asset/img_town_370x170@3x.svg" />
      </div>
    );
  }
}
