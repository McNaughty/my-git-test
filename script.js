/*const h3 = document.createElement("h2");
h3.textContent = "Welcome to the fun club. This space is managed by McNaughty herself!";

document.querySelector("body").appendChild(h3); */

//login code

const loginFm = document.getElementById("login-form");
const loginBtn = document.getElementById("loginfm-submit");
const loginErrMsg = document.getElementById("login-error-msg");


loginBtn.addEventListener("click",(e) =>{
    e.preventDefault();

    const username = loginFm.username.value;
    const password = loginFm.password.value;

    if (username ==="user" && password === "user"){
        alert("Kudos to you bazuu!");
    } else {
        alert("Access Denied.");
    }
    
})