import React from "react";
import NavbarPublic from "./NavbarPublic";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <NavbarPublic />
      <div className="container">
        <div className="card mb-3">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            className="card-img-top"
            alt="about-banner"
          />
          <div className="card-body lead">
            <h1 className="card-title">About Our Restaurant</h1>
            <p className="card-text">
              Unexpected flavors forged from nature and mingled with flourish.
              Vibrant herbs grown as close to home as it gets (they’re from the
              rooftop garden). The freshest ingredients responsibly sourced both
              near and far.
            </p>
            <p className="card-text">
              This is modern bistronomy—casual fine dining where experimentation
              becomes the everyday. Experience cuisine that’s constantly
              evolving in a setting that’s forever inviting. Drink with delight
              at the bar. Make the menu your own. Let the exploration unfold.
            </p>
            <p className="card-text">
              We hope you enjoy our products as much as we enjoy offering them
              to you. If you have any questions or comments, please dont
              hesitate to contact us.
            </p>
            <p className="card-text">
              Sincerely,
              <br />
              Abhishek Sharma
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
