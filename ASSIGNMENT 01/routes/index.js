const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home - Jacob Sleeba',
    active: { home: true }
  });
});

// About Me page route
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me - Jacob Sleeba',
    active: { about: true }
  });
});

// Projects page route
router.get('/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Stripe API'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['JavaScript', 'Socket.io', 'Express', 'MySQL', 'Bootstrap'],
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current conditions and 7-day forecasts with interactive maps.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API', 'Chart.js'],
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Express.js and Handlebars, featuring modern design and smooth animations.',
      technologies: ['Node.js', 'Express', 'Handlebars', 'Bootstrap', 'CSS3'],
    }
  ];
  
  res.render('projects', {
    title: 'Projects - Jacob Sleeba',
    active: { projects: true },
    projects: projects
  });
});

// Contact Me page route - GET
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Me - Jacob Sleeba',
    active: { contact: true },
    success: false
  });
});

// Contact Me page route - POST (form submission)
router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Here you would typically:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with a CRM
  console.log('Contact form submission received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);
  
  // For now, we'll just log it and show success message
  res.render('contact', {
    title: 'Contact Me - Jacob Sleeba',
    active: { contact: true },
    success: true,
    name: name
  });
});

// Error page route (optional)
router.get('/error', (req, res) => {
  res.render('error', {
    title: 'Error - Jacob Sleeba',
    message: 'Something went wrong!'
  });
});

module.exports = router;