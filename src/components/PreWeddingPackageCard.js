
import React from "react";

const PreWeddingPackageCard = ({ packageData }) => {

  const contactOnWhatsApp = () => {

    const phoneNumber = "6367461188";

    const message =
      `Hello Zee Weddings! 👋\n\n` +
      `I am interested in the ${packageData.name}.\n\n` +
      `💰 Package Price: ${packageData.price}\n\n` +
      `📦 Package Details:\n` +
      `${packageData.features
        .map((feature) => `✓ ${feature}`)
        .join("\n")}\n\n` +
      `I would like to know more about this Pre-Wedding package.\n\n` +
      `Please share the availability and booking details.\n\n` +
      `Thank you!`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className={`pre-wedding-card ${
        packageData.popular ? "popular-card" : ""
      }`}
    >

      {packageData.popular && (
        <div className="popular-badge">
          MOST POPULAR
        </div>
      )}

      {/* Package Image */}
      <div className="pre-wedding-image">
        <img
          src={packageData.image}
          alt={packageData.name}
        />
      </div>

      <div className="pre-wedding-card-content">

        <h2>{packageData.name}</h2>

        <div className="pre-wedding-price">
          {packageData.price}
        </div>

        <div className="pre-wedding-line"></div>

        <ul>
          {packageData.features.map((feature, index) => (
            <li key={index}>
              <span className="check-icon">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <button
          className="pre-wedding-btn"
          onClick={contactOnWhatsApp}
        >
          Choose Package
        </button>

      </div>

    </div>
  );
};

export default PreWeddingPackageCard;

