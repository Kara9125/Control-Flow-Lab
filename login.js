var userLogin = {
   userName: "Kara",
   password: "Nicholas"
}

var password;

for (var i = 0; i < 3; i++) {
   password = prompt("Enter password for " + userLogin.userName);
   if (password === userLogin.password) {
       console.log("That is the correct password!");
       break;
   } else {
       console.log("That is the wrong password!  Try again!");
       if (i === 2) {
           alert("No more password attempts!");
       }
   }
}