export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) return { Authorization: user.authToken };
  return {};
}
