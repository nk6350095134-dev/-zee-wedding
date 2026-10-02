
import React, { useState } from "react";
import "../styles/packages.css";

function PackageCard({ pkg, onChoose }) {

  const [showMore, setShowMore] = useState(false);

  // First 4 features will be visible
  const visibleFeatures = pkg.features.slice(0, 4);

  // Remaining features
  const remainingFeatures = pkg.features.slice(4);

  return (
    <div
      className={`package-card ${
        pkg.popular ? "popular-package" : ""
      }`}
    >

      {/* Popular Label */}
      {pkg.popular && (
  <div className="popular-badge">
    MOST POPULAR
  </div>
)}

{pkg.recommended && (
  <div className="popular-badge recommended-badge">
    MOST RECOMMENDED
  </div>
)}

      {/* Package Image */}
      <div className="package-image">
        <img
          src={pkg.image}
          alt={pkg.name}
        />
      </div>

      {/* Package Content */}
      <div className="package-content">

        {/* Package Name */}
        <h3>{pkg.name}</h3>

        {/* Price */}
        <div className="package-price">
          {pkg.price}
        </div>

        {/* Description */}
        <p className="package-description">
          {pkg.description}
        </p>

        {/* First 4 Features */}
        <ul className="package-features">

          {visibleFeatures.map((feature, index) => (
            <li key={index}>
              <span>✓</span>
              {feature}
            </li>
          ))}

        </ul>


        {/* More Features */}
        {showMore && remainingFeatures.length > 0 && (

          <ul className="package-features more-features">

            {remainingFeatures.map((feature, index) => (
              <li key={index}>
                <span>✓</span>
                {feature}
              </li>
            ))}

          </ul>

        )}


        {/* More Button */}
        {remainingFeatures.length > 0 && (

          <button
            type="button"
            className="more-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less ↑" : "More ↓"}
          </button>

        )}


        {/* Choose Package */}
        <button
          type="button"
          className="package-button"
          onClick={() => onChoose(pkg)}
        >
          💬 Choose Package
        </button>

      </div>

    </div>
  );
}

export default PackageCard;
