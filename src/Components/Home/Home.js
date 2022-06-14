import React from "react";
import FAQs from "../FAQs/FAQs";
import HaveARead from "../HaveARead/HaveARead";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurProducts from "../OurProducts/OurProducts";
import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <div>
      <HowItWorks />
      <OurProducts />
      <FAQs />
      <HaveARead />
      <Topics />
    </div>
  );
};

export default Home;
