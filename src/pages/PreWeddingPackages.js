import React from "react";
import preWeddingPackages from "../data/PreWedding";
import PreWeddingPackageCard from "../components/PreWeddingPackageCard";

import "../styles/PreWeddingPackages.css";
const PreWeddingPackages = () => {
  return (
    
    <div className="pre-wedding-page"
    >
<section
 style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.18) 100%), url('/images/one.png')",
        }}>
      <div className="pre-wedding-header" >

        <p className="pre-wedding-small-title"
        >
          PRE-WEDDING
        </p>

        <h1>Pre-Wedding Packages</h1>

        <p className="pre-wedding-description">
          Capture your beautiful love story with cinematic visuals,
          creative reels and unforgettable moments.
        </p>

      </div>
      </section>

      <div className="pre-wedding-packages">

        {preWeddingPackages.map((packageData, index) => (
          <PreWeddingPackageCard
            key={index}
            packageData={packageData}
          />
        ))}

      </div>

    </div>
  );
};

export default PreWeddingPackages;