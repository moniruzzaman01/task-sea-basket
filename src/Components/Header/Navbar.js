import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className=" flex justify-around items-center h-20">
        <div className="h-[60%]">
          <img className=" h-full" src={logo} alt="" />
        </div>
        <div className="">
          <ul className="flex gap-4 text-[#0E79BD] font-bold">
            <li>Category</li>
            <li>FAQs</li>
            <li>My Cart</li>
            <li>
              <button className=" btn bg-[#0E79BD] text-white border-none btn-sm px-4">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
