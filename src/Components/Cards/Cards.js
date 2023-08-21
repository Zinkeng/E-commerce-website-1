import React from "react";
import shoe from "./images/shoe.jpg";
import controller from "./images/controller.webp";
import phone from "./images/iphone12.jpg";
import sweater from "./images/sweater.jpg";
import kitchen from "./images/kitchen.jpg";
import rain from "./images/rainy.jpg";
import tv from "./images/Tv.jpg";
import school from "./images/school.jpg";
import strange from "./images/blue.jpg";
import cm2 from "./images/cm2.jpg";
// import gucci from './images/game.jpg'
import { useState } from "react";

import { Link } from "react-router-dom";
// import Shoes  from '../Pages/Shoes';

function Cards() {
  // Categories

  const [products, setProducts] = useState([
    { title: "WOOD", image: shoe, productLink: "/shoes", id: 1 },
    {
      title: "ZINC",
      image: controller,
      productLink: "/games",
      id: 2,
    },
    { title: "TILES", image: phone, productLink: "/phones", id: 3 },
    { title: "IRON BARS", image: sweater, productLink: "/dresses", id: 4 },
    {
      title: "GLASS",
      image: kitchen,
      productLink: "/kitchen",
      id: 5,
    },
    { title: "PAINT", image: rain, productLink: "/rain", id: 6 },
    { title: "STONES & GRAVELS", image: tv, productLink: "/tv", id: 7 },
    { title: "HAMMER", image: school, productLink: "/school", id: 8 },
    {
      title: "NAILS",
      image: strange,
      productLink: "/movies",
      id: 9,
    },
    { title: "CEMENT", image: cm2, productLink: "/cosmetics", id: 10 },
  ]);

  return (
    <div
      class="d-flex justify-content-around flex-wrap "
      style={{
        marginTop: "10px",
        backgroundColor: "#14315c",
        justifyContent: "space-between",
      }}
    >
      {products.map((product) => (
        <div
          class="card mb-5"
          style={{ width: "18rem", justifyContent: "space-between" }}
          key={product.id}
        >
          <div
            class="card-body"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <h5 class="card-title">{product.title}</h5>
            <img src={product.image} class="card-img-bottom" alt="..." />
            <p class="card-text"></p>

            <Link to={product.productLink}>
              <button
                type="button"
                class="btn btn-primary"
                style={{
                  backgroundColor: "#f57a50",
                  color: "white",
                  border: "none",
                  marginTop: "50px",
                  justifyContent: "space-between",
                }}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
