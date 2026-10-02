import React, { useRef, useState } from "react";

function SwipeContainer({ children, className = "" }) {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startY = useRef(0);
  const startScrollLeft = useRef(0);

  const direction = useRef(null);

  // =====================================================
  // TOUCH / MOUSE START
  // =====================================================

  const handlePointerDown = (e) => {
    const slider = sliderRef.current;

    if (!slider) return;

    startX.current = e.clientX;
    startY.current = e.clientY;

    startScrollLeft.current = slider.scrollLeft;

    direction.current = null;

    // Only mouse needs grabbing
    if (e.pointerType === "mouse") {
      setIsDragging(true);

      slider.setPointerCapture(e.pointerId);
    }
  };


  // =====================================================
  // MOVE
  // =====================================================

  const handlePointerMove = (e) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const distanceX =
      e.clientX - startX.current;

    const distanceY =
      e.clientY - startY.current;


    // -----------------------------------------------------
    // Detect direction
    // -----------------------------------------------------

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


    // -----------------------------------------------------
    // Horizontal = package swipe
    // -----------------------------------------------------

    if (
      direction.current === "horizontal"
    ) {

      /*
        Manual horizontal movement.
        1.05 gives a controlled smooth feeling.
      */

      slider.scrollLeft =
        startScrollLeft.current -
        distanceX * 1.05;


      /*
        Stop browser from changing
        the page vertically during
        horizontal swipe.
      */

      if (e.cancelable) {
        e.preventDefault();
      }


      if (e.pointerType === "mouse") {
        setIsDragging(true);
      }
    }
  };


  // =====================================================
  // END
  // =====================================================

  const handlePointerUp = (e) => {

    const slider = sliderRef.current;

    if (
      slider &&
      e.pointerType === "mouse" &&
      slider.hasPointerCapture(
        e.pointerId
      )
    ) {
      slider.releasePointerCapture(
        e.pointerId
      );
    }

    setIsDragging(false);

    direction.current = null;
  };


  // =====================================================
  // CANCEL
  // =====================================================

  const handlePointerCancel = () => {

    setIsDragging(false);

    direction.current = null;
  };


  return (
    <div
      ref={sliderRef}

      className={`swipe-container ${
        isDragging ? "dragging" : ""
      } ${className}`}

      onPointerDown={
        handlePointerDown
      }

      onPointerMove={
        handlePointerMove
      }

      onPointerUp={
        handlePointerUp
      }

      onPointerCancel={
        handlePointerCancel
      }
    >
      {children}
    </div>
  );
}

export default SwipeContainer;