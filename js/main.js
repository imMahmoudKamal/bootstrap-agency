/// add and remove navigation in scroll
const nav = document.querySelector('#navigation');

window.addEventListener('scroll', () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    if (window.scrollY > 100) {
      nav.classList.add('show');
    } else {
      nav.classList.remove('show');
    }
  }
});

/// toggle nav class when section is on screen
const sections = document.querySelectorAll('[data-section]');
const navLinks = document.querySelectorAll('[data-nav-section]');

window.addEventListener('scroll', () => {
  if (window.matchMedia('(min-width: 992px)').matches) {
    sections.forEach((section) => {
      const sectoinTop = section.getBoundingClientRect().top;

      if (sectoinTop < 100 && sectoinTop > 0) {
        /// remove active class from all links
        navLinks.forEach((nav) => nav.classList.remove('active'));

        /// add active class to current section
        navLinks.forEach((nav) => {
          if (nav.dataset.navSection === section.dataset.section) {
            nav.classList.add('active');
          }
        });
      }
    });

    if (sections[0].getBoundingClientRect().top > 70) {
      // remove active class from all links
      navLinks.forEach((nav) => nav.classList.remove('active'));
    }

    if (window.innerHeight + window.scrollY === document.documentElement.scrollHeight) {
      // remove active class from all links
      navLinks.forEach((nav) => nav.classList.remove('active'));
      // add to last section
      navLinks[navLinks.length - 1].classList.add('active');
    }
  }
});
