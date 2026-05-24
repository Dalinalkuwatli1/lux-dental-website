'use client';

import { useEffect } from 'react';

export function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all .reveal elements
    const targets = document.querySelectorAll('.reveal, .stagger-children');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);
}
