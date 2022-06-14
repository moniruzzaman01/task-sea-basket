import React from "react";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";

const Category = () => {
  return (
    <div className=" my-5">
      <h2 className=" text-xl font-bold uppercase mb-3">Category</h2>
      <div className=" grid grid-cols-3 gap-24 text-center">
        <div className=" border-2 rounded-3xl py-4 shadow bg-white">
          <img className="mx-auto" src={cat1} alt="" />
          <h4 className=" font-bold text-lg uppercase">Fish</h4>
        </div>
        <div className=" border-2 rounded-3xl py-4 shadow bg-white">
          <img className="mx-auto" src={cat2} alt="" />
          <h4 className=" font-bold text-lg uppercase">crustaceans </h4>
        </div>
        <div className=" border-2 rounded-3xl py-4 shadow bg-white">
          <img className="mx-auto" src={cat3} alt="" />
          <h4 className=" font-bold text-lg uppercase">EXOTIC</h4>
        </div>
      </div>
    </div>
  );
};

export default Category;
