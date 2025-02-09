/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Navigation burger menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Sample projects data - replace with your own
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of project 1',
            technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2',
            technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'Description of project 3',
            technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
            link: '#'
        }
    ];

    // Dynamically create project cards
    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary">View Project</a>
        `;

        projectsGrid.appendChild(projectCard);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});