import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a
          href="https://www.facebook.com"
          aria-label="Facebook"
          className="fa fa-facebook"
        ></a>
        <a
          href="https://twitter.com"
          aria-label="Twitter"
          className="fa fa-twitter"
        ></a>
        <a
          href="https://www.instagram.com"
          aria-label="Instagram"
          className="fa fa-instagram"
        ></a>
        <a
          href="https://www.snapchat.com"
          aria-label="Snapchat"
          className="fa fa-snapchat-ghost"
        ></a>
      </div>
      <div className="footer-left">
        <p>BookLovers &copy; 2022</p>
      </div>
    </footer>
  );
}
