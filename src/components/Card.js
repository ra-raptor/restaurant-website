import React from "react";

function Card({ url, name, cat, price }) {
  const bgStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "180px",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="card">
      <div className="bg" style={bgStyle}></div>
      <p className="name">{name}</p>
      <p className="cat">{cat}</p>
      <hr />
      <div className="cta">
        <p className="price">&#8377; {price}</p>
        <div className="buy">BUY NOW</div>
      </div>
    </div>
  );
}

export default Card;
