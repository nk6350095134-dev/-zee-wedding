
import React, { useRef, useState } from "react";

function SwipeContainer({ children, className = "" }) {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startY = useRef(0);
  const startScrollLeft = useRef(0);

  const direction = useRef(null);

  // =========================
  // MOUSE
  // =========================

  const handleMouseDown = (e) => {
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

    e.preventDefault();

    const distance = e.pageX - startX.current;

    slider.scrollLeft =
      startScrollLeft.current - distance * 1.3;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // =========================
  // TOUCH START
  // =========================

  const handleTouchStart = (e) => {
    const touch = e.touches[0];

    startX.current = touch.clientX;
    startY.current = touch.clientY;

    startScrollLeft.current =
      sliderRef.current?.scrollLeft || 0;

    direction.current = null;
  };

  // =========================
  // TOUCH MOVE
  // =========================

  const handleTouchMove = (e) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const touch = e.touches[0];

    const distanceX =
      touch.clientX - startX.current;

    const distanceY =
      touch.clientY - startY.current;

    // Direction decide karo
    if (direction.current === null) {
      if (
        Math.abs(distanceX) < 8 &&
        Math.abs(distanceY) < 8
      ) {
        return;
      }

      if (Math.abs(distanceX) > Math.abs(distanceY)) {
        direction.current = "horizontal";
      } else {
        direction.current = "vertical";
      }
    }

    // Horizontal swipe
    if (direction.current === "horizontal") {
      e.preventDefault();

      slider.scrollLeft =
        startScrollLeft.current - distanceX;
    }

    // Vertical movement:
    // kuch nahi karna.
    // Browser automatically page scroll karega.
  };

  const handleTouchEnd = () => {
    direction.current = null;
  };

  return (
    <div
      ref={sliderRef}
      className={`swipe-container ${
        isDragging ? "dragging" : ""
      } ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}

export default SwipeContainer;

