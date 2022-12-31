import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-container">
      <div className="form-container">
        <h2>Contact Us!</h2>
        <p>
          Fill out the form below to get in touch with us. We will try to get
          back to you within 48 hours. If we do not reply within that time
          please feel free to use the form again.
        </p>
        <form action="/">
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" required />
          <br />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" required />
          <br />
          <br />
          <label for="email">Email:</label> <br />
          <input type="email" id="email" name="email" required />
          <br />
          <br />
          <label for="pnumber">Phone Number</label> <br />
          <input
            type="number"
            id="pnumber"
            name="pnumber"
            placeholder="(###)-###-####"
          />
          <br />
          <br />
          <label for="comment">Message</label>
          <br />
          <textarea
            name="comment"
            id="comment"
            placeholder="Please leave your message here..."
          ></textarea>
          <br />
          <br />
          <input type="submit" className="submit" value="Submit" />
          <br />
        </form>
      </div>
    </section>
  );
}
