import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="store-container">
      <div className="store-textbox">
        <h3>
          <i className="bi bi-bookmark-heart-fill"></i>
          Book Lovers
        </h3>
        <p>
          An independent bookstores located in the heart and center of Puerto
          Rico in the town of Caguas. We pride ourselves on carrying a selection
          of the current best selling books from a variety of genres. Your
          choice sustains a locally woman-owned business, and allows us to
          follow our passion for getting the right books into the right hands.
        </p>
        <Link to="/products">
          <button>Shop Now!</button>
        </Link>
      </div>
    </section>
  );
}
