"use strict";

// tema
const switcher = document.querySelector("#toggleTheme");
switcher.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        switcher.innerHTML = `<i class="fa-regular fa-sun fa-2xl"></i>`;
    } else {
        switcher.innerHTML = `<i class="fa-regular fa-moon fa-2xl"></i>`;
    }
});

// visibilidade senha
const togglePassword = document.querySelector("#togglePassword");
const passwordInput = document.querySelector("#password-login");

togglePassword.addEventListener("click", () => {
    const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.innerHTML =
        type === "password"
            ? '<i class="fa-regular fa-eye"></i>'
            : '<i class="fa-regular fa-eye-slash"></i>';
});

// login area
const loginButton = document.querySelector("#button-login");
const usernameInput = document.querySelector("#user-login");
const passwordInputLogin = document.querySelector("#password-login");

let users = JSON.parse(localStorage.getItem("users")) || [];

loginButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInputLogin.value;

    if (username === "" || password === "") {
        alert("Preencha todos os campos.");
        return;
    }

    const user = users.find(
        (user) =>
            (user.username === username || user.email === username) &&
            user.password === password
    );

    if (user) {
        alert(`Login bem-sucedido! Bem-vindo(a) de volta, ${user.username}`);

        // window.location.href = 'nome.html';
    } else {
        alert("Usuário ou senha incorretos.");
    }

    clearInputs();
});

const clearInputs = () => {
    usernameInput.value = "";
    passwordInputLogin.value = "";
};
