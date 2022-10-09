const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const logoutForm = document.querySelector(".logout_btn")
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginsubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("USERNAME_KEY", loginInput.value);
    PaintGreetings();
}

function PaintGreetings() {
    const username = localStorage.getItem("USERNAME_KEY");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

console.log(savedUsername);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginsubmit);
} else {
    PaintGreetings();
}


function openLogoutBtn() {
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
}

greeting.addEventListener("click", openLogoutBtn);

function logoutBtn() {
    localStorage.clear("");
}

logoutForm.addEventListener("click", logoutBtn);