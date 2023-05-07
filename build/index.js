"use strict";
// interface Userinfo {
//   password: string;
//   userName: string;
// }
// class logins {
//   async Showuser(username: string, password: string) {
//     const response = await fetch("http://localhost:3000/users");
//     const users: Userinfo[] = await response.json();
//     const user = users.find((u) => u.userName === username);
//     if (user && user.password === password) {
//       // If the username and password match, redirect the user to another page
//       window.location.href = "oops.html";
//     } else {
//       alert("Username or password is incorrect.");
//     }
//     if (username === "admin") {
//       window.location.href = "register.html";
//     }
//   }
// }
// const loginForm = document.getElementById("login-form") as HTMLFormElement;
// // Add an event listener to the form's submit event
// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent the default form submission
//   // Get the username and password input values from the form
//   const usernameInput = document.getElementById("username") as HTMLInputElement;
//   const passwordInput = document.getElementById("password") as HTMLInputElement;
//   const username = usernameInput.value;
//   const password = passwordInput.value;
//   // Call the authenticateUser function and pass in the username, password, and event
//   new logins().Showuser(username, password);
// });
//# sourceMappingURL=index.js.map