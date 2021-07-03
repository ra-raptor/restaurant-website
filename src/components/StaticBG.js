import React from "react";
import "../styles/StaticBG.css";

function StaticBG({ url, title, desc }) {
  let stl = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "50vh",
  };
  let stlTint = {
    background: "rgba(0,0,0,0.4)",
    width: "100%",
    height: "100%",
    color: "#fff",
  };
  return (
    <div style={stl}>
      <div className="tint" style={stlTint}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default StaticBG;
