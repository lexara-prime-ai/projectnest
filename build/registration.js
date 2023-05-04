"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Users {
    Showusers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(' http://localhost:3000/users');
            const users = yield response.json();
            //console.log(users);
        });
    }
}
new Users().Showusers();
class UserData {
    adddata(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });
            const result = yield response.json();
            console.log(result);
        });
    }
}
const addButton = document.querySelector("#signupbtn");
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const Usersemail = document.querySelector("#username1");
    const Userfullname = document.querySelector("#username2");
    const Username = document.querySelector("#username3");
    const PasswordII = document.querySelector("#passwordII");
    const password = document.querySelector("#password");
    if (Usersemail.value === '' || Userfullname.value === '' || Username.value === '' || PasswordII.value === '' || password.value === '') {
        e.preventDefault();
        alert('Please fill all fields before submitting.');
        return;
    }
    const input = {
        Usersemail: Usersemail.value,
        Userfullname: Userfullname.value,
        Username: Username.value,
        PasswordII: PasswordII.value,
        password: password.value,
    };
    new UserData().adddata(input);
});
//# sourceMappingURL=registration.js.map