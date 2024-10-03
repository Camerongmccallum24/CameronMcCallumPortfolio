// Modularized JavaScript for better structure
function handleNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function handleProjectHover() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.classList.add('hover-effect');
        });
        project.addEventListener('mouseout', () => {
            project.classList.remove('hover-effect');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    handleProjectHover();
});