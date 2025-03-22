/**
 * Main JavaScript
 * General site functionality
 */

// DOM Elements
const menuToggle = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const projectCards = document.querySelectorAll('.project-card, .featured-project-card');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Project Card Click Handlers
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Add scroll animations if needed
// Example scroll animation functionality
document.addEventListener('DOMContentLoaded', function() {
    // This function could be used to add scroll-based animations
    // or other functionality that should run when the page loads
    
    // Example: Making elements fade in when scrolled to
    // const fadeElements = document.querySelectorAll('.fade-in');
    // ...
});