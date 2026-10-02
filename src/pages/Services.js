
import React from "react";

import bookingTerms from "../data/details";

import "../styles/services.css";

function Services() {
  return (
    <>

      {/* =========================
          PAGE HEADER
         ========================= */}

      <section
        className="page-header"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.18) 100%), url('/images/two.png')",
        }}
      >

        <p className="section-subtitle">
          ZEE WEDDINGS
        </p>

        <h1>
          Booking & Payment
        </h1>

        <p>
          Important information about booking, wedding coverage,
          delivery and client responsibilities.
        </p>

      </section>


      {/* =========================
          BOOKING TERMS
         ========================= */}

      <div className="booking-terms-page">

        {bookingTerms.map((section, sectionIndex) => (

          <section
            className={`terms-section ${
              sectionIndex % 2 !== 0 ? "alternate" : ""
            }`}
            key={section.number}
          >

            <div className="terms-container">

              {/* SECTION TITLE */}

              <div className="terms-heading">

                <span>
                  {section.number}
                </span>

                <h2>
                  {section.title}
                </h2>

              </div>


              {/* SECTION CONTENT */}

              <div className="terms-content">

                {section.items.map((item, itemIndex) => (

                  <div
                    className={`terms-item ${
                      section.items.length === 1
                        ? "full-width"
                        : ""
                    }`}
                    key={itemIndex}
                  >

                    <h3>
                      {item.heading}
                    </h3>

                    <p>
                      {item.text}
                    </p>


                    {/* OPTIONAL LIST */}

                    {item.list && (
                      <ul>

                        {item.list.map((listItem, listIndex) => (

                          <li key={listIndex}>
                            {listItem}
                          </li>

                        ))}

                      </ul>
                    )}

                  </div>

                ))}

              </div>

            </div>

          </section>

        ))}


        {/* =========================
            OUR PROMISE
           ========================= */}

        <section className="our-promise">

          <div className="promise-content">

            <p className="section-subtitle">
              ZEE WEDDINGS
            </p>

            <h2>
              Our Promise
            </h2>

            <p className="promise-main">
              You enjoy your wedding and we take care
              of the content.
            </p>

            <p>
              We capture the moments naturally, deliver your
              content quickly and make your social media look
              as special as your wedding day.
            </p>

            <div className="promise-signature">

              <strong>
                Zee Weddings
              </strong>

              <span>
                Zeeshan Ahmed & Team
              </span>

              <span>
                6367461188
              </span>

            </div>

          </div>

        </section>

      </div>

    </>
  );
}

export default Services;
