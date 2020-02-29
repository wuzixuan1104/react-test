import config from "react-global-configuration";
import { authHeader } from "../helper";

export const userService = {
  login,
  logout,
  getAll
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };

  return fetch(`${config.get("apiUrl")}/users/checkAuth`, requestOptions)
    .then(handleResponse)
    .then(user => {
      if (user) {
        user.authdata = window.btoa(email + ":" + password);
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
