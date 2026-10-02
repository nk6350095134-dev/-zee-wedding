
import React, { useRef, useState } from "react";

function SwipeContainer({ children, className = "" }) {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startY = useRef(0);
  const startScrollLeft = useRef(0);

  const isHorizontalSwipe = useRef(false);
  const directionDecided = useRef(false);

  /* =========================
     MOUSE DRAG
     ========================= */

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

  /* =========================
     TOUCH START
     ========================= */

  const handleTouchStart = (e) => {
    const touch = e.touches[0];

    startX.current = touch.clientX;
    startY.current = touch.clientY;

    startScrollLeft.current =
      sliderRef.current?.scrollLeft || 0;

    isHorizontalSwipe.current = false;
    directionDecided.current = false;
  };

  /* =========================
     TOUCH MOVE
     ========================= */

  const handleTouchMove = (e) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const touch = e.touches[0];

    const moveX = touch.clientX - startX.current;
    const moveY = touch.clientY - startY.current;

    /*
      Direction decide only after
      finger moves enough distance.
    */

    if (!directionDecided.current) {
      if (
        Math.abs(moveX) < 8 &&
        Math.abs(moveY) < 8
      ) {
        return;
      }

      directionDecided.current = true;

      /*
        Horizontal movement:
        package cards swipe.
      */

      if (Math.abs(moveX) > Math.abs(moveY)) {
        isHorizontalSwipe.current = true;
      } else {
        /*
          Vertical movement:
          let browser scroll the page normally.
        */
        isHorizontalSwipe.current = false;
      }
    }

    /*
      Only stop browser movement when
      the user is actually swiping horizontally.
    */

    if (isHorizontalSwipe.current) {
      e.preventDefault();

      slider.scrollLeft =
        startScrollLeft.current - moveX;
    }
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
    >
      {children}
    </div>
  );
}

export default SwipeContainer;
