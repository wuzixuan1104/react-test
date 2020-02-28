import React from "react";
import FormInput from "./FormInput.js";

class Form extends React.Component {
  render() {
    let inputEl = [
      {
        type: "text",
        icon: "icon-mail",
        placeholder: "Username",
        title: "Email",
        link: null
      },
      {
        type: "password",
        icon: "icon-key1",
        placeholder: "Password",
        title: "Password",
        link: { name: "Forgot?", href: "/" }
      }
    ];
    return (
      <form className="login-form">
        <label className="error icon-cancel-circle">error happend</label>

        {inputEl.map(input => (
          <FormInput
            key={input.title}
            icon={input.icon}
            placeholder={input.placeholder}
            title={input.title}
            link={input.link}
          />
        ))}

        <div className="footer-block">
          <span className="signup">
            No account? <a href="/">Signup</a>
          </span>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

export default Form;
