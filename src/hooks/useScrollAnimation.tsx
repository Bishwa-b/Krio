
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          // Optional: remove the class when the element is not in view
          // entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });
    
    const scrollAnimationElements = document.querySelectorAll(
      '.scroll-animation, .scroll-animation-left, .scroll-animation-right'
    );
    
    scrollAnimationElements.forEach(element => {
      observer.current?.observe(element);
    });
    
    return () => {
      if (observer.current) {
        scrollAnimationElements.forEach(element => {
          observer.current?.unobserve(element);
        });
      }
    };
  }, []);
};

export default useScrollAnimation;
