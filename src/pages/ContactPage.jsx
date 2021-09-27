import { Button } from "@material-ui/core";
import { LocationOn, Mail, Phone } from "@material-ui/icons";
import React, { useState } from "react";
import Title from "../components/Title";
import db from "../config/firebase";
import "./ContactPage.css";
import firebase from "firebase";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages")
      // .doc(`${name}`)
      // .collection(`${name} messages`)
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  };

  return (
    <div className="contactPage">
      <Title title="Contact Me" span="Contact Me" />

      <div className="contactPageData">
        <div className="contactPage__left">
          <form>
            <h5 className="contactPage__leftInput">Enter Your Name</h5>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h5 className="contactPage__leftInput">Enter Your Email</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5 className="contactPage__leftInput">Subject Line</h5>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <h5 className="contactPage__leftInput">Enter Your Message</h5>
            <textarea
              placeholder="Your Message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
          <button color="primary" variant="contained" onClick={sendMessage}>
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
