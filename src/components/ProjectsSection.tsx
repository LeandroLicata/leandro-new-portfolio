import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "./projectsData";

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="work-content-card">
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
                      {/* Ajusta el espacio entre el título y el icono según sea necesario */}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h1 className="text-xl font-bold mb-2 text-pink">
                  {project.title}
                </h1>
                <p className="mb-4 overflow-auto text-sm h-[16rem] pr-1">
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
