import React, { useRef, useState } from "react";

function SwipeContainer({ children, className = "" }) {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  // Mouse drag values
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Touch direction
  const startTouchX = useRef(0);
  const startTouchY = useRef(0);
  const direction = useRef(null);

  // =====================================================
  // MOUSE DOWN
  // =====================================================

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;

    if (!slider) return;

    setIsDragging(true);

    startX.current = e.pageX;
    startScrollLeft.current = slider.scrollLeft;
  };

  // =====================================================
  // MOUSE MOVE
  // =====================================================

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const slider = sliderRef.current;

    if (!slider) return;

    e.preventDefault();

    const distance =
      e.pageX - startX.current;

    slider.scrollLeft =
      startScrollLeft.current -
      distance * 1.15;
  };

  // =====================================================
  // MOUSE UP
  // =====================================================

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // =====================================================
  // MOUSE LEAVE
  // =====================================================

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // =====================================================
  // TOUCH START
  // =====================================================

  const handleTouchStart = (e) => {
    const touch = e.touches[0];

    startTouchX.current =
      touch.clientX;

    startTouchY.current =
      touch.clientY;

    direction.current = null;
  };

  // =====================================================
  // TOUCH MOVE
  // =====================================================

  const handleTouchMove = (e) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const touch = e.touches[0];

    const distanceX =
      touch.clientX -
      startTouchX.current;

    const distanceY =
      touch.clientY -
      startTouchY.current;

    // -----------------------------------------------
    // Detect direction
    // -----------------------------------------------

    if (direction.current === null) {
      if (
        Math.abs(distanceX) < 8 &&
        Math.abs(distanceY) < 8
      ) {
        return;
      }

      if (
        Math.abs(distanceX) >
        Math.abs(distanceY)
      ) {
        direction.current = "horizontal";
      } else {
        direction.current = "vertical";
      }
    }

    // -----------------------------------------------
    // Horizontal swipe
    // -----------------------------------------------

    if (
      direction.current === "horizontal"
    ) {
      if (e.cancelable) {
        e.preventDefault();
      }

      slider.scrollLeft =
        slider.scrollLeft - distanceX;

      startTouchX.current =
        touch.clientX;
    }
  };

  // =====================================================
  // TOUCH END
  // =====================================================

  const handleTouchEnd = () => {
    direction.current = null;
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div
      ref={sliderRef}
      className={`swipe-container ${
        isDragging ? "dragging" : ""
      } ${className}`}

      /* Mouse */
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}

      /* Touch */
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}

export default SwipeContainer;