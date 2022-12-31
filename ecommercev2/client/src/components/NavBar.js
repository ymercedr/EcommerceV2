import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="nav-container">
        <div className="logo">
          <div className="logo">
            <ul>
              <li>
                <i className="bi bi-bookmark-heart-fill"></i>
              </li>
              <li>B</li>
              <li>o</li>
              <li>o</li>
              <li>k</li>
              <li>L</li>
              <li>o</li>
              <li>v</li>
              <li>e</li>
              <li>r</li>
              <li>s</li>
            </ul>
          </div>
        </div>
        <div className="link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
