class Registration {
    /////////////////////////////////
    // METHOD FOR READING FORM INPUT
    /////////////////////////////////
    static readFormInput() {
        const email = (document.querySelector("#email") as HTMLInputElement).value
        const fullName = (document.querySelector("#fullname") as HTMLInputElement).value
        const userName = (document.querySelector("#username") as HTMLInputElement).value
        const password = (document.querySelector("#password") as HTMLInputElement).value
        const confirmPassword = (document.querySelector("#confirm-password") as HTMLInputElement).value
        return {
            email,
            fullName,
            userName,
            password,
            confirmPassword
        }
    }
    ////////////////////////////////////////////////////////////
    // REDIRECT USER TO LOGIN PAGE ONCE REGISTRATION IS COMPLETE
    ////////////////////////////////////////////////////////////
    static redirect() {
        if (window.location.href == ".http://127.0.0.1:5500/Register.html") {
            window.location.replace("http://127.0.0.1:5500/login.html");
        }
    }
    ///////////////////////////////
    // METHOD FOR REGISTERING USER
    ///////////////////////////////
    static async registerUser(event: Event) {
        event.preventDefault();
        let userInput = Registration.readFormInput()
        if (userInput.email === '' || userInput.fullName === '' || userInput.userName === '' || userInput.password === '' || userInput.confirmPassword === '') {
            alert('Please fill all fields before submitting.');
        } else {
            const response = await fetch("http://localhost:3000/users");
            const users = await response.json();
            // LOOP THROUGH RESPONSE
            for (let user of users) {
                ////////////////////////////////////
                // CSHECK IF USERNAME ALREADY EXISTS
                ////////////////////////////////////
                if (userInput.userName == user.Username) {
                    alert("Username already exists,choose another")
                    return;
                } else {
                    await fetch("http://localhost:3000/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userInput)
                    })
                    return user;
                }
            }
            Registration.redirect();
        }
    }
}
// SELECTOR | SIGN UP BUTTON
const signUpBtn = document.getElementById("signupbtn") as HTMLElement;
// EVENT LISTENER
signUpBtn.addEventListener("click", Registration.registerUser);



///////////////////////////
////////// TODO //////////
/////////////////////////
// if(userInput.password !== userInput.confirmPassword){
//     alert("Passwords dont match")
// }