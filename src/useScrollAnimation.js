import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            // Remove fade-up after animation so hover/other transitions work normally
            setTimeout(() => {
              entry.target.classList.remove('fade-up', 'is-visible', 'delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5');
              entry.target.style.opacity = '';
              entry.target.style.transform = '';
            }, 800);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up:not(.is-visible)').forEach((el) => {
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
