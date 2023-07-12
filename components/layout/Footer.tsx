import Link from "next/link";
import React from "react";
import { FiMapPin } from "react-icons/Fi";

const footer = () => {
  return (
    <section
      id="footer"
      className="pt-8 pb-16 bg-gradient-to-r text-[#787E85] font-medium from-[#34393E] via-[#2F3338] to-[#2B2F33]"
    >
      <div className="container mx-auto grid grid-cols-12">
        <div className="space-x-6">
          <h1 className="font-titleFont text-white font-bold">Coffeeee</h1>
          <p>
            Coffeeee is a cafe that serve many wariant of coffee and other
            dishes with very comfortable place.
          </p>
          <div className="flex gap-x-2">
            <FiMapPin className="h-12 w-12" />
            <span>Jl. Soedirman no 45, Jakarta Selatan, Indonesia</span>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="font-titleFont text-white font-bold">Facility</h1>
          <div className="flex flex-col gap-y-4">
            <Link href="">Private Room</Link>
            <Link href="">Meeting Room</Link>
            <Link href="">Event Space</Link>
            <Link href="">Creative Studio</Link>
            <Link href="">Custom Room</Link>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="font-titleFont text-white font-bold">Product</h1>
          <div className="flex flex-col gap-y-4">
            <Link href="">Coffee</Link>
            <Link href="">Beverages</Link>
            <Link href="">Dishes</Link>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="font-titleFont text-white font-bold">Support</h1>
          <div className="flex flex-col gap-y-4">
            <Link href="">About Us</Link>
            <Link href="">FAQs</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Help Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
