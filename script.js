// Här sparas alla användarnamn och lösenord som funkar att logga in med på sidan
const allUsers = [
    {
        logInName: "jennie",
        logInPassword: "test",
    },
    {
        logInName: "ture",
        logInPassword: "test",
    },
    {
        logInName: "janne",
        logInPassword: "test",
    }
];

const button = document.querySelector(".button");
const logOutButton = document.querySelector(".buttonLogOut");
const text = document.querySelector(".text");

// När man klickar på logga ut knappen, kallar på en funktion
logOutButton.addEventListener("click", logOut)

// När man klickar på loggar in knappen, kallar på en funktion
button.addEventListener("click", logIn)

function logIn() {
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    for(const user of allUsers ){
        if(userName == user.logInName && password == user.logInPassword){
            localStorage.setItem("user", userName);
            setBodyDataLoggedIn();
            return;
        }
    }
    document.getElementById("error").style.display = "block";
    document.getElementById("notLoggedIn").style.display = "none";
}

function setBodyDataLoggedIn() {
    document.getElementById("logInForm").style.display = "none";
    document.getElementById("logOutForm").style.display = "block";
    document.getElementById("notLoggedIn").style.display = "none";
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("whoIsLoggedIn").innerText = localStorage.getItem("user");
}

function setBodyDataLogOut () {
    localStorage.clear();
    document.getElementById("logInForm").style.display = "block";
    document.getElementById("logOutForm").style.display = "none";
    document.getElementById("notLoggedIn").style.display = "block";
    document.getElementById("loggedIn").style.display = "none";
    document.getElementById("error").style.display = "none";
}

// Kollar om någon är inloggad
function checkLogIn() {
    if(localStorage.getItem("user")){
        setBodyDataLoggedIn();
    }
}

// Sparar till localStorage
const saveToLocalStorage = (userName) => {
    localStorage.setItem("textInput", userName)
}

// Här kallar jag på en funktion i en funktion så att allt inte blir copy paste i koden
function logOut(){
    setBodyDataLogOut();
}

// När man loadar sidan så körs denna funktionen
window.onload = checkLogIn();