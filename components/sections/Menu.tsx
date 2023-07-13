import React from "react";
import Statistic from "../elements/Statistic";
import Coffee from "../elements/Coffee";
import Dishes from "../elements/Dishes";

const Menu = () => {
  return (
    <section id="Menu">
      <div className="pt-8 pb-16 bg-gradient-to-r from-[#34393E] via-[#2F3338] to-[#2B2F33]">
        <div className="container mx-auto space-y-36">
          <Statistic />
          <Coffee />
        </div>
      </div>
      <div className="py-36  px-4 lg:px-24">
        <Dishes />
      </div>
    </section>
  );
};

export default Menu;
