import { useEffect, useRef } from 'react';

export const useReveal = <T extends HTMLElement = HTMLDivElement>(childSelector?: string) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    // Determine if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return; // Do nothing if reduced motion is preferred
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply a hint just before animating if needed, but modern browsers handle this well.
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-visible');
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      if (childSelector) {
        const children = currentRef.querySelectorAll(childSelector);
        children.forEach((child) => {
          child.classList.add('reveal-hidden');
          observer.observe(child);
        });
      } else {
        currentRef.classList.add('reveal-hidden');
        observer.observe(currentRef);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [childSelector]);

  return ref;
};
