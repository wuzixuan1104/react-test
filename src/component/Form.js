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
        icon: "icon-mail",
        placeholder: "Username",
        title: "Email",
        link: { name: "Forgot?", href: true }
      }
    ];
    return (
      <form class="login-form">
        <label class="error icon-cancel-circle">error happend</label>

        {inputEl.map(input => (
          <FormInput
            icon={input.icon}
            placeholder={input.placeholder}
            title={input.title}
            link={input.link}
          />
        ))}

        <div class="footer-block">
          <span class="signup">
            No account? <a href>Signup</a>
          </span>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

export default Form;
