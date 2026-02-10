// Navigation Controller Class

class NavigationController {
  constructor(navElement) {
    this.nav = navElement;
    this.links = navElement.querySelectorAll('.nav-link');
    this.toggle = navElement.querySelector('.nav-toggle');
    this.menu = navElement.querySelector('.nav-menu');
    this.init();
  }

  init() {
    // Add click listeners to navigation links
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        this.scrollToSection(targetId);
        
        // Close mobile menu if open
        if (this.menu.classList.contains('active')) {
          this.toggleMobileMenu();
        }
      });
    });

    // Add click listener to mobile toggle
    if (this.toggle) {
      this.toggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.menu.classList.contains('active') && 
          !this.nav.contains(e.target)) {
        this.toggleMobileMenu();
      }
    });

    // Handle escape key to close mobile menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.menu.classList.contains('active')) {
        this.toggleMobileMenu();
      }
    });
  }

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = this.nav.offsetHeight;
      const sectionTop = section.offsetTop - navHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }

  updateActiveLink(currentSectionId) {
    this.links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  toggleMobileMenu() {
    this.menu.classList.toggle('active');
    this.toggle.classList.toggle('active');
    
    // Update ARIA attributes for accessibility
    const isExpanded = this.menu.classList.contains('active');
    this.toggle.setAttribute('aria-expanded', isExpanded);
  }
}

// Scroll Handler Class
class ScrollHandler {
  constructor() {
    this.sections = document.querySelectorAll('.section');
    this.observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };
  }

  init(callback) {
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target.id);
        }
      });
    }, this.observerOptions);

    this.sections.forEach(section => observer.observe(section));
  }

  getCurrentSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let section of this.sections) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        return section.id;
      }
    }

    return null;
  }
}
