import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add visible class for CSS transitions
          if (element.classList.contains('fade-in-up') || 
              element.classList.contains('fade-in-right') || 
              element.classList.contains('scale-in')) {
            element.classList.add('visible');
          }

          // Handle staggered animations for child elements
          const staggerChildren = element.querySelectorAll('.skill-item, .project-item, .animate-on-scroll');
          staggerChildren.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-right, .scale-in, .skill-item, .project-item, .animate-on-scroll'
    );
    
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click listeners to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Parallax effect for decorative elements
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Navbar scroll effect
    const handleNavbarEffect = () => {
      const navbar = document.querySelector('.nav-glass');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('backdrop-blur-md', 'bg-surface/95');
        } else {
          navbar.classList.remove('backdrop-blur-md', 'bg-surface/95');
        }
      }
    };

    // Throttled scroll handler for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleParallax();
          handleNavbarEffect();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};

// Utility function for triggering animations programmatically
export const triggerAnimation = (selector: string, delay = 0) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible');
    }, delay + (index * 100));
  });
};