import React from "react";

const Order = () => {
  return (
    <section
      id="Order"
      className="container mx-auto px-4 lg:px-24 grid gap-x-8 grid-cols-12 items-center py-36"
    >
      <h1 className="text-[#2B2F33] col-span-3 text-4xl lg:text-5xl xl:text-5xl font-medium font-titleFont">
        Take Your <br /> Coffe Now
      </h1>
      <div className="col-span-7">
        <p className="text-[#787E85] max-w-[80%] mx-auto font-medium">
          Don&apos;t let your coffee cold, let&apos;s go to{" "}
          <span className="font-semibold">Couffeeee</span> and get your coffe
          and boost your day now.
        </p>
      </div>
      <div className="col-span-2  h-auto">
        <button className="text-white border-[3px] border-l-[#484956] border-t-[#909299] w-full shadow border-b-[#484956] bg-[#1F2131] py-2 px-3">
          Our Location
        </button>
      </div>
    </section>
  );
};

export default Order;
