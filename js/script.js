
let loginForm = document.querySelector(".my-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log('Email:', email.value);
    console.log('Password:', password.value);
});


// sign-up to sign-in
const inputs = document.querySelectorAll("input");

const handleInputChange = () => {
    let allInputsFilled = true;

    for (const input of inputs) {
        if (input.value === "") {
            allInputsFilled = false;
            break;
        }
    }

    if (allInputsFilled) {
        const signUpButton = document.querySelector(".my-form__button");
        signUpButton.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }
};

for (const input of inputs) {
    input.addEventListener("input", handleInputChange);
}










