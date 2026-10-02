
import React from "react";

const CustomerCard = ({ customer }) => {

  const openInstagram = () => {
    window.open(
      customer.instagram,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="customer-card"
      onClick={openInstagram}
    >

      <div className="customer-image">

        <img
          src={customer.image}
          alt={customer.name}
        />

        <div className="customer-overlay">

          <div className="instagram-icon">
            Instagram
          </div>

        </div>

      </div>

      <h3>{customer.name}</h3>

      <p>View Instagram</p>

    </div>
  );
};

export default CustomerCard;
