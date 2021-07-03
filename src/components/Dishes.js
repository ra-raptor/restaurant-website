import React from "react";
import "../styles/dishes.css";
import Card from "./Card";
// import img1 from "../images/coffee-geek-4A1fKj5RrJA-unsplash-copy.jpg";
// import img2 from "../images/img2.jpg";
import img01 from "../images/img01.jpg";
import img02 from "../images/img02.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
function Dishes() {
  return (
    <section className="dishes full-height">
      <h2>Our Famous Dishes</h2>
      <hr className="hr-title" />
      <div className="gallery-warpper">
        <Card url={img01} name="Chicken Roll" cat="Non Veg" price="59" />
        <Card url={img02} name="Pizza" cat="Italian" price="399" />
        <Card url={img3} name="Samosa" cat="Snacks" price="10" />
        <Card url={img4} name="Idli" cat="South Indian" price="149" />
        <Card url={img5} name="French Fries" cat="Snacks" price="89" />
        <Card url={img6} name="Noodles" cat="Chinese" price="99" />
      </div>
    </section>
  );
}

export default Dishes;
