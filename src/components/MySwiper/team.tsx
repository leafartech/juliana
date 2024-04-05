'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function Team() {
    return (
        <div className="overflow-hidden">
            <Swiper
                // slidesPerView={3}
                spaceBetween={32}
                grabCursor={true}
                loop={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 3
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
                <SwiperSlide className="swiper-slide sm:pb-12">
                    <div className="swiper-div">
                        <div className="relative">
                            <Image
                                src="/images/team/1.png"
                                alt="Depoimentos"
                                className="rounded"
                                layout="responsive"
                                width={462}
                                height={265}
                            />
                        </div>
                        <div className="pt-2 sm:pt-4 text-center h-36">
                            <h4 className="capitalize font-bold text-xl">Mariana Bellido Girotto</h4>
                            <ul className="list-inside list-disc text-base font-medium">
                                <li>Advogada OAB/PR 99.915 </li>
                                <li>Especialização em Direito Civil, Processo Civil e Trabalho - PUC Maringá.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide sm:pb-12 ">
                    <div className="swiper-div">
                        <div className="relative">
                            <Image
                                src="/images/team/2.png"
                                alt="Depoimentos"
                                className="rounded"
                                layout="responsive"
                                width={462}
                                height={265}
                            />
                        </div>
                        <div className="pt-2 sm:pt-4 text-center h-36">
                            <h4 className="capitalize font-bold text-xl">Pollyana Cristina Lapa Silva</h4>
                            <ul className="list-inside list-disc text-base font-medium">
                                <li>Bacharel em Direito - UNIPAR.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide sm:pb-12 ">
                    <div className="swiper-div">
                        <div className="relative">
                            <Image
                                src="/images/team/3.png"
                                alt="Depoimentos"
                                className="rounded"
                                layout="responsive"
                                width={462}
                                height={265}
                            />
                        </div>
                        <div className="pt-2 sm:pt-4 text-center h-36">
                            <h4 className="capitalize font-bold text-xl">Júlia Neres Lima Xavier</h4>
                            <ul className="list-inside list-disc text-base font-medium">
                                <li>Secretária Executiva</li>
                                <li>Graduanda em Ciências Contábeis</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide sm:pb-12 ">
                    <div className="swiper-div">
                        <div className="relative">
                            <Image
                                src="/images/team/4.png"
                                alt="Depoimentos"
                                className="rounded"
                                layout="responsive"
                                width={462}
                                height={265}
                            />
                        </div>
                        <div className="pt-2 sm:pt-4 text-center h-36">
                            <h4 className="capitalize font-bold text-xl">Fernanda Montanhini Favetta</h4>
                            <ul className="list-inside list-disc text-base font-medium">
                                <li>OAB/PR 98.588</li>
                                <li>Especializada em Direito e Processo Penal - UNIPAR.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide sm:pb-12 ">
                    <div className="swiper-div">
                        <div className="relative">
                            <Image
                                src="/images/team/5.png"
                                alt="Depoimentos"
                                className="rounded"
                                layout="responsive"
                                width={462}
                                height={265}
                            />
                        </div>
                        <div className="pt-2 sm:pt-4 text-center h-36">
                            <h4 className="capitalize font-bold text-xl">Vitor Prado</h4>
                            <ul className="list-inside list-disc text-base font-medium">
                                <li>Advogado - Pós graduando em direito do trabalho e prática trabalhista</li>
                                {/* <li></li> */}
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide sm:pb-12 ">
                    <div className="swiper-div">
                        <div className="relative">
                            <Image
                                src="/images/team/6.png"
                                alt="Depoimentos"
                                className="rounded"
                                layout="responsive"
                                width={462}
                                height={265}
                            />
                        </div>
                        <div className="pt-2 sm:pt-4 text-center h-36">
                            <h4 className="capitalize font-bold text-xl">Juliana Iatskiu Furquim</h4>
                            <ul className="list-inside list-disc text-base font-medium">
                                <li>Advogada OAB/PR 46.454</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide sm:pb-12 ">
                    <div className="swiper-div">
                        <div className="relative">
                            <Image
                                src="/images/team/7.png"
                                alt="Depoimentos"
                                className="rounded"
                                layout="responsive"
                                width={462}
                                height={265}
                            />
                        </div>
                        <div className="pt-2 sm:pt-4 text-center h-36">
                            <h4 className="capitalize font-bold text-xl">Igor Juliano Bogo</h4>
                            <ul className="list-inside list-disc text-base font-medium">
                                <li>Advogado OAB/PR 118.522</li>
                                <li>Advogado especializado em Direito Previdenciário, graduado pela UEM.</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}