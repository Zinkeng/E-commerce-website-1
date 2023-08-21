import React from "react";
import delivery from "./delivery.png";
import contact from "./contact.png";
import day from "./day.png";
import "./Screen.css";

function Screen() {
  return (
    <>
      <div Class="Container">
        <>
          <div Class="text">
            <div Class="picture " style={{ width: "50%", height: "100%" }}>
              <img
                src={delivery}
                style={{ width: 300, height: "100%", marginRight: "200px" }}
                alt="delivery"
              />
            </div>

            <h4>Free Shipping</h4>
            <p>
              Shipping made simple: Enjoy free delivery <br /> on all orders.
            </p>
          </div>
        </>

        <>
          <div Class="text">
            <div Class="picture " style={{ width: "50%", height: "100%" }}>
              <img
                src={day}
                style={{ width: 300, height: "100%" }}
                alt="delivery"
              />
            </div>

            <h4>14 Days Easy Return</h4>
            <p>
              Shop worry-free with our 14-day easy return policy. <br /> Your
              satisfaction is our guarantee.
            </p>
          </div>
        </>

        <>
          <div Class="text">
            <div Class="picture " style={{ width: "50%", height: "100%" }}>
              <img
                src={contact}
                style={{ width: 300, height: "100%", marginLeft: "200px" }}
                alt="delivery"
              />
            </div>

            <h4 style={{ marginLeft: "200px" }}>24/7 Customer Service</h4>
            <p style={{ marginLeft: "200px" }}>
              Round-the-clock support, just a call away.
              <br /> Our 24-hour customer service is here for you.
            </p>
          </div>
        </>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "10px", fontWeight: 700 }}>
        Products <hr />{" "}
      </h1>
      ;
    </>
  );
}

export default Screen;
