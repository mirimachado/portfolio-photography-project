import { useEffect } from "react";

export function useIntersectionObserver(className = "animate", visibleClass = "animate-visible") {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
