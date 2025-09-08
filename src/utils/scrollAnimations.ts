// Professional scroll animations utility

export const initializeScrollAnimations = () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        
        // Add the appropriate animation class based on the element's data attributes
        if (element.classList.contains('fade-in-up')) {
          element.classList.add('visible');
        } else if (element.classList.contains('fade-in-right')) {
          element.classList.add('visible');
        } else if (element.classList.contains('scale-in')) {
          element.classList.add('visible');
        }

        // For staggered animations
        const children = element.querySelectorAll('.stagger-child');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('visible');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-right, .scale-in');
  animatedElements.forEach(el => observer.observe(el));

  // Smooth scroll behavior for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href') as string);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Parallax effect for background elements
  const handleParallax = () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
      const yPos = -(scrolled * speed);
      (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  };

  // Navigation bar scroll effect
  const handleNavbarScroll = () => {
    const navbar = document.querySelector('.nav-glass');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };

  // Throttled scroll handler for performance
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleParallax();
        handleNavbarScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
    observer.disconnect();
    navLinks.forEach(link => {
      link.removeEventListener('click', () => {});
    });
  };
};

// Animate elements when they come into view with custom delays
export const animateOnScroll = (selector: string, delay = 0) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible');
    }, delay + (index * 100));
  });
};

// Custom easing functions for smoother animations
export const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Smooth scroll to element with custom easing
export const smoothScrollTo = (element: Element, duration = 1000) => {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80; // Account for fixed navbar
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};