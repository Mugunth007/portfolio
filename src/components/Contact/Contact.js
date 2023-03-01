import { IconButton } from "@material-ui/core";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>mugunthking491@gmail.com</span>
        </p>
       
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/mugunth-perumal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://github.com/Mugunth007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
