import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { img1 } from "@/public/asstes";
import Image from "next/image";

const Banner = () => {
  return (
    <section id="Home" className=" bg-[#F0F0F0] py-8 md:py-16 lg:pt-24">
      <div className=" bg-[#F0F0F0] container mx-auto px-4 lg:px-24 flex ">
        <div className="space-y-8 md:max-w-[50%]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#D9A97A] font-medium font-titleFont"
          >
            COUFFEEEE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#2B2F33] text-4xl lg:text-5xl xl:text-7xl font-semibold font-titleFont"
          >
            Enjoy Your <br /> Morning Coffee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#787E85] font-medium lg:max-w-[65%]"
          >
            Boost your productivity and buid your mood with a glass of coffee in
            the morning.
          </motion.p>
          <div className="flex items-center gap-x-4 font-medium">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white border-[3px] border-l-[#484956] border-t-[#909299] shadow border-b-[#484956] bg-[#1F2131] py-2 px-3"
            >
              Get your now
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="#" className="underline">
                Reservation
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden md:block relative flex-1"
        >
          <Image
            src={img1}
            alt="COFFEEEE"
            className="object-cover border-[4px] right-4 md:right-0 lg:right-[-18px] xl:right-0 top-[-52px] w-[300px] lg:w-[400px]  border-l-[#484956] h-[500px] lg:h-[640px] absolute border-t-[#909299] shadow border-b-[#484956]"
            quality={100}
            width={400}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
