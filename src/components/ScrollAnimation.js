
import React, { useEffect, useRef, useState } from "react";

function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${animation} ${
        visible ? "show" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;

