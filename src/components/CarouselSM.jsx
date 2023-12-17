import React, { useRef, useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SlideOne from "../assets/mockuuups-swjTGrrEDygzQRqeUoNhTB.jpeg";
import SlideTwo from "../assets/mockuuups-u1SiVnMdkGutrFkyg8XKNX.jpeg";
import SlideThree from "../assets/mockuuups-cYgtU28htLPPr65LBmPGU8.jpeg";

import "../index.css";

import { Pagination } from "swiper/modules";

function CarouselSM() {
  return (
    <>
      <div id="projects-sm" className="bg-brand-beige h-full pt-7">
        <h2 className="text-3xl font-lexend font-bold ml-4">Projects</h2>{" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={SlideOne} alt="" />
            <div className="flex px-5 my-5">
              <span className="text-brand-black mr-2  font-lexend ">01</span>
              <div className="flex justify-between w-full">
                <h2 className="text-3xl font-lexend font-bold">QUICKbids</h2>
                <span className="text-brand-black self-end  font-lexend">
                  2023
                </span>
              </div>
            </div>
            <p className="text-brand-black px-5 mb-4 font-lexend">
              Quickbids was the semester project for the second year at Noroff.
              It is an auction website using an API to register users and deal
              with listings. It was made using HTML, SCSS, Bootstrap and
              Javascript.
            </p>
            <div className="flex px-5">
              <a
                className="flex mr-10 font-lexend font-bold"
                href="https://github.com/BishopWeyland/semester_project2"
              >
                {" "}
                <FaGithub className="mr-4" size={30} /> GitHub
              </a>
              <a
                className="flex font-lexend font-bold"
                href="https://guileless-biscotti-4f542b.netlify.app/"
              >
                {" "}
                <FaGlobe className="mr-4" size={30} /> QUICKbids
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideTwo} alt="" />
            <div className="flex px-5 my-5">
              <span className="text-brand-black mr-2  font-lexend">02</span>
              <div className="flex justify-between w-full">
                <h2 className="text-3xl font-lexend font-bold">E-Cart</h2>
                <span className="text-brand-black self-end font-lexend">
                  2023
                </span>
              </div>
            </div>
            <p className="text-brand-black px-5 mb-4 font-lexend">
              E-Cart was the Javascript Frameworks Course Assignment the second
              year at Noroff. It is an e-commerce made using an API. You can buy
              products and submit a contact form. It was made using React + Vite
              and Tailwind.
            </p>
            <div className="flex px-5">
              <a
                className="flex mr-10 font-lexend font-bold"
                href="https://github.com/BishopWeyland/javascript_frameworks_ca"
              >
                {" "}
                <FaGithub className="mr-4" size={30} /> GitHub
              </a>
              <a
                className="flex font-lexend font-bold"
                href="https://reliable-cajeta-6a87ed.netlify.app/"
              >
                {" "}
                <FaGlobe className="mr-4" size={30} /> E-Cart
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideThree} alt="" />
            <div className="flex px-5 my-5">
              <span className="text-brand-black mr-2  font-lexend">03</span>
              <div className="flex justify-between w-full">
                <h2 className="text-3xl font-lexend font-bold">Holidaze</h2>
                <span className="text-brand-black self-end font-lexend">
                  2023
                </span>
              </div>
            </div>
            <p className="text-brand-black px-5 mb-4 font-lexend">
              Holidaze was the Project Exam the second year at Noroff. Holidaze
              is using an API to register a user and book venues as well as post
              them if you are a manager. It was made using React + Vite and
              Tailwind.
            </p>
            <div className="flex px-5">
              <a
                className="flex mr-10 font-lexend font-bold"
                href="https://github.com/BishopWeyland/project_exam2"
              >
                {" "}
                <FaGithub className="mr-4" size={30} /> GitHub
              </a>
              <a
                className="flex font-lexend font-bold"
                href="https://rainbow-torrone-a7d34f.netlify.app/"
              >
                {" "}
                <FaGlobe className="mr-4" size={30} /> Holidaze
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CarouselSM;
