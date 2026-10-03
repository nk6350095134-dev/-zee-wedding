import React, { useRef, useState } from "react";

import packages from "../data/packages";
import PackageCard from "../components/PackageCard";

import "../styles/packages.css";

function Packages() {

  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startScrollLeft = useRef(0);


  /* =====================================================
     MOUSE DRAG START
     ===================================================== */

  const handleMouseDown = (e) => {

    if (e.button !== 0) return;

    setIsDragging(true);

    startX.current =
      e.pageX - sliderRef.current.offsetLeft;

    startScrollLeft.current =
      sliderRef.current.scrollLeft;
  };


  /* =====================================================
     MOUSE DRAG MOVE
     ===================================================== */

  const handleMouseMove = (e) => {

    if (!isDragging) return;

    e.preventDefault();

    const x =
      e.pageX - sliderRef.current.offsetLeft;

    const walk =
      (x - startX.current) * 1.5;

    sliderRef.current.scrollLeft =
      startScrollLeft.current - walk;
  };


  /* =====================================================
     MOUSE DRAG END
     ===================================================== */

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  /* =====================================================
     WHATSAPP
     ===================================================== */

  const contactOnWhatsApp = (pkg) => {

    const phoneNumber = "6367461188";

    const message =
      `Hello Zee Weddings! 👋\n\n` +
      `I am interested in the ${pkg.name}.\n\n` +
      `💰 Package Price: ${pkg.price}\n\n` +
      `📦 Package Details:\n` +
      `${pkg.features
        .map((feature) => `✓ ${feature}`)
        .join("\n")}\n\n` +
      `Please share more details about this package.\n\n` +
      `Thank you!`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };


  return (
    <>

      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <section
        className="page-header"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.1) 38%, rgba(0,0,0,0.18) 100%), url('/images/one.png')",
        }}
      >

        <p className="section-subtitle">
          CHOOSE YOUR EXPERIENCE
        </p>

        <h1>
          Wedding-Packages
        </h1>

        <p>
          Choose the perfect package for your celebration.
        </p>

      </section>


      {/* =====================================================
          PACKAGES
          ===================================================== */}

      <section className="packages section">

        <div
          ref={sliderRef}
          className={`package-grid ${
            isDragging ? "dragging" : ""
          }`}

          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >

          {packages.map((pkg, index) => (

            <PackageCard
              key={index}
              pkg={pkg}
              onChoose={contactOnWhatsApp}
            />

          ))}

        </div>

      </section>

    </>
  );
}

export default Packages;