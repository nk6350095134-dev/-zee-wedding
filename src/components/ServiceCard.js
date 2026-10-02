import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="service-card">

      <div className="service-number">
        {service.number}
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

    </div>
  );
}

export default ServiceCard;