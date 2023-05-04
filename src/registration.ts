interface Userinfo {
    Usersemail: string;
    Userfullname: string;
    Username: string;
    PasswordII: string;
    password: string;
  }
  
  
  class Users{
      async Showusers(){
      const response = await fetch (' http://localhost:3000/users');
      const users = await response.json()
    //console.log(users);
  
      }
  }
  new Users().Showusers()
  
  class UserData{
      async adddata(input: Userinfo) {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const result = await response.json();
      console.log(result);
    }
  }
  
  const addButton = document.querySelector("#signupbtn") as HTMLButtonElement;
  addButton.addEventListener("click", (e:Event)=> {
    e.preventDefault(); 
    const Usersemail= document.querySelector("#username1") as HTMLInputElement;
    const Userfullname = document.querySelector("#username2") as HTMLInputElement;
    const Username= document.querySelector("#username3") as HTMLInputElement;
    const PasswordII = document.querySelector("#passwordII") as HTMLInputElement;
    const password = document.querySelector("#password") as HTMLInputElement;
  
    if (Usersemail.value === '' || Userfullname.value === '' || Username.value === '' || PasswordII.value === '' || password.value === '') {
      e.preventDefault(); 
      alert('Please fill all fields before submitting.');
      return;
    }
    const input: Userinfo = {
      
      Usersemail:Usersemail.value,
      Userfullname: Userfullname.value,
      Username: Username.value,
      PasswordII: PasswordII.value,
      password: password.value,
    };
    new UserData().adddata(input);
  })
  
  
  