import config from "react-global-configuration";
import { authHeader } from "../helper";
import { checkContinueStrInvalid } from "./../function/common.js";

export const userService = {
  checkFormVerify,
  login,
  logout,
  signin,
  getAll
};

function checkFormVerify(data, type) {
  if (!type) return { error: "請選擇登入帳戶類型！" };

  if (
    !(data && typeof data === "object" && "email" in data && "password" in data)
  )
    return { error: "請填寫完整表單！" };

  let email = data.email;
  let pwd = data.password;

  if (!(email && pwd)) return { error: "請輸入信箱及密碼！" };
  if (pwd.length < 6) return { error: "密碼至少6碼以上" };

  if (!checkContinueStrInvalid(email, pwd, 6)) {
    return {
      error:
        "請輸入密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複信箱及密碼！"
    };
  }
  return true;
}

function login(email, password, type) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, type })
  };

  return fetch(`${config.get("apiUrl")}/users/checkAuth`, requestOptions)
    .then(handleResponse)
    .then(user => {
      if (user) {
        user.authdata = window.btoa(email + ":" + password + ":" + type);
        localStorage.setItem("user", JSON.stringify(user));
      }
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`${config.get("apiUrl")}/users`, requestOptions).then(
    handleResponse
  );
}

function signin(email, password, type) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, type })
  };

  return fetch(`${config.get("apiUrl")}/users/signin`, requestOptions)
    .then(handleResponse)
    .then(allUsers => {
      if (allUsers) {
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
      }
      return allUsers;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
