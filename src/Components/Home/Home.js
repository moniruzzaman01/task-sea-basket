import React from "react";
import FAQs from "../FAQs/FAQs";
import HaveARead from "../HaveARead/HaveARead";
import Header from "../Header/Header";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurProducts from "../OurProducts/OurProducts";
import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <OurProducts />
      <FAQs />
      <HaveARead />
      <Topics />
    </div>
  );
};

export default Home;
