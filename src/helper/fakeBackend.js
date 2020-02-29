export function fakeBackend() {
  let users = [
    {
      type: 1,
      email: "hi.shari.wu@gmail.com",
      password: "123456"
    }
  ];
  let dbUsers = JSON.parse(localStorage.getItem("allUsers"));
  if (dbUsers) users = users.concat(dbUsers);

  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/users/checkAuth") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          let filteredUsers = users.filter(user => {
            return (
              user.email === params.email &&
              user.password === params.password &&
              user.type === params.type
            );
          });

          if (filteredUsers.length > 0) {
            let user = filteredUsers[0];
            let responseJson = {
              type: user.type,
              email: user.email
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson))
            });
          } else {
            reject("login fail");
          }

          return;
        }

        if (url.endsWith("/users") && opts.method === "GET") {
          if (
            opts.headers &&
            opts.headers.Authorization === `Basic ${window.btoa("test:test")}`
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users))
            });
          } else {
            resolve({ status: 401, text: () => Promise.resolve() });
          }

          return;
        }

        if (url.endsWith("/users/signin") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          let filteredUsers = users.filter(user => {
            return user.email === params.email && user.type === params.type;
          });

          if (filteredUsers.length < 1) {
            users = users.concat(params);
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users))
            });
          } else {
            reject("sign in fail");
          }

          return;
        }

        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
