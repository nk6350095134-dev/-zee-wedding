
import React from "react";
import { Link } from "react-router-dom";
import SwipeContainer from "../components/SwipeContainer";

import services from "../data/services";
import packages from "../data/packages";
import testimonials from "../data/testimonials";

import ServiceCard from "../components/ServiceCard";
import PackageCard from "../components/PackageCard";
import TestimonialCard from "../components/TestimonialCard";

import ScrollAnimation from "../components/ScrollAnimation";

import "../styles/home.css";

function Home() {

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
          HERO
          ===================================================== */}

      <section
        id="home"
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.22), rgba(0,0,0,0.8)), url('/images/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <ScrollAnimation animation="fade-up">

          <div className="hero-content">

            <p className="small-title">
              WEDDING FILMS • REELS • CREATIVE SERVICES
            </p>

            <h1>
              We Turn Your
              <br />
              <span>Moments Into Memories</span>
            </h1>

            <p className="hero-text">
              Professional wedding films, cinematic reels and creative
              video editing that make your special moments unforgettable.
            </p>

            <Link
              to="/packages"
              className="main-button"
            >
              View Packages
            </Link>

          </div>

        </ScrollAnimation>

      </section>


      {/* =====================================================
          ABOUT PREVIEW
          ===================================================== */}

      <section className="about section">

        <ScrollAnimation
          animation="fade-left"
          className="about-image"
        >

          <img
            src="/images/myimage.jpg"
            alt="Zee Weddings"
          />

        </ScrollAnimation>


        <ScrollAnimation
          animation="fade-right"
          className="about-content"
        >

          <p className="section-subtitle">
            ABOUT ZEE WEDDINGS
          </p>

          <h2>
            Your Story.
            <br />
            Our Creativity.
          </h2>

          <p>
            At Zee Weddings, we capture emotions, celebrations
            and unforgettable moments through cinematic storytelling.
          </p>

          <p>
            From wedding films to Instagram reels, our goal is to
            make every moment look as beautiful as it felt.
          </p>

          <Link
            to="/about"
            className="outline-button"
          >
            More About Us
          </Link>

        </ScrollAnimation>

      </section>


      {/* =====================================================
          SERVICES
          ===================================================== */}

      <section className="services section">

        <ScrollAnimation animation="fade-up">

          <p className="section-subtitle">
            WHAT WE DO
          </p>

          <h2>
            Booking & Services Details
          </h2>

        </ScrollAnimation>


        <div className="service-grid">

          {services.map((service, index) => (

            <ScrollAnimation
              key={index}
              animation="fade-up"
            >

              <ServiceCard
                service={service}
              />

            </ScrollAnimation>

          ))}

        </div>


        <ScrollAnimation animation="fade-up">

          <div className="services-more-button">

            <Link
              to="/services"
              className="outline-button"
            >
              More Info
            </Link>

          </div>

        </ScrollAnimation>

      </section>


      {/* =====================================================
          PRE-WEDDING
          ===================================================== */}

      <section className="home-prewedding section">

        <ScrollAnimation
          animation="fade-left"
          className="home-pre-wedding-image"
        >

          <img
            src="/images/p5.webp"
            alt="Pre-Wedding"
          />

        </ScrollAnimation>


        <ScrollAnimation
          animation="fade-right"
          className="home-prewedding-content"
        >

          <p className="section-subtitle">
            <h1>PRE-WEDDING</h1>
          </p>

          <h2>
            Capture Your
            <br />
            <span>Love Story</span>
          </h2>

          <p className="home-prewedding-text">
            Turn your beautiful pre-wedding moments into cinematic
            memories with creative reels, candid moments and
            professional content creation.
          </p>

          <Link
            to="/pre-wedding-packages"
            className="main-button"
          >
            View Pre-Wedding Packages
          </Link>

        </ScrollAnimation>


        <div className="home-prewedding-cards">

          <ScrollAnimation animation="fade-up">

            <div className="home-prewedding-card">

              <span className="prewedding-number">
                01
              </span>

              <h3>
                Cinematic Reels
              </h3>

              <p>
                Creative and trending reels specially created
                for your beautiful love story.
              </p>

            </div>

          </ScrollAnimation>


          <ScrollAnimation animation="fade-up">

            <div className="home-prewedding-card">

              <span className="prewedding-number">
                02
              </span>

              <h3>
                Couple Content
              </h3>

              <p>
                Beautiful candid moments and creative couple
                concepts captured naturally.
              </p>

            </div>

          </ScrollAnimation>


          <ScrollAnimation animation="fade-up">

            <div className="home-prewedding-card">

              <span className="prewedding-number">
                03
              </span>

              <h3>
                Professional Editing
              </h3>

              <p>
                Premium editing with cinematic transitions,
                trending concepts and professional finishing.
              </p>

            </div>

          </ScrollAnimation>

        </div>

      </section>


      {/* =====================================================
          PACKAGES
          ===================================================== */}

      <section className="packages section">

        <ScrollAnimation animation="fade-up">

          <p className="section-subtitle">
            CHOOSE YOUR EXPERIENCE
          </p>

          <h2>
            wedding-Packages
          </h2>

          <p className="packages-intro">
            Choose the package that matches your celebration.
            Every package can also be customized according to your needs.
          </p>

        </ScrollAnimation>


        {/* Swipe remains exactly as before */}

        <ScrollAnimation
          animation="fade-up"
          className="packages-animation"
        >

          <SwipeContainer className="package-grid">

            {packages.map((pkg, index) => (

              <PackageCard
                key={index}
                pkg={pkg}
                onChoose={contactOnWhatsApp}
              />

            ))}

          </SwipeContainer>

        </ScrollAnimation>

      </section>


      {/* =====================================================
          PORTFOLIO
          ===================================================== */}

      <section className="portfolio-section section">

        <ScrollAnimation animation="fade-up">

          <p className="section-subtitle">
            OUR WORK
          </p>

          <h2>
            Featured Moments
          </h2>

        </ScrollAnimation>


        <div className="gallery">

          <ScrollAnimation animation="fade-left">

            <div className="gallery-item">

              <img
                src="/images/cinematic.jpg"
                alt="Wedding moment"
              />

              <div className="gallery-overlay">

                <h3>
                  Wedding Stories
                </h3>

                <p>
                  Cinematic Wedding Film
                </p>

              </div>

            </div>

          </ScrollAnimation>


          <ScrollAnimation animation="fade-up">

            <div className="gallery-item">

              <img
                src="/images/ig.webp"
                alt="Wedding celebration"
              />

              <div className="gallery-overlay">

                <h3>
                  Wedding Reels
                </h3>

                <p>
                  Instagram Creative
                </p>

              </div>

            </div>

          </ScrollAnimation>


          <ScrollAnimation animation="fade-right">

            <div className="gallery-item">

              <img
                src="/images/createive.avif"
                alt="Creative wedding film"
              />

              <div className="gallery-overlay">

                <h3>
                  Creative Films
                </h3>

                <p>
                  Premium Video Editing
                </p>

              </div>

            </div>

          </ScrollAnimation>

        </div>

      </section>


      {/* =====================================================
          HAPPY CUSTOMERS
          ===================================================== */}

      <section className="testimonials section">

        <ScrollAnimation animation="fade-up">

          <p className="section-subtitle">
            HAPPY CUSTOMERS
          </p>

          <h2>
            What Our Clients Say
          </h2>

        </ScrollAnimation>


        <div className="testimonial-grid">

          {testimonials.map((testimonial, index) => (

            <ScrollAnimation
              key={index}
              animation="fade-up"
            >

              <TestimonialCard
                testimonial={testimonial}
              />

            </ScrollAnimation>

          ))}

        </div>


        <ScrollAnimation animation="fade-up">

          <div className="customers-more-button">

            <Link
              to="/customers"
              className="outline-button"
            >
              View All Customers
            </Link>

          </div>

        </ScrollAnimation>

      </section>


      {/* =====================================================
          CONTACT PREVIEW
          ===================================================== */}

      <section className="contact section">

        <ScrollAnimation animation="zoom">

          <p className="section-subtitle">
            LET'S CREATE TOGETHER
          </p>

          <h2>
            Let's Make Your Story Beautiful
          </h2>

          <p>
            Have a wedding, event or creative project?
            Get in touch with us.
          </p>

          <Link
            to="/contact"
            className="main-button"
          >
            Contact Us
          </Link>

        </ScrollAnimation>

      </section>

    </>
  );
}

export default Home;

