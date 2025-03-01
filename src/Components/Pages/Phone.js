import React from "react";
// import phone from './images/iphone12.jpg'
// import n20 from './phoneImages/note20.jpeg'
// import i8 from './phoneImages/iphone8.jpg'
// import pixel from './phoneImages/pixel4.jpg'
// import oneplus from './phoneImages/oneplus9.png'
// import s21ultra from './phoneImages/s21ultra.jpg'
// import p50 from './phoneImages/Huawei-P50-Pro.jpg'
// import ix from './phoneImages/iphonex.jpg'
// import vivo from './phoneImages/vivo.jpg'
import "./phone.css";

function Phone({ phoneProducts, onAdd }) {
  return (
    <div
      class="d-flex justify-content-around flex-wrap "
      style={{ marginTop: "90px" }}
    >
      {phoneProducts.map((item) => (
        <div class="card mb-3" style={{ maxWidth: "430px" }} key={item.id}>
          <div class="row g-0">
            <div class="col-md-4 " style={{ height: "250px" }}>
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

export default Phone;
