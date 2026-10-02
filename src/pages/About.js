import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClapperboard,
  faClock,
  faUsers,
  faCamera,
  faMobileScreenButton,
  faCalendarDays,
  faRing,
  faBriefcase,
  
  faUserGroup,
  faCakeCandles,
  faBaby,
  faHeart,
  faBuilding,
  faLandmark,
  faCheck,
  faArrowRight,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/about.css";

function About() {
  const creativeServices = [
    {
      icon: faClapperboard,
      title: "Instant Reels",
      text: "Har function ke baad dedicated reel.",
    },
    {
      icon: faClock,
      title: "Stories Every Hour",
      text: "Har ek ghante nayi story, your wedding live.",
    },
    {
      icon: faUsers,
      title: "Special Reels",
      text: "Friends, cousins, siblings, parents - sabke liye alag reels.",
    },
    {
      icon: faCamera,
      title: "Candid Moments",
      text: "Natural, raw & real emotions captured beautifully.",
    },
    {
      icon: faMobileScreenButton,
      title: "Social Media Management",
      text: "Hum handle karte hain, aap bas enjoy karo.",
    },
  ];

  const experience = [
    {
      icon: faCalendarDays,
      number: "8+",
      title: "YEARS",
      text: "of Shooting & Editing Experience",
    },
    {
      icon: faRing,
      number: "70+",
      title: "WEDDINGS",
      text: "Captured with Love",
    },
    {
      icon: faBriefcase,
      number: "100+",
      title: "CORPORATE EVENTS",
      text: "Covered Professionally",
    },
    {
      icon: faCameraRetro,
      number: "7,000+",
      title: "OTHER SHOOTS",
      text: "Across Various Events",
    },
  ];

  const services = [
    {
      icon: faUserGroup,
      title: "WEDDING",
      subtitle: "SHOOT",
    },
    {
      icon: faCamera,
      title: "PRE & POST",
      subtitle: "WEDDING",
    },
    {
      icon: faRing,
      title: "ENGAGEMENT",
      subtitle: "",
    },
    {
      icon: faCakeCandles,
      title: "BIRTHDAYS",
      subtitle: "",
    },
    {
      icon: faBaby,
      title: "BABY SHOWER",
      subtitle: "",
    },
    {
      icon: faHeart,
      title: "ANNIVERSARY",
      subtitle: "",
    },
    {
      icon: faBuilding,
      title: "CORPORATE",
      subtitle: "SHOOT",
    },
    {
      icon: faLandmark,
      title: "POLITICAL",
      subtitle: "SHOOT",
    },
  ];

  return (
    <main className="about-page-main">

      {/* ================= HERO ================= */}

      <section
        className="about-reference-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.18) 100%), url('/images/one.png')",
        }}
      >
        <div className="about-hero-inner">

          
          <div className="about-hero-line"></div>

          <div className="about-hero-content">
            <p className="about-eyebrow">ABOUT US</p>

            <h1>
              Weddings
              <br />
              <span>by Zee</span>
            </h1>

            <p className="about-hero-tagline">
              Your Moments. Our Passion.
              <br />
              Memories for a Lifetime.
            </p>
          </div>

          <div className="about-menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}

      <section className="who-we-are about-container">

        <div className="who-content">

          <p className="about-section-label">WHO WE ARE</p>

          <div className="gold-small-line"></div>

          <p>
            Weddings by Zee is a premium wedding content creation team
            that turns your special moments into engaging, authentic and
            instantly shareable content.
          </p>

          <p>
            From the first function to the final goodbye, we stay with you
            24/7 capturing every emotion, every celebration and every little
            detail.
          </p>

        </div>


        <div className="who-image-wrapper">

          <img
            src="/images/myimage.jpg"
            alt="Weddings by Zee"
          />

          <div className="instant-content-card">

            <div className="instant-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>

            <div>
              <h4>INSTANT CONTENT</h4>

              <p>
                Function hua, reel ready!
                <br />
                Instant edit, instant upload.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHAT WE DO ================= */}

      <section className="what-we-do about-container">

        <div className="section-heading">
          <p className="about-section-label">WHAT WE DO</p>
          <div className="gold-small-line"></div>
        </div>

        <div className="creative-services-grid">

          {creativeServices.map((service, index) => (
            <div className="creative-service" key={index}>

              <div className="creative-service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= OUR EXPERIENCE ================= */}

      <section className="experience-section about-container">

        <div className="section-heading">
          <p className="about-section-label">OUR EXPERIENCE</p>
          <div className="gold-small-line"></div>
        </div>

        <div className="experience-grid">

          {experience.map((item, index) => (
            <div className="experience-card" key={index}>

              <FontAwesomeIcon
                icon={item.icon}
                className="experience-icon"
              />

              <strong>{item.number}</strong>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= OUR SERVICES ================= */}

      <section className="our-services about-container">

        <div className="section-heading">
          <p className="about-section-label">OUR SERVICES</p>
          <div className="gold-small-line"></div>
        </div>

        <div className="services-reference-grid">

          {services.map((service, index) => (
            <div className="reference-service" key={index}>

              <FontAwesomeIcon
                icon={service.icon}
                className="reference-service-icon"
              />

              <h3>{service.title}</h3>

              {service.subtitle && (
                <span>{service.subtitle}</span>
              )}

            </div>
          ))}

        </div>

        <p className="all-events">
          & All Other Events and Functions
        </p>

      </section>


      {/* ================= OUR PROMISE ================= */}

      <section className="promise-section about-container">

        <div className="promise-content">

          <p className="promise-title">OUR PROMISE</p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span>We become a part of your family.</span>
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span>Friendly, fun & professional team.</span>
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span>Dedicated male & female creators.</span>
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span>Packages 100% flexible to your budget.</span>
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span>Your wedding, live for everyone to see.</span>
            </li>
          </ul>

        </div>

        <div className="promise-image">

          <img
            src="/images/cinematic.jpg"
            alt="Wedding content creators"
          />

        </div>

      </section>


      {/* ================= OUR VISION ================= */}

      <section className="vision-section about-container">

        <div className="vision-content">

          <p className="about-section-label">OUR VISION</p>

          <div className="gold-small-line"></div>

          <p>
            To make your wedding unforgettable – even for those who
            couldn't be there. Har pal, har emotion, har celebration ko
            hum banate hain a memory that lasts forever.
          </p>

        </div>

        <div className="vision-quote">
          <span>
            “Your Wedding.
            <br />
            Your Story.
            <br />
            Our Passion.”
          </span>

          <b>♡</b>
        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="about-final-cta">

        <div className="cta-left">

          <FontAwesomeIcon icon={faHeart} />

          <span>LET'S CREATE MAGIC TOGETHER</span>

        </div>

        <Link to="/contact" className="book-date-button">

          BOOK YOUR DATE

          <FontAwesomeIcon icon={faArrowRight} />

        </Link>

      </section>

    </main>
  );
}

export default About;