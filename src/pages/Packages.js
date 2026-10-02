
import React from "react";

import packages from "../data/packages";
import PackageCard from "../components/PackageCard";

import "../styles/packages.css";

function Packages() {

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
      <section className="page-header"
       style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.1) 38%, rgba(0,0,0,0.18) 100%), url('/images/one.png')",
        }}>

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

      <section className="packages section">

        {/* Package Swipe Area */}
        <div className="package-grid">

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
