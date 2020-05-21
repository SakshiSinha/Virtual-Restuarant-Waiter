import React from "react";
import NavbarPublic from "./NavbarPublic";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <NavbarPublic />
      <div className="jumbotron">
        <h1 className="display-3 text-center">CONTACT US</h1>
        <p className="lead">
          Send us a message and we’ll get back to you as soon as possible. You
          can also reach us by phone at (123) 518-7926. Looking forward to
          hearing from you.
        </p>
        <hr className="my-4" />
        <h1>OPENING HOURS</h1>
        <p>Restaurant lunch service</p>
        <p> Friday, Saturday and Sunday</p>
        <p> Bookings from 12pm to 1.30pm</p>
        <p> Restaurant dinner service</p>
        <p> Daily | Bookings from 6pm to 9pm</p>
        <p> Reservations Office</p>
        <p> Monday to Friday open from 9am to 7pm</p>
        <p> Saturday and Sunday open from 10am to 6pm</p>
        <p> Events</p>
        <p> Lunch | Monday to Sunday from 12pm</p>
        <p> Dinner | Monday to Sunday from 6pm</p>
        <button type="button" className="btn btn-primary btn-lg">
          Learn more
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
