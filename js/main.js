// Afternoon Kitchen (오후의 키친) - Main Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle with Accessibility (A11y)
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-controls', 'navLinks');

    mobileToggle.addEventListener('click', () => {
      const isExpanded = navLinks.classList.toggle('show');
      mobileToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
  }

  // 2. Language Selector Dropdown Toggle with Accessibility
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn && langDropdown) {
    langBtn.setAttribute('aria-expanded', 'false');
    langBtn.setAttribute('aria-controls', 'langDropdown');

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isShown = langDropdown.classList.toggle('show');
      langBtn.setAttribute('aria-expanded', isShown ? 'true' : 'false');
    });

    document.addEventListener('click', () => {
      if (langDropdown.classList.contains('show')) {
        langDropdown.classList.remove('show');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Keyboard ESC Key Handler to close all overlays
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (navLinks && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        mobileToggle?.setAttribute('aria-expanded', 'false');
      }
      if (langDropdown && langDropdown.classList.contains('show')) {
        langDropdown.classList.remove('show');
        langBtn?.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // 4. Reading Progress Bar (For Article Pages)
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
      }
    });
  }

  // 5. Contact Form Submission Feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('문의가 정상적으로 접수되었습니다. 담당자가 확인 후 신속히 회신드리겠습니다.');
      contactForm.reset();
    });
  }
});
