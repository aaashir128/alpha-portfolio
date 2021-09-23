import { Button } from "@material-ui/core";
import { LocationOn, Mail, Phone } from "@material-ui/icons";
import React from "react";
import Title from "../components/Title";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contactPage">
      <Title title="Contact Me" span="Contact Me" />

      <div className="contactPageData">
        <div className="contactPage__left">
          <form>
            <h5 className="contactPage__leftInput">Enter Your Name</h5>
            <input type="text" />
            <h5 className="contactPage__leftInput">Enter Your Email</h5>
            <input type="email" />
            <h5 className="contactPage__leftInput">Subject Line</h5>
            <input type="text" />
            <h5 className="contactPage__leftInput">Enter Your Message</h5>
            <textarea placeholder="Your Message here..." />

          </form>
            <button color="primary" variant="contained">
              Submit
            </button>
        </div>

        <div className="contactPage__right">
          <div className="contactPage__rightDetails">
            <Phone />
            <div className="contactDetails">
              <h3 className="contactHeading">Phone + Whatsapp</h3>
              <h5 className="contactData">+92 347 2419300</h5>
            </div>
          </div>
          <div className="contactPage__rightDetails">
            <Mail />
            <div className="contactDetails">
              <h3 className="contactHeading">Mail</h3>
              <h5 className="contactData">aaashir128@gmail.com</h5>
            </div>
          </div>
          <div className="contactPage__rightDetails">
            <LocationOn />
            <div className="contactDetails">
              <h3 className="contactHeading">Location</h3>
              <h5 className="contactData">Karachi - Pakistan</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
