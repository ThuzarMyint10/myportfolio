import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Whatsup from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>chitsue110@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/chit-sue-b25018301" target="_blank" rel="noopener noreferrer">
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/chit.sue.332" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://wa.me/66823321513" target="_blank" rel="noopener noreferrer">
            <Whatsup color="white" size={"3rem"} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
