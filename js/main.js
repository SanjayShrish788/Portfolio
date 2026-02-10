// Main Application Initialization

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Navigation Controller
  const navElement = document.querySelector('.navigation');
  const navigationController = new NavigationController(navElement);

  // Initialize Scroll Handler
  const scrollHandler = new ScrollHandler();
  scrollHandler.init((sectionId) => {
    navigationController.updateActiveLink(sectionId);
  });

  // Initialize Animation Controller
  const animationController = new AnimationController();
  animationController.init();

  // Render Skills Section
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    const skillsRenderer = new SkillsRenderer(portfolioData.skills);
    skillsRenderer.render(skillsContainer);
    
    // Add stagger animation to skill categories
    setTimeout(() => {
      animationController.staggerAnimation(skillsContainer, '.skill-category', 100);
    }, 100);
  }

  // Render Projects Section
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    renderProjects(portfolioData.projects, projectsContainer);
    
    // Add stagger animation to project cards
    setTimeout(() => {
      animationController.staggerAnimation(projectsContainer, '.project-card', 150);
    }, 100);
  }

  // Render Education Section
  const educationContainer = document.getElementById('education-container');
  if (educationContainer) {
    renderEducation(portfolioData.education, educationContainer);
    
    // Add stagger animation to education items
    setTimeout(() => {
      animationController.staggerAnimation(educationContainer, '.education-item', 150);
    }, 100);
  }

  // Render Certifications Section
  const certificationsContainer = document.getElementById('certifications-container');
  if (certificationsContainer) {
    renderCertifications(portfolioData.certifications, certificationsContainer);
    
    // Add stagger animation to certification items
    setTimeout(() => {
      animationController.staggerAnimation(certificationsContainer, '.certification-item', 100);
    }, 100);
  }

  // Render Courses Section
  const coursesContainer = document.getElementById('courses-container');
  if (coursesContainer) {
    renderCourses(portfolioData.courses, coursesContainer);
    
    // Add stagger animation to course items
    setTimeout(() => {
      animationController.staggerAnimation(coursesContainer, '.course-item', 100);
    }, 100);
  }

  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys (optional enhancement)
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const currentSection = scrollHandler.getCurrentSection();
      if (currentSection) {
        const sections = Array.from(document.querySelectorAll('.section'));
        const currentIndex = sections.findIndex(s => s.id === currentSection);
        
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
          e.preventDefault();
          navigationController.scrollToSection(sections[currentIndex + 1].id);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          e.preventDefault();
          navigationController.scrollToSection(sections[currentIndex - 1].id);
        }
      }
    }
  });

  // Handle window resize for responsive adjustments
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 1024) {
        const menu = document.querySelector('.nav-menu');
        const toggle = document.querySelector('.nav-toggle');
        if (menu && menu.classList.contains('active')) {
          menu.classList.remove('active');
          toggle.classList.remove('active');
        }
      }
    }, 250);
  });

  // Log initialization complete
  console.log('Portfolio website initialized successfully');
});


// Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 800);
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const progressBar = document.querySelector('.scroll-progress-bar');
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  progressBar.style.width = scrolled + '%';
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Enhanced Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const menu = document.querySelector('.nav-menu');
      const toggle = document.querySelector('.nav-toggle');
      if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      }
    }
  });
});

// Add scroll reveal animation to sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('reveal');
  observer.observe(section);
});
