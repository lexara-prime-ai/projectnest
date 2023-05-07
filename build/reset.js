"use strict";
// class UserReset {
//     static async updatePassword(id:number) {
//         const response = await fetch(`http://localhost:3000/users/${id}`);
//         const user = await response.json();
//         if (!user) {
//           throw new Error("User not found");
//         }
//     const username = (document.getElementById("username") as HTMLInputElement).value;
//     const password = (document.getElementById("password") as HTMLInputElement).value;
//     const confirmPassword = (document.getElementById("confirmpassword") as HTMLInputElement).value;
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     user.password = password
//          await fetch(`http://localhost:3000/users/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(user),
//         });
//         console.log("updated")
//       }
//   }
//   const passwordResetForm = document.getElementById("sentbtn") as HTMLElement;
//   passwordResetForm.addEventListener("submit" ,  UserReset.updatePassword
// )
//   //   const userReset = new UserReset();
//   //   try {
//   //     await userReset.updatePassword;
//   //     alert("Password reset successful");
//   //   } catch (error) {
//   //       alert(`Password reset failed: ${error}`);
//   //   }
//   // });
// //   async function forgotPassword(username: string, newPassword: string) {
// //     const userReset = new UserReset();
// //     const response = await fetch(`http://localhost:3000/users/${username}`);
// //     const user = await response.json();
// //   }
// //     if (!user) {
// //       alert("User not found");
// //       return;
// //     }
// //     await userReset.updatePassword(username, newPassword);
// //   }
// //   const passwordResetForm = document.getElementById("password-reset-form") as HTMLButtonElement;
// //   passwordResetForm.addEventListener("submit", async (event) => {
// //     event.preventDefault(); 
// //   const PasswordII = document.querySelector("#passwordII") as HTMLInputElement;
// //   const password = document.querySelector("#password") as HTMLInputElement;
// //     if (password !== PasswordII) {
// //       alert("Passwords do not match");
// //       return;
// //     }
// //     alert("Password reset successful");
// //   });
//# sourceMappingURL=reset.js.map