import Link from "next/link";
import React from "react";
// import { FiMapPin } from "react-icons/Fi";
import { GiCircleClaws } from "react-icons/Gi";

const footer = () => {
  return (
    <section
      id="footer"
      className="pt-8 bg-gradient-to-r text-[#787E85] font-medium from-[#34393E] via-[#2F3338] to-[#2B2F33]"
    >
      <div className="container mx-auto px-4 space-y-10">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-4">
          <div className="space-y-8 col-span-6 flex flex-col ">
            <h1 className="font-titleFont flex items-center text-white space-x-2 text-3xl font-medium">
              <GiCircleClaws className="h-10 w-10" />
              <span>Coffeeee</span>
            </h1>
            <p className="max-w-[400px]">
              Coffeeee is a cafe that serve many wariant of coffee and other
              dishes with very comfortable place.
            </p>
            <div className="flex gap-x-2 max-w-[400px]">
              {/* <FiMapPin className="h-6 w-6" /> */}
              <span>Jl. Soedirman no 45, Jakarta Selatan, Indonesia</span>
            </div>
          </div>
          <div className="space-y-6 col-span-6 sm:col-span-3 md:col-span-2">
            <h1 className="font-titleFont flex text-white font-bold">
              Facility
            </h1>
            <div className="flex flex-col gap-y-4">
              <Link href="">Private Room</Link>
              <Link href="">Meeting Room</Link>
              <Link href="">Event Space</Link>
              <Link href="">Creative Studio</Link>
              <Link href="">Custom Room</Link>
            </div>
          </div>
          <div className="space-y-6 col-span-6 sm:col-span-3 md:col-span-2">
            <h1 className="font-titleFont text-white font-bold">Product</h1>
            <div className="flex flex-col gap-y-4">
              <Link href="">Coffee</Link>
              <Link href="">Beverages</Link>
              <Link href="">Dishes</Link>
            </div>
          </div>
          <div className="space-y-6 col-span-6 sm:col-span-2">
            <h1 className="font-titleFont text-white font-bold">Support</h1>
            <div className="flex flex-col gap-y-4">
              <Link href="">About Us</Link>
              <Link href="">FAQs</Link>
              <Link href="">Privacy Policy</Link>
              <Link href="">Help Me</Link>
            </div>
          </div>
        </div>
        <div>
          <hr className="bg-[#7E8083]" />
          <div className="text-center py-4 text-white text-[12px] md:text-lg">
            &copy; 2021 Couffeee. All right reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
