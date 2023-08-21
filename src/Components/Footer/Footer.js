import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="section" style={{ marginLeft: "100px" }}>
          <h2>About</h2>
          <p>
            Builder's Collection is a businesss company that <br /> provides you
            with building materials. <br /> We are known for our reliability,
            availability and <br />
            timely delivery of quality first-hand building materials.
          </p>
        </div>

        <div className="section" style={{ marginLeft: "100px" }}>
          <h2>Contact</h2>
          <p>Email: builderscollection@gmail.com</p>
          <p>Phone: +237 675-682-764</p>
        </div>

        <div className="section" style={{ marginLeft: "250px" }}>
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                <FontAwesomeIcon icon="faFacebook-f" />
                Facebook
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Twitter
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <p
          className="col-sm"
          style={{
            color: "black",
            justifyContent: "center",
            paddingTop: "14px",
          }}
        >
          &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </footer>
  );
}

export default Footer;
