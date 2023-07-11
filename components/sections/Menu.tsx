import React from "react";
import Image from "next/image";
import Link from "next/link";
import { img2 } from "@/public/asstes";
import { RiHeartLine } from "react-icons/ri";

const Menu = () => {
  return (
    <section id="Menu">
      <div className="pt-8 pb-16 bg-gradient-to-r from-[#34393E] via-[#2F3338] to-[#2B2F33]">
        <div className="container mx-auto space-y-36">
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
          {/* ----------------------------------------- */}
          <div className="px-4 lg:px-24 gap-x-10 flex items-center">
            <div className="hidden md:block flex-1 relative">
              <Image
                src={img2}
                alt="COFFEEEE"
                className="object-cover border-[4px] w-[300px]  lg:w-[400px]  border-l-[#484956] h-[500px] lg:h-[640px] border-t-[#909299] shadow border-b-[#484956]"
                quality={100}
                width={400}
                height={600}
              />
              <div className="absolute border-[3px] border-l-[#484956] border-b-[#909299] bottom-[5%] left-[30%] bg-white min-h-[50px] min-w-[350px] xl:max-w-[60%]">
                <div className="relative p-6 pl-8">
                  <RiHeartLine className="absolute text-white bg-[#2B2F33] p-2 rounded-full h-12 w-12 left-[-26px]" />
                  <q className="font-medium">
                    I really love the Cappucino. The coffee was very smooth.
                  </q>
                </div>
              </div>
            </div>
            <div className="space-y-8  h-[500px] md:max-w-[50%]">
              <div className="text-[#D9A97A] font-medium font-titleFont">
                OUR COUFFEE
              </div>
              <h1 className="text-white text-4xl lg:text-5xl xl:text-7xl font-semibold font-titleFont">
                Choose Your <br /> Favorite Coffee
              </h1>
              <p className="text-[#B3B5B6] font-medium lg:max-w-[65%]">
                More than 100+ type of coffee are ready to serve by our
                professionals.
              </p>
              <ul className="text-white font-medium font-titleFont flex  gap-6 text-2xl lg:text-3xl">
                <li className="text-[#D9A97A]">Cappucino</li>
                <li>Late</li>
                <li>Arabica</li>
              </ul>
              <div>
                <Link
                  href="#"
                  className="underline text-white font-bold text-2xl"
                >
                  More menu
                </Link>
              </div>
            </div>
          </div>
          {/* ----------------------------------------- */}
        </div>
      </div>
      <div className="space-y-8 px-4 lg:px-24 bg-gradient-to-r from-[#F0F0F0] via-[#F0F0F0] to-[#E5E5E5] min-h-[500px] ">
        <div className="container mx-auto "></div>
      </div>
    </section>
  );
};

export default Menu;
