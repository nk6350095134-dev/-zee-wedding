import React, { useRef, useState } from "react";

function SwipeContainer({ children, className = "" }) {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Desktop mouse drag
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;

    const slider = sliderRef.current;
    if (!slider) return;

    setIsDragging(true);

    startX.current = e.pageX;
    startScrollLeft.current = slider.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const distance = e.pageX - startX.current;

    slider.scrollLeft = startScrollLeft.current - distance;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={sliderRef}
      className={`swipe-container ${className} ${
        isDragging ? "dragging" : ""
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
    >
      {children}
    </div>
  );
}

export default SwipeContainer;