import React from "react";

function SectionTitle({ subtitle, title }) {
  return (
    <>
      <p className="section-subtitle">
        {subtitle}
      </p>

      <h2>{title}</h2>
    </>
  );
}

export default SectionTitle;
