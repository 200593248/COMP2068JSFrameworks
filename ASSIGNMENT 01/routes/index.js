// Projects page route
router.get('/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Stripe API'],
      githubUrl: 'https://github.com/200593248@student.georgianc.on.ca/ecommerce-platform',
      liveUrl: 'https://jacobsleeba-ecommerce.herokuapp.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['JavaScript', 'Socket.io', 'Express', 'MySQL', 'Bootstrap'],
      githubUrl: 'https://github.com/200593248@student.georgianc.on.ca/task-manager',
      liveUrl: 'https://jacobsleeba-taskapp.netlify.app'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that displays current conditions and 7-day forecasts with interactive maps.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com/200593248@student.georgianc.on.ca/weather-dashboard',
      liveUrl: 'https://jacobsleeba-weather.vercel.app'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Express.js and Handlebars, featuring modern design and smooth animations.',
      technologies: ['Node.js', 'Express', 'Handlebars', 'Bootstrap', 'CSS3'],
      githubUrl: 'https://200593248@student.georgianc.on.ca/portfolio',
      liveUrl: 'https://jacobsleeba.dev'
    }
  ];
  
  res.render('projects', {
    title: 'Projects - Jacob Sleeba',
    active: 'projects',
    projects: projects
  });
});