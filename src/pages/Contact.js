import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/contact.css";

function Contact() {

  const whatsappMessage =
    "Hello Zee Weddings! 👋 I am interested in your wedding packages. Please share more details.";

  const whatsappURL =
    `https://wa.me/6367461188?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <>

      <section className="page-header"
       style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.1) 38%, rgba(0,0,0,0.20) 100%), url('/images/two.png')",
        }}>

        <p className="section-subtitle">
          LET'S CREATE TOGETHER
        </p>

        <h1>
          Let's Make Your Story Beautiful
        </h1>

        <p>
          Have a wedding, event or creative project?
          Get in touch with us.
        </p>

      </section>


      <section className="contact-page section">

        <div className="contact-info">

          <h2>
            Get In Touch
          </h2>

          <p>
            We'd love to hear about your wedding,
            event or creative project.
          </p>

        </div>


        <div className="contact-buttons">

          <a
            href={whatsappURL}
            target="_blank"
            rel="noreferrer"
            className="social-button whatsapp-button"
          >

            <FontAwesomeIcon icon={faWhatsapp} />

            <span>
              WhatsApp
            </span>

          </a>


          <a
            href="https://www.instagram.com/Weddingsbyzee/"
            target="_blank"
            rel="noreferrer"
            className="social-button instagram-button"
          >

            <FontAwesomeIcon icon={faInstagram} />

            <span>
              Instagram
            </span>

          </a>

        </div>

      </section>

    </>
  );
}

export default Contact;