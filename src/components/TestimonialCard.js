import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">

      <div className="stars">
        ★★★★★
      </div>

      <p className="testimonial-review">
        "{testimonial.review}"
      </p>

      <h3>{testimonial.name}</h3>

      <span>{testimonial.event}</span>

    </div>
  );
}

export default TestimonialCard;