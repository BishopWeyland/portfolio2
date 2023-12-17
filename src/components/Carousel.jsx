import React, { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "../index.css";

import SlideOne from "../assets/mockuuups-swjTGrrEDygzQRqeUoNhTB.jpeg";
import SlideTwo from "../assets/mockuuups-u1SiVnMdkGutrFkyg8XKNX.jpeg";
import SlideThree from "../assets/mockuuups-cYgtU28htLPPr65LBmPGU8.jpeg";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const projects = [
    {
      title: "QUICKbids",
      year: "2023",
      description:
        "Quickbids was the semester project for the second year at Noroff. It is an auction website using an API to register users and deal with listings. It was made using HTML, SCSS, Bootstrap, and Javascript.",
      githubLink: "https://github.com/BishopWeyland/semester_project2",
      liveDemoLink: "https://guileless-biscotti-4f542b.netlify.app/",
    },
    {
      title: "E-Cart",
      year: "2023",
      description:
        "E-Cart was the Javascript Frameworks Course Assignment the second year at Noroff. It is an e-commerce made using an API. You can buy products and submit a contact form. It was made using React + Vite and Tailwind.",
      githubLink: "https://github.com/BishopWeyland/javascript_frameworks_ca",
      liveDemoLink: "https://reliable-cajeta-6a87ed.netlify.app/",
    },
    {
      title: "Holidaze",
      year: "2023",
      description:
        "Holidaze was the Project Exam the second year at Noroff. Holidaze is using an API to register a user and book venues as well as post them if you are a manager. It was made using React + Vite and Tailwind.",
      githubLink: "https://github.com/BishopWeyland/project_exam2",
      liveDemoLink: "https://rainbow-torrone-a7d34f.netlify.app/",
    },
  ];

  return (
    <>
      <div id="projects" className="min-h-screen h-full bg-brand-beige pt-20">
        <h2 className="text-4xl font-lexend font-bold ml-36">Projects</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={60}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <img
                src={
                  index === 0 ? SlideOne : index === 1 ? SlideTwo : SlideThree
                }
                alt={`Project: ${project.title}`}
                className=" rounded-2xl"
              />
              <div
                className="text-container"
                style={{ display: index === activeIndex ? "block" : "none" }}
              >
                <div className="flex my-5">
                  <span className="text-brand-black mr-2 text-1xl font-lexend">{`0${
                    index + 1
                  }`}</span>
                  <div className="flex justify-between w-full">
                    <h2 className="text-3xl font-lexend font-bold">
                      {project.title}
                    </h2>
                    <span className="text-brand-black self-end text-1xl font-lexend">
                      {project.year}
                    </span>
                  </div>
                </div>
                <p className="text-brand-black mb-4  font-lexend">
                  {project.description}
                </p>
                <div className="flex">
                  <a
                    className="flex mr-10 font-lexend font-bold  hover:border-black"
                    href={project.githubLink}
                  >
                    <FaGithub className="mr-4" size={30} /> GitHub
                  </a>
                  <a
                    className="flex font-lexend font-bold  hover:border-black"
                    href={project.liveDemoLink}
                  >
                    <FaGlobe className="mr-4" size={30} /> {project.title}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
