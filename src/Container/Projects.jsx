import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import deadpool from "../img/crypto.avif";
import img1 from "../img/store.jpg";
import img3 from "../img/weather.jpg";
import img4 from "../img/cake.jpg";
import game from "../img/game4.jpg";
import "./Projects.css";

const Projects = () => {
  const projectImages = [
    {
      src: img1,
      alt: "Project 1",
      title: "E-commerce Store",
      link: "https://github.com/SunilChauhan24/E-commerce",
    },
    {
      src: img3,
      alt: "Project 2",
      title: "Weather Application",
      link: "https://github.com/SunilChauhan24/weather-app-javascript",
    },
    {
      src: img4,
      alt: "Project 3",
      title: "Bakery",
      link: "https://github.com/SunilChauhan24/Bakery",
    },
    {
      src: game,
      alt: "Project 5",
      title: "Game Station",
      link: "https://github.com/SunilChauhan24/Game-Station",
    },
    {
      src: deadpool,
      alt: "Project 6",
      title: "Crypto Tracker",
      link: "https://github.com/SunilChauhan24/Crypto-Tracker",
    }, // Add more images as needed
  ];

  return (
    <div id="Project" className="projects-section">
      <h2>Projects</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation
        loop
        speed={3000}
        autoplay={{
          delay: 0, // Continuous autoplay
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {projectImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              {image.link ? (
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img src={image.src} alt={image.alt} />
                </a>
              ) : (
                <img src={image.src} alt={image.alt} />
              )}
              <h3>{image.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
