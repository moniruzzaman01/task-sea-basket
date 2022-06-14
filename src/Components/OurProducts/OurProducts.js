import React from "react";
import vidImg from "../../assets/Rectangle 65.png";

const OurProducts = () => {
  return (
    <div className=" px-20 my-5 pt-5">
      <h1 className=" text-2xl font-bold uppercase text-center mb-3">
        A GLANCE AT OUR PRODUCT
      </h1>
      <video src="../../assets/sample_640x360.mp4" controls></video>
      {/* <img src={vidImg} alt="" /> */}
    </div>
  );
};

export default OurProducts;
