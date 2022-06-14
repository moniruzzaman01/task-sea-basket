import React from "react";
import Category from "./Category";

const HowItWorks = () => {
  return (
    <div className=" px-20">
      <h1 className=" text-2xl font-bold uppercase text-center mb-3">
        how it works
      </h1>
      <p className=" text-center text-lg">
        Sea Basket delivers fresh sourced seafood in a few easy clicks
      </p>
      <Category />
    </div>
  );
};

export default HowItWorks;
