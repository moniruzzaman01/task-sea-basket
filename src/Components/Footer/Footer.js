import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#0E79BD]">
      <div className=" flex justify-around pt-5">
        <div className=" h-32 w-32">
          <img src={logo} alt="" />
        </div>
        <div className=" flex justify-between gap-5 text-white capitalize">
          <div>
            <p className=" cursor-pointer mb-2">support</p>
            <p className=" cursor-pointer mb-2">about us</p>
            <p className=" cursor-pointer mb-2">privacy policy</p>
          </div>
          <div>
            <p className=" cursor-pointer mb-2">terms & conditions</p>
            <p className=" cursor-pointer mb-2">return & refund policy</p>
            <p className=" cursor-pointer mb-2">shipping & delivery policy</p>
          </div>
        </div>
      </div>
      <p className=" text-center text-white pb-5">
        Sea Basket I All Rights Reserved I 2021 Copyright
      </p>
    </div>
  );
};

export default Footer;
