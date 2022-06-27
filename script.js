
const valid = () => {
   const fname = document.getElementById("fname");
   const lname = document.getElementById("lname");
   const email = document.getElementById("email");
   const password = document.getElementById("password");
   const textError = document.getElementsByClassName("txt");
   

if (fname.value.length == '') {
   fname.className = "error"
   fname.removeAttribute("placeholder")
   textError[0].removeAttribute("hidden")
   
}

if (lname.value.length == '') {
   lname.className = "error"
   lname.removeAttribute("placeholder")
   textError[1].removeAttribute("hidden")
   
}

if (email.value.length == '') {
   email.className = "error"
   email.setAttribute("placeholder", "email@example/com")
   textError[2].removeAttribute("hidden")
}

if (password.value.length == '') {
   password.className = "error"
   password.removeAttribute("placeholder")
   textError[3].removeAttribute("hidden")
}

return false
};
