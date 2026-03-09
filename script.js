/* ============================================
   UnityERP — Interactive Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar Scroll Effect ──
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);

  // ── Mobile Menu Toggle ──
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // ── Scroll Reveal Animations ──
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Counter Animation ──
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let countersAnimated = false;

  const animateCounters = () => {
    if (countersAnimated) return;
    countersAnimated = true;

    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.ceil(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + '+';
        }
      };

      updateCounter();
    });
  };

  // Observe hero stats
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statsObserver.observe(heroStats);
  }

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── Contact Form Handler ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('.btn-submit');
      const originalText = btn.innerHTML;
      btn.innerHTML = '✓ Pesan Terkirim!';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ── Typing Effect for Hero ──
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.style.opacity = '1';
  }

  // ── Parallax effect on hero orbs ──
  window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;

    document.querySelectorAll('.hero-orb').forEach((orb, index) => {
      const factor = (index + 1) * 0.5;
      orb.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
    });
  });

  // ── Active Nav Link on Scroll ──
  const sections = document.querySelectorAll('section[id]');

  const highlightNav = () => {
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.querySelectorAll('a').forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.style.color = 'var(--accent-purple)';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // ── Tilt Effect on Service Cards ──
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ── Portfolio Card Hover Glow ──
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(139, 92, 246, 0.1), var(--glass-bg))`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });

});
