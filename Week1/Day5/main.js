
let username;
let password;

function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if((username=="Ishwari") && (password=="123")){
        alert("Login Success")
    }

    else{
        alert("Login failed!!")
    }
}