// Animation Controller for Scroll Animations

class AnimationController {
  constructor() {
    this.animatedElements = document.querySelectorAll('.section, .course-item, .certification-item');
    this.observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  }

  init() {
    // Add initial state to elements
    this.animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    // Observe all animated elements
    this.animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  animateElement(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }

  // Add stagger animation for child elements
  staggerAnimation(parentElement, childSelector, delay = 100) {
    const children = parentElement.querySelectorAll(childSelector);
    children.forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
      child.style.transition = `opacity 0.5s ease-out ${index * delay}ms, transform 0.5s ease-out ${index * delay}ms`;
      
      setTimeout(() => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, 50);
    });
  }
}

// Smooth scroll polyfill for browsers that don't support it
if (!('scrollBehavior' in document.documentElement.style)) {
  // Polyfill for smooth scrolling
  const smoothScrollPolyfill = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          const targetPosition = target.offsetTop;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000;
          let start = null;
          
          function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          }
          
          function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          }
          
          requestAnimationFrame(animation);
        }
      });
    });
  };
  
  smoothScrollPolyfill();
}
