import React from "react";

import "../styles/portfolio.css";

function Portfolio() {
  return (
    <>

      <section className="page-header">

        <p className="section-subtitle">
          OUR WORK
        </p>

        <h1>
          Featured Moments
        </h1>

        <p>
          A collection of our cinematic wedding stories
          and creative projects.
        </p>

      </section>


      <section className="portfolio-section section">

        <div className="gallery">

          <div className="gallery-item">

            <img
              src="/images/cinematic.jpg"
              alt="Wedding Stories"
            />

            <div className="gallery-overlay">
              <h3>Wedding Stories</h3>
              <p>Cinematic Wedding Film</p>
            </div>

          </div>


          <div className="gallery-item">

            <img
              src="/images/ig.webp"
              alt="Wedding Reels"
            />

            <div className="gallery-overlay">
              <h3>Wedding Reels</h3>
              <p>Instagram Creative</p>
            </div>

          </div>


          <div className="gallery-item">

            <img
              src="/images/createive.avif"
              alt="Creative Films"
            />

            <div className="gallery-overlay">
              <h3>Creative Films</h3>
              <p>Premium Video Editing</p>
            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Portfolio;