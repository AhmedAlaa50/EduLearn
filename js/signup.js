import { signUp } from './auth.js';

document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    const { user, error } = await signUp(email, password);
    
    if (error) {
        alert(error);
        return;
    }
    
    // Redirect to home page after successful signup
    window.location.href = 'index.html';
});