"use strict";

const switcher = document.querySelector("#toggleTheme");
const registerButton = document.querySelector("#register");
const nameInput = document.querySelector("#name");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const togglePassword = document.querySelector("#togglePassword");

let users = JSON.parse(localStorage.getItem("users")) || []; //  usuários do localStorage

function registerUser(name, username, email, password) {
    const user = {
        name,
        username,
        email,
        password,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users)); // salva no localStorage
}

function validateInputs() {
    if (
        nameInput.value === "" ||
        usernameInput.value === "" ||
        emailInput.value === "" ||
        passwordInput.value === "" ||
        repeatPasswordInput.value === ""
    ) {
        alert("Preencha todos os campos.");
        return false;
    }
    if (passwordInput.value !== repeatPasswordInput.value) {
        alert("As senhas não coincidem!");
        passwordInput.value = "";
        repeatPasswordInput.value = "";
        return false;
    }
    return true;
}

function clearInputs() {
    nameInput.value = "";
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    repeatPasswordInput.value = "";
}

registerButton.addEventListener("click", () => {
    if (!validateInputs()) return;

    registerUser(
        nameInput.value,
        usernameInput.value,
        emailInput.value,
        passwordInput.value
    );

    clearInputs();
    alert("Usuário registrado com sucesso!");
    window.location.href = "login.html";
});

togglePassword.addEventListener("click", () => {
    const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    repeatPasswordInput.setAttribute("type", type);
    togglePassword.innerHTML =
        type === "password"
            ? '<i class="fa-regular fa-eye"></i>'
            : '<i class="fa-regular fa-eye-slash"></i>';
});

switcher.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    switcher.innerHTML = document.body.classList.contains("light-theme")
        ? '<i class="fa-regular fa-moon fa-2xl"></i>'
        : '<i class="fa-regular fa-sun fa-2xl"></i>';
});
