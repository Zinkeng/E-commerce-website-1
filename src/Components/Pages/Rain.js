import React from "react";
// import { useState } from 'react'
// import blanket from './rainImages/blanket.jpg'
// import blanket2 from './rainImages/blanket2.jpg'
// import boot from './rainImages/boot.jpg'
// import boot2 from './rainImages/boot2.jpg'
// import sweater from './rainImages/sweater.jpg'
// import sweater2 from './rainImages/sweater2.jpg'
// import sweater3 from './rainImages/sweater.jpg'
// import umb from './rainImages/umb.jpg'
// import umb2 from './rainImages/umb2.jpg'
// import umb3 from './rainImages/umb3.jpg'
// import umb4 from './rainImages/umb4.png'
// import swt from './rainImages/wsweater.jpg'

function Rain({ rainProducts, onAdd }) {
  return (
    <div
      class="d-flex justify-content-around flex-wrap mt-3 "
      style={{ paddingTop: "100px" }}
    >
      {rainProducts.map((item) => (
        <div class="card mb-5" style={{ maxWidth: "430px" }} key={item.id}>
          <div class="row g-0">
            <div class="col-xl-4 " style={{ height: "200px" }}>
              <img
                src={item.image}
                class="img-fluid rounded-start height-auto pt-5"
                alt="..."
              />
            </div>
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{[item.price, item.unit, item.meter]}</p>
                <p
                  class="card-text"
                  style={{
                    marginTop: "-14px",
                    marginBottom: "4px",
                    fontWeight: "bold",
                  }}
                >
                  Quantity {item.quantity}
                </p>
                <p class="card-text">
                  <p class="card-text">
                    {" "}
                    <button type="submit" class="buyButton">
                      {" "}
                      Buy Now
                    </button>{" "}
                  </p>
                  <p class="card-text">
                    {" "}
                    <button
                      type="submit"
                      onClick={() => onAdd(item)}
                      class="buyButton"
                    >
                      {" "}
                      Add to Cart
                    </button>{" "}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rain;
