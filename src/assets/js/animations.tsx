export const initializeAnimations = (): void => {
  const observerOptions: IntersectionObserverInit = { root: null, threshold: 0.5 };

  const observerCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const targets = document.querySelectorAll<HTMLElement>(
    ".animate-on-scroll-carousel, .animate-on-scroll-testimonial, .animate-on-scroll-testimonial-author"
  );

  targets.forEach((target) => observer.observe(target));
};
