document.getElementById("search-button").addEventListener("click", function () {
    let query = document.getElementById("search-input").value;
    if (query) {
        console.log("Mencari: " + query);
        // Implementasi pencarian lebih lanjut bisa ditambahkan di sini
    }
});

document.getElementById("search-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("search-button").click();
    }
});

//popup form
function openLogin() {
    let loginPopup = document.getElementById("login_popup");
    let signupPopup = document.getElementById("signup_popup");


    signupPopup.classList.remove("active");
    signupPopup.style.display = "none";


    loginPopup.style.display = "block";
    setTimeout(() => loginPopup.classList.add("active"), 10);
}

function closeLogin() {
    let loginPopup = document.getElementById("login_popup");
    loginPopup.classList.remove("active");
    loginPopup.style.display = "none";
}

function openSignup() {
    let loginPopup = document.getElementById("login_popup");
    let signupPopup = document.getElementById("signup_popup");


    loginPopup.classList.remove("active");
    loginPopup.style.display = "none";


    signupPopup.style.display = "block";
    setTimeout(() => signupPopup.classList.add("active"), 10);
}

function closeSignup() {
    let signupPopup = document.getElementById("signup_popup");
    signupPopup.classList.remove("active");
    signupPopup.style.display = "none";
}

//close popup
document.addEventListener("click", function (event) {
    let loginPopup = document.getElementById("login_popup");
    let signupPopup = document.getElementById("signup_popup");

    if (loginPopup.classList.contains("active") &&
        !event.target.closest(".login-container") &&
        !event.target.closest(".log_in")) {
        closeLogin();
    }

    if (signupPopup.classList.contains("active") &&
        !event.target.closest(".signup-container") &&
        !event.target.closest(".sign_up")) {
        closeSignup();
    }
});