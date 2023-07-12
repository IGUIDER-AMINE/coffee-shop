import { img13, img14, img15, img16 } from "@/public/asstes";
import Image from "next/image";
import React from "react";

const Reviews = () => {
  return (
    <div
      id="Reviews"
      className="space-y-12 py-36 container mx-auto px-4 lg:px-24"
    >
      <h1 className="text-[#787E85] font-medium font-titleFont text-center">
        They trust <span className="text-[#2B2F33]">Couffeeee</span> as their
        work place
      </h1>
      <div className="flex flex-wrap justify-between space-y-4">
        <Image
          src={img13}
          alt="Client"
          className="object-contain sm:max-w-[45%] md:max-w-[25%]"
        />
        <Image
          src={img14}
          alt="Client"
          className="object-contain sm:max-w-[45%] md:max-w-[25%]"
        />
        <Image
          src={img15}
          alt="Client"
          className="object-contain sm:max-w-[45%] md:max-w-[25%]"
        />
        <Image
          src={img16}
          alt="Client"
          className="object-contain bg-red-400 sm:max-w-[45%] md:max-w-[25%]"
        />
      </div>
    </div>
  );
};

export default Reviews;
