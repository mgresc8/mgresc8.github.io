// Intersection Observer for scroll-triggered fade-ins
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
  observer.observe(el);
});
