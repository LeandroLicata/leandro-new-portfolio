import React, { MouseEventHandler } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RxDoubleArrowLeft } from "react-icons/rx";
import projectsData from "./projectsData";

interface ArrowProps {
  onClick: MouseEventHandler;
}

const arrowStyles: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  cursor: "pointer",
  fontSize: "90px",
  color: "white",
};

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="slick-arrow"
    style={{ ...arrowStyles, right: "-100px" }}
    onClick={onClick}
  >
    <SlArrowRight />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="slick-arrow"
    style={{ ...arrowStyles, left: "-100px" }}
    onClick={onClick}
  >
    <SlArrowLeft />
    {/* <RxDoubleArrowLeft /> */}
  </div>
);

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: (
      <NextArrow
        onClick={function (event: React.MouseEvent<Element, MouseEvent>): void {
          // throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        onClick={function (event: React.MouseEvent<Element, MouseEvent>): void {
          // throw new Error("Function not implemented.");
        }}
      />
    ),
  };

  return (
    <section className="work-content-card relative">
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index} className="p-8 text-light-blue">
            <div className="w-full md:flex">
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={`${project.title} Project Image`}
                  className="w-full mb-4 md:mb-0"
                />
                <div className="pt-3">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-neon hover:text-pink text-sm text-center"
                    >
                      {link.title}
                      <FaExternalLinkAlt className="ml-1" />{" "}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h1 className="text-xl font-bold mb-2 text-pink">
                  {project.title}
                </h1>
                <p className="mb-4 overflow-auto text-sm h-[16.5rem] pr-1">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;
