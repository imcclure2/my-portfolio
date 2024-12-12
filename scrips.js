document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the fields
    if (name && email && message) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset(); // Reset form after successful submission
    } else {
        alert('Please fill out all fields!');
    }
});
