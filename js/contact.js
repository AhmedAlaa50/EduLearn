document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send this data to your backend
    // For now, we'll just show a success message
    alert('Thank you for your message. We will get back to you soon!');
    e.target.reset();
});