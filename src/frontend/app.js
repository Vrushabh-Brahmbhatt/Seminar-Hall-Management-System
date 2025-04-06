document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");
    const signupForm = document.getElementById("signup");
    const showSignup = document.getElementById("show-signup");
    const showLogin = document.getElementById("show-login");

    const loginContainer = document.getElementById("login-form");
    const signupContainer = document.getElementById("signup-form");

    // Toggle between forms
    showSignup.addEventListener("click", () => {
        loginContainer.classList.add("hidden");
        signupContainer.classList.remove("hidden");
    });

    showLogin.addEventListener("click", () => {
        signupContainer.classList.add("hidden");
        loginContainer.classList.remove("hidden");
    });

    // Handle login form submission
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        try {
            const response = await fetch("http://localhost:7002/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Login successful! Token: " + data.token);
                // Handle token storage and redirection here
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("An error occurred during login.");
            console.error(error);
        }
    });

    // Handle signup form submission
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;
        const role = document.getElementById("signup-role").value;

        try {
            const response = await fetch("http://localhost:7002/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, role }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Signup successful! You can now login.");
                signupContainer.classList.add("hidden");
                loginContainer.classList.remove("hidden");
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("An error occurred during signup.");
            console.error(error);
        }
    });
});
