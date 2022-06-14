import React from "react";
import topic1 from "../../assets/topic1.png";
import topic2 from "../../assets/topic2.png";

const Topics = () => {
  return (
    <div className=" px-20 my-5 pt-5">
      <h1 className=" text-2xl font-bold uppercase text-center mb-3">
        HAVE A READ
      </h1>
      <div>
        <div className=" border-2 rounded-3xl shadow bg-white mb-3 flex p-0">
          <div className=" w-[60%] pt-5 pb-5 pl-5">
            <h4 className=" font-bold text-lg uppercase">
              topics you can’t miss
            </h4>
            <p className=" my-5">
              Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
              nisl adipiscing posuere et a. Tincidunt consectetur sapien
              pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
              massa felis, et. Cursus tortor ut fames sapien a vulputate amet
              malesuada.
            </p>
            <h3 className=" text-[#0E79BD] text-xl">{`READ MORE >`}</h3>
          </div>
          <img className=" w-[50%]" src={topic1} alt="" />
        </div>
        <div className=" border-2 rounded-3xl shadow bg-white mb-3 flex p-0">
          <div className=" w-[60%] pt-5 pb-5 pl-5">
            <h4 className=" font-bold text-lg uppercase">
              how to clean/cut your seafood
            </h4>
            <p className=" my-5">
              Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
              nisl adipiscing posuere et a. Tincidunt consectetur sapien
              pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
              massa felis, et. Cursus tortor ut fames sapien a vulputate amet
              malesuada.
            </p>
            <h3 className=" text-[#0E79BD] text-xl">{`READ MORE >`}</h3>
          </div>
          <img className=" w-[50%]" src={topic2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topics;
