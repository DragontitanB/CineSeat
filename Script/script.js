const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
// Nuevo código para el registro y el inicio de sesión usando LocalStorage
const registerForm = document.querySelector('.register form');
const loginForm = document.querySelector('.login form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    const user = { username, email, password };
    
    // Guardar el usuario en el LocalStorage
    localStorage.setItem(email, JSON.stringify(user));

    // Limpiar campos
    registerForm.reset();
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            // Inicio de sesión exitoso
            alert('Inicio de sesión exitoso');
            window.location.href = 'Pagina1.html';
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Cuenta no registrada');
    }
    
    // Limpiar campos
    loginForm.reset();
});