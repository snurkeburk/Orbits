function logIn() {   
    let error = document.getElementById("error");
    let inputVal = document.getElementById("username");
    let inputValPw = document.getElementById("password");
    let a = "asd";
    let b = "asd";
    if(inputVal.value==a && inputValPw.value == b){
        console.log("login successful");
        loggedIn = true;
        window.location.href = "/index.html";

   // confirm();
} else {
    console.log("username / password incorrect!")
    loggedIn = false;
    error.style.color = "red";
}

}


function visitor(){
    loggedIn = false;
    window.location.href = "/visitor.html";
}

function redirectAsVisitor(){
    setTimeout(() => { window.location.href = "/index.html"; ; }, 1000);
    

}