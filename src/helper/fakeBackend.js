export function fakeBackend() {
  let users = [
    {
      id: 1,
      email: "hi.shari.wu@gmail.com",
      password: "123456"
    }
  ];
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // authenticate
        if (url.endsWith("/users/checkAuth") && opts.method === "POST") {
          let params = JSON.parse(opts.body);
          let filteredUsers = users.filter(user => {
            return (
              user.email === params.email && user.password === params.password
            );
          });

          if (filteredUsers.length > 0) {
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              email: user.email
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson))
            });
          } else {
            reject("信箱及密碼不正確");
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

        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
