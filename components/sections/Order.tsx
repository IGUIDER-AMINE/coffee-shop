import React from "react";

const Order = () => {
  return (
    <section
      id="Order"
      className="container mx-auto px-4 lg:px-24 grid gap-x-8 grid-cols-12 place-ite py-36"
    >
      <h1 className="text-[#2B2F33] col-span-3 text-4xl lg:text-5xl xl:text-5xl font-medium font-titleFont">
        Take Your <br /> Coffe Now
      </h1>
      <p className="text-[#787E85]  col-span-6 font-medium">
        Don&apos;t let your coffee cold, let&apos;s go to{" "}
        <span className="font-semibold">Couffeeee</span> and get your coffe and
        boost your day now.
      </p>
      <button className="text-white col-span-3 border-[3px] border-l-[#484956] border-t-[#909299] shadow border-b-[#484956] bg-[#1F2131] py-2 px-3">
        Our Location
      </button>
    </section>
  );
};

export default Order;
