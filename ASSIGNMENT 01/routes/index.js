const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home - My Portfolio',
        active: 'home'
    });
});

// About page route
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me - My Portfolio',
        active: 'about'
    });
});

// Projects page route
router.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects - My Portfolio',
        active: 'projects'
    });
});

// Contact page route
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Me - My Portfolio',
        active: 'contact'
    });
});

module.exports = router;