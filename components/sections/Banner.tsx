import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { img1 } from "@/public/asstes";
import Image from "next/image";

const Banner = () => {
  return (
    <section id="Home" className="relative bg-[#F0F0F0] pb-16 pt-24">
      <div className=" bg-[#F0F0F0] container mx-auto px-4 flex items-center">
        <div className="space-y-8">
          <div className="text-[#D9A97A] font-medium font-titleFont">
            COUFFEEEE
          </div>
          <h1 className="text-[#2B2F33] md:text-4xl lg:text-5xl xl:text-7xl font-semibold font-titleFont">
            Enjoy Your <br /> Morning Coffee
          </h1>
          <p className="text-[#787E85] font-medium lg:max-w-[65%]">
            Boost your productivity and buid your mood with a glass of coffee in
            the morning.
          </p>
          <div className="flex items-center gap-x-4 font-medium">
            <button className="text-white border-[3px] border-l-[#484956] border-t-[#909299] shadow border-b-[#484956] bg-[#1F2131] py-2 px-3">
              Get your now
            </button>
            <div>
              <Link href="#" className="underline">
                Reservation
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block ">
          <Image
            src={img1}
            alt="COFFEEEE"
            className="object-cover border-[4px] top-24 border-l-[#484956] h-[600px] absolute border-t-[#909299] shadow border-b-[#484956]"
            quality={100}
            width={400}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
