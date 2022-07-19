function Account() {

    
    
    let email= document.getElementById("email").value;
    let Studentname= document.getElementById("Studentname").value;
    let Collegename= document.getElementById("Collegename").value;
    let branch= document.getElementById("branch").value;
    let add= document.getElementById("add").value;
    let mobile_number= document.getElementById("mobile_number").value;
    let password= document.getElementById("password").value;
    
    if((Studentname=="Ishwari") && (password=="Hello")){
        alert("Login Success")
    }

    else{
        alert("Login failed!!")
    }

    document.write(email +"<br/>" + Studentname + "<br/>" + Collegename + "<br/>" + branch + "<br/>" + add + "<br/>" + mobile_number + "<br/>" + password);
    
}