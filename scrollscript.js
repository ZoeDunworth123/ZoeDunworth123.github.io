document.addEventListener('DOMContentLoaded', function() {
    // Select the button and target section
    const scrollButton = document.getElementById('scrollButton');
    const targetSection = document.getElementById('contact');
 
    // Add a click event listener to the button
    scrollButton.addEventListener('click', function() {
        // Use scrollIntoView to smoothly scroll to the target
        targetSection.scrollIntoView({
            behavior: 'smooth', // Enables smooth scrolling
            block: 'start'      // Aligns the top of the target with the viewport
            // Optional: Use 'center' to align vertically centered
            // block: 'center'
        });
    });
});
