import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="about-container">
      <div className="about-image">
        <img src="images/me.jpeg" alt="Our founder Yareline Merced" />
      </div>
      <div className="about-textbox">
        <h3>About the Owner</h3>
        <p>
          For as long as she remembers our owner, Yareline Merced, has been fond
          of books and reading. Very few times you will find her without the
          company of her current read. Books have always made her feel connected
          to herself and others in a way nothing else has ever even come close
          to, which is why she created Book Lovers.
        </p>
        <Link to="/contact">
          <button>Contact Us!</button>
        </Link>
      </div>
    </section>
  );
}
