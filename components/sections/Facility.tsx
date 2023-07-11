import React from "react";
import Image from "next/image";
import Link from "next/link";
import { img2, img4 } from "@/public/asstes";
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
    </section>
  );
};

export default Facility;
