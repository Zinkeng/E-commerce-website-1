import React from "react";

function Shoes({ shoeProducts, onAdd }) {
  return (
    <div
      class="d-flex justify-content-around flex-wrap mt-3 "
      style={{ paddingTop: "100px" }}
    >
      {shoeProducts.map((item) => (
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
                <p class="card-text">{[item.price, item.unit]}</p>
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

export default Shoes;
