const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            messageDiv.style.color = "green";
            messageDiv.textContent = `✅ ${data.message}`;
            // On peut stocker le token dans le localStorage pour le réutiliser
            localStorage.setItem('token', data.token);
            console.log("Token reçu :", data.token);
        } else {
            messageDiv.style.color = "red";
            messageDiv.textContent = `❌ ${data.error}`;
        }
    } catch (error) {
        messageDiv.textContent = "❌ Erreur : Impossible de contacter le serveur.";
        console.error(error);
    }
});
