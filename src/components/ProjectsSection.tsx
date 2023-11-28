import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  {
    title: "Timbring",
    description: "Descripción del proyecto Timbring...",
    image: "/Timbring.jpg",
    links: {
      demo: "URL del demo",
      source: "URL del código fuente",
    },
  },
  {
    title: "Gamepedia",
    description: "Descripción del proyecto Gamepedia...",
    image: "/Gamepedia.jpg",
    links: {
      demo: "URL del demo",
      source: "URL del código fuente",
    },
  },
  // Agrega información similar para tus otros proyectos
];

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
            <img
              src={project.image}
              alt={`${project.title} Project Image`}
              className="w-full mb-4"
            />
            <h1 className="text-xl font-bold mb-2">{project.title}</h1>
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Demo
              </a>
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Código Fuente
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;
