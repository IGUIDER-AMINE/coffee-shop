import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  img10,
  img11,
  img12,
  img2,
  img4,
  img6,
  img7,
  img8,
  img9,
} from "@/public/asstes";
import { RiHeartLine } from "react-icons/ri";

const Facility = () => {
  return (
    <section id="Facility">
      <div className="px-4 lg:px-24 pb-32 bg-gradient-to-r from-[#F0F0F0] via-[#F0F0F0] to-[#E5E5E5]">
        <div className="container mx-auto">
          <div className="space-y-8 text-center">
            <div className="text-[#D9A97A] font-medium font-titleFont">
              OUR FACILITY
            </div>
            <h1 className="text-[#2B2F33] text-4xl lg:text-5xl xl:text-5xl font-medium font-titleFont">
              Be Comfort In Our Places
            </h1>
            <p className="text-[#787E85] font-medium">
              Our place designed by pro architecture with psychologist to <br />
              build best place suit you.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-24 bg-gradient-to-r from-[#34393E] via-[#2F3338] to-[#2B2F33]">
        <div className="container mx-auto relative min-h-[450px]">
          <div className="absolute top-[-50px] w-full">
            <div className="flex gap-x-8 z-10">
              <div className="w-[65%]">
                <Image
                  src={img10}
                  alt="COFFEEEE"
                  className="object-cover w-full border-[4px] border-l-[#484956] max-h-[250px]  border-t-[#909299] shadow border-b-[#484956]"
                  quality={100}
                  width={400}
                  height={250}
                />
              </div>
              <div className="w-[35%] right-0">
                <Image
                  src={img8}
                  alt="COFFEEEE"
                  className="object-cover border-[4px] border-l-[#484956] border-t-[#909299] h-full shadow border-b-[#484956]"
                  quality={100}
                  width={400}
                  height={250}
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-50px] w-full">
            <div className="flex gap-x-8 z-10">
              <div className="w-[35%] right-0">
                <Image
                  src={img9}
                  alt="COFFEEEE"
                  className="object-cover border-[4px] border-l-[#484956] border-t-[#909299] h-full shadow border-b-[#484956]"
                  quality={100}
                  width={400}
                  height={250}
                />
              </div>
              <div className="w-[65%]">
                <Image
                  src={img12}
                  alt="COFFEEEE"
                  className="object-cover w-full border-[4px] border-l-[#484956] max-h-[250px]  border-t-[#909299] shadow border-b-[#484956]"
                  quality={100}
                  width={400}
                  height={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
