import React from "react";
import "../styles/landing.css";

function Landing() {
  return (
    <section className="landing">
      <h1>The Best Restaurant in the town.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <div className="btns">
        <div className="btn secondary">Learn More</div>
        <div className="btn primary">View Menu</div>
      </div>
    </section>
  );
}

export default Landing;
