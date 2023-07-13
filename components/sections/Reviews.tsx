import { img13, img14, img15, img16 } from "@/public/asstes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { reviews_data } from "@/util/data";

const Reviews = () => {
  return (
    <div
      id="Reviews"
      className="space-y-6 md:space-y-12 pt-20 md:pt-36 container mx-auto px-4 lg:px-24"
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
          className="object-contain sm:max-w-[45%] md:max-w-[25%]"
        />
      </div>
      <div className="pt-8 pb-0 md:py-20">
        <div className="container mx-auto">
          <div className="gap-x-10 flex flex-col md:flex-row flex-warp items-center">
            <div className="space-y-6 md:space-y-8 min-w-[50%] md:max-w-[50%]">
              <div className="text-[#D9A97A] font-medium font-titleFont">
                OUR REVIEW
              </div>
              <h1 className="text-[#2B2F33] text-4xl lg:text-5xl xl:text-5xl font-medium font-titleFont">
                Let Our Customer Talk About Us
              </h1>
              <p className="text-[#787E85] font-medium lg:max-w-[80%]">
                We always providing the best to make our customer pleasent with
                our services.
              </p>
              <div className="space-x-8">
                <Link href="#" className="underline text-[#ACAEAF] font-bold">
                  Before
                </Link>
                <Link href="#" className="underline text-[#2B2F33] font-bold">
                  More menu
                </Link>
              </div>
            </div>
            <div className="max-w-[100%] md:max-w-[45%] lg:max-w-[70%] pt-8">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                loop={true}
                speed={3000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="min-h-[250px] md:min-h-[300px]"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 1,
                  },
                  905: {
                    slidesPerView: 2,
                  },
                }}
              >
                {reviews_data?.map((item) => {
                  return (
                    <SwiperSlide key={item?.id}>
                      <div
                        className={`${
                          item?.id % 2 == 0 ? "swiperWhite" : "swiperSlate"
                        } p-4 shadow space-y-5 font-medium`}
                      >
                        <q>{item?.reviews}</q>
                        <div className="space-y-1">
                          <div className="text-[14px]">{item?.person_name}</div>
                          <div className="text-[#787B7E] text-[12px]">
                            {item?.status}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
