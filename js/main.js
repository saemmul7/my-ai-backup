// K-Food Insight - Main Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // 2. Language Selector Dropdown Toggle
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }

  // 3. Reading Progress Bar (For Article Pages)
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

  // 4. Contact Form Submission Feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('문의가 정상적으로 접수되었습니다. 담당자가 확인 후 회신드리겠습니다.');
      contactForm.reset();
    });
  }
});
