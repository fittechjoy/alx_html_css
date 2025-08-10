// Get the hamburger icon and the navigation menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');

// Add click event to the hamburger icon
hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
