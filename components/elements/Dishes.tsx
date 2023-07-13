import { img4 } from "@/public/asstes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiHeartLine } from "react-icons/ri";

const Dishes = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 gap-x-10 flex items-center">
        <div className="space-y-8 md:max-w-[50%]">
          <div className="text-[#D9A97A] font-medium font-titleFont">
            OUR DISHES
          </div>
          <h1 className="text-[#2B2F33] text-4xl lg:text-5xl xl:text-5xl font-medium font-titleFont">
            Complete Your Coffee with Our Dishes
          </h1>
          <p className="text-[#787E85] font-medium lg:max-w-[65%]">
            Enjoy your coffee with our tasty dishes that will build your mood.
          </p>
          <ul className="text-[#2B2F33] font-medium font-titleFont flex flex-col sm:flex-row gap-2 sm:gap-6 text-2xl lg:text-3xl">
            <li>Black Forest</li>
            <li className="text-[#D9A97A]">Crème</li>
            <li className="text-[#D9A97A]">Tiramisu</li>
          </ul>
          <div>
            <Link
              href="#"
              className="underline text-[#2B2F33] font-bold text-2xl"
            >
              More menu
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-end flex-1 relative">
          <Image
            src={img4}
            alt="COFFEEEE"
            className="object-cover border-[4px] w-[300px]  lg:w-[400px]  border-l-[#484956] h-[500px] lg:h-[640px] border-t-[#909299] shadow border-b-[#484956]"
            quality={100}
            width={400}
            height={600}
          />
          <div className="absolute border-[3px] border-l-[#484956] border-t-[#3D4145] border-b-[#909299] bottom-[4%]  lg:top-[5%] right-[25%] lg:right-[30%] bg-white min-h-[50px] max-h-[100px] min-w-[350px] xl:max-w-[60%]">
            <div className="relative p-6 pl-8">
              <RiHeartLine className="absolute text-white bg-[#2B2F33] p-2 rounded-full h-12 w-12 left-[-26px]" />
              <q className="font-medium text-[#8B8D8F]">
                I really love the Tiramisu. The cake was very smooth and tasty.
              </q>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
