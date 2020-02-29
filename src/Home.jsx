import React from "react";

import Header from "./component/Header.js";
import Desc from "./component/Desc.js";
import FooterBg from "./component/FooterBg.js";
import Logout from "./component/Logout.js";

export default class Home extends React.Component {
  render() {
    const logoutStyle = { marginTop: "50px" };
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="account-type-page">
        <Header title="Welcome Back!" />

        <Desc lists={["Hi, " + user.email, "Have a good day!"]} />

        <Logout styleObj={logoutStyle} />

        <FooterBg type="image/svg+xml" pic="asset/img_town_370x170@3x.svg" />
      </div>
    );
  }
}
