import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Dishes from "../components/Dishes";
import Categories from "../components/Categories";
import StaticBG from "../components/StaticBG";
import restr from "../images/res.jpg";
import chef from "../images/chef.jpg";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Dishes />
      <StaticBG
        url={restr}
        title="The best Dining Experience."
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus."
      />
      <Categories />
      <StaticBG
        url={chef}
        title="Our Chef are the Best in Town."
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus."
      />
      <Footer />
    </div>
  );
}

export default Home;
