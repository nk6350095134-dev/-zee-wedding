
import React from "react";

import customers from "../data/customers";
import CustomerCard from "../components/CustomerCard";

import "../styles/customers.css";

function Customers() {
  return (
    <>

      {/* PAGE HEADER */}

      <section className="customers-header"
       style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.18) 200%), url('/images/one.png')",
        }}>

        <p className="section-subtitle">
          HAPPY CUSTOMERS
        </p>

        <h1>
          Our Happy Customers
        </h1>

        <p>
          Meet the beautiful people whose special moments
          we had the opportunity to capture.
        </p>

      </section>


      {/* CUSTOMERS */}

      <section className="customers-page">

        <div className="customers-grid">

          {customers.map((customer, index) => (
            <CustomerCard
              key={index}
              customer={customer}
            />
          ))}

        </div>

      </section>

    </>
  );
}

export default Customers;

