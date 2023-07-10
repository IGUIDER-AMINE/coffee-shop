import React from "react";

const Menu = () => {
  return (
    <section id="Menu">
      <div className="space-y-8 py-8 bg-gradient-to-r from-[#34393E] via-[#2F3338] to-[#2B2F33] min-h-[500px] ">
        <div className="container mx-auto space-y-8 px-4 lg:px-24">
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
      </div>
      <div className="space-y-8 px-4 lg:px-24 bg-gradient-to-r from-[#F0F0F0] via-[#F0F0F0] to-[#E5E5E5] min-h-[500px] ">
        <div className="container mx-auto "></div>
      </div>
    </section>
  );
};

export default Menu;
