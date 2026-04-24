/* =====================================================
   ABHISHEK J. — PERFORMANCE MARKETING WEBSITE
   Frontend JavaScript (GitHub Pages version — Web3Forms direct)
   ===================================================== */

// Web3Forms access key — register at https://web3forms.com with PPCbyAbhishek@gmail.com
// Replace the value below with the actual key after registering
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_KEY_HERE';

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll Progress Bar ----
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  // ---- Back to Top Button ----
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
  backToTop.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTop);
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ---- Navbar Scroll State ----
  const navbar = document.getElementById('navbar');

  // ---- Hero Animate In ----
  const heroElements = document.querySelectorAll('.animate-in');
  setTimeout(() => {
    heroElements.forEach(el => el.classList.add('visible'));
  }, 100);

  // ---- Intersection Observer for scroll animations ----
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.scrollDelay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 100);
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Add staggered delays to cards in grids
  const staggerSelectors = [
    '.stats-grid .stat-card',
    '.services-grid .service-card',
    '.case-studies-grid .case-study-card',
    '.testimonials-grid .testimonial-card',
    '.approach-steps .approach-step',
    '.credentials-left',
    '.credentials-right',
  ];

  staggerSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.dataset.scrollDelay = i;
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });

  // ---- Scroll event handler ----
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Progress bar
    progressBar.style.width = scrollPercent + '%';

    // Navbar
    if (scrollTop > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top
    if (scrollTop > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // ---- Hamburger Menu ----
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close nav when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });

  // ---- Animated Counter ----
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);

      if (target >= 100) {
        el.textContent = prefix + current.toLocaleString() + suffix;
      } else {
        el.textContent = prefix + current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    };

    requestAnimationFrame(update);
  }

  // Observe stat numbers
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (el.dataset.target === '100' && el.dataset.suffix === 'M+') {
          el.dataset.prefix = '$';
        }
        if (el.dataset.target === '450' && el.dataset.suffix === 'K') {
          el.dataset.prefix = '$';
        }
        animateCounter(el);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => {
    counterObserver.observe(el);
  });

  // ---- Smooth Scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- Active Nav Link on Scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinkEls.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => navObserver.observe(s));

  // ---- Contact Form (Web3Forms direct for GitHub Pages) ----
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        name: contactForm.querySelector('#name').value.trim(),
        email: contactForm.querySelector('#email').value.trim(),
        business: contactForm.querySelector('#business').value.trim(),
        budget: contactForm.querySelector('#budget').value,
        service: contactForm.querySelector('#service').value,
        message: contactForm.querySelector('#message').value.trim(),
      };

      if (!formData.name || !formData.email || !formData.message) {
        showFormAlert('Please fill in all required fields.', 'error');
        return;
      }

      if (!isValidEmail(formData.email)) {
        showFormAlert('Please enter a valid email address.', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New Lead from Performance Marketing Site — ${formData.name}`,
            from_name: 'Performance Marketing Website',
            replyto: formData.email,
            name: formData.name,
            email: formData.email,
            business: formData.business || 'Not provided',
            monthly_budget: formData.budget || 'Not specified',
            service_needed: formData.service || 'Not specified',
            message: formData.message,
          })
        });

        const data = await response.json();

        if (data.success) {
          contactForm.style.display = 'none';
          formSuccess.style.display = 'block';
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          showFormAlert('Something went wrong. Please try again or email directly.', 'error');
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message & Get Free Audit';
        }
      } catch (err) {
        showFormAlert('Network error. Please check your connection and try again.', 'error');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message & Get Free Audit';
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormAlert(message, type) {
    const existing = contactForm.querySelector('.form-alert');
    if (existing) existing.remove();

    const alert = document.createElement('div');
    alert.className = `form-alert form-alert-${type}`;
    alert.style.cssText = `
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 0.88rem;
      font-weight: 500;
      margin-bottom: 8px;
      ${type === 'error'
        ? 'background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); color: #f87171;'
        : 'background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); color: #34d399;'}
    `;
    alert.textContent = message;
    const btnParent = submitBtn.parentElement || submitBtn;
    contactForm.insertBefore(alert, btnParent);
    setTimeout(() => alert.remove(), 5000);
  }

  // ---- Active nav link style ----
  const navStyle = document.createElement('style');
  navStyle.textContent = `.nav-link.active { color: white; } .nav-link.active::after { width: 100%; }`;
  document.head.appendChild(navStyle);

  // ---- Tilt effect on cards ----
  document.querySelectorAll('.stat-card, .service-card, .case-study-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  console.log('%cAbhishek — Performance Marketing', 'color: #6366f1; font-weight: bold; font-size: 16px;');
  console.log('%c$100M+ Revenue Generated | Google Certified | Top Rated on Upwork', 'color: #94a3b8; font-size: 12px;');
});
