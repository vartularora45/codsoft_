document.addEventListener('DOMContentLoaded', function() {
    // Select the button and the paragraph elements
    const button = document.getElementById('changeTextButton');
    const greeting = document.getElementById('greeting');

    // Add an event listener to the button
    button.addEventListener('click', function() {
        // Change the text content of the paragraph
        greeting.textContent = 'Hello, JavaScript!';
    });
});
