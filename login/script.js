document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    // Função para obter os dados do usuário do localStorage
    function getUsers() {
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];
    }

    // Função para salvar usuários no localStorage
    function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    // Registro de novo usuário
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;
        const users = getUsers();

        // Verificar se o usuário já existe
        if (users.some(user => user.username === username)) {
            document.getElementById("register-error").textContent = "Este nome de usuário já existe!";
        } else {
            users.push({ username, password });
            saveUsers(users);
            alert("Usuário registrado com sucesso!");
            document.getElementById("register-form").reset();
        }
    });

    // Login de usuário
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        
        const users = getUsers();

        const user = users.find(user => user.username === username && user.password === password) 
        ;
        
        if (user) {
            alert("Login bem sucedido");
            document.getElementById("login-form").reset();
        } else {
            document.getElementById("login-error").textContent = "Usuário ou senha incorretos!";
        }
    });
});
