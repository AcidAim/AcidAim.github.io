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
            title: 'Graduation Project DT',
            description: 'Website to make booking to conference rooms, which are accessed through RFID cards',
            technologies: ['C#', 'EntityFrameworkCore', 'SQLite'],
            link: '#'
        },
        {
            title: 'CLI banking "app"',
            description: 'CLI tool that simulates basic banking. Will be published soon.',
            technologies: ['Python', 'SQLAlchemy', 'Alembic'],
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
                ${project.technologies.map(tech => `<span>${tech}</span>`).join(' • ')}
            </div>
            <a href="${project.link}" class="btn primary" style="margin-top: 1.5rem;">View Project</a>
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