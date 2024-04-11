'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testmonials() {
    return (
        <div className="overflow-hidden">
            <Swiper
                slidesPerView={2}
                spaceBetween={32}
                grabCursor={true}
                loop={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 2
                    },
                    500: {
                        slidesPerView: 1
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                className="mySwiper sm:max-w-7xl"
            >
                <SwiperSlide className="swiper-slide pb-12 ">
                    <div className="w-full h-72 flex items-center overflow-hidden">
                        <Image
                            src="/images/test/1.png"
                            alt="Depoimentos"
                            className="rounded"
                            width={610}
                            height={241}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pb-12 ">
                    <div className="w-full h-80 flex items-center overflow-hidden">
                        <Image
                            src="/images/test/2.png"
                            alt="Depoimentos"
                            className="rounded"
                            width={610}
                            height={140}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pb-12 ">
                    <div className="w-full h-80 flex items-center overflow-hidden">
                        <Image
                            src="/images/test/3.png"
                            alt="Depoimentos"
                            className="rounded"
                            width={610}
                            height={320}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pb-12 ">
                    <div className="w-full h-80 flex items-center overflow-hidden">
                        <Image
                            src="/images/test/4.png"
                            alt="Depoimentos"
                            className="rounded"
                            width={610}
                            height={352}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pb-12 ">
                    <div className="w-full h-80 flex items-center overflow-hidden">
                        <Image
                            src="/images/test/5.png"
                            alt="Depoimentos"
                            className="rounded"
                            width={610}
                            height={424}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pb-12 ">
                    <div className="w-full h-80 flex items-center overflow-hidden">
                        <Image
                            src="/images/test/6.png"
                            alt="Depoimentos"
                            className="rounded"
                            width={610}
                            height={344}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pb-12 ">
                    <div className="w-full h-80 flex items-center overflow-hidden">
                        <Image
                            src="/images/test/7.png"
                            alt="Depoimentos"
                            className="rounded"
                            width={610}
                            height={273}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide pb-12 ">
                    <div className="w-full h-80 flex items-center overflow-hidden">
                        <Image
                            src="/images/test/8.png"
                            alt="Depoimentos"
                            className="rounded"
                            width={610}
                            height={244}
                            layout="responsive"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}