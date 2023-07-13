import React from "react";

const Statistic = () => {
  return (
    <div className="space-y-8 px-4 lg:px-24">
      <h1 className="font-semibold text-xl sm:text-[16px] lg:text-xl font-titleFont text-[#545C64]">
        Enjoy your coffee in our comfortable
      </h1>
      <div className="flex gap-x-4">
        <div className="font-titleFont">
          <div className="text-white text-4xl lg:text-6xl">
            50<span className="text-[#D49C66] font-light">+</span>
          </div>
          <div className="text-[#A6A9AB] text-[14px] md:text-[16px]">
            Private Room
          </div>
        </div>
        <div className="font-titleFont">
          <div className="text-white text-4xl lg:text-6xl">
            25
            <span className="text-[#D49C66] font-light">+</span>
          </div>
          <div className="text-[#A6A9AB] text-[14px] md:text-[16px]">
            Event Space
          </div>
        </div>
        <div className="font-titleFont">
          <div className="text-white text-4xl lg:text-6xl">
            15<span className="text-[#D49C66] font-light">+</span>
          </div>
          <div className="text-[#A6A9AB] text-[14px] md:text-[16px]">
            Creative Studio
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
