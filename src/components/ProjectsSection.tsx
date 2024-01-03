import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Timbring",
    description: "Descripción del proyecto Timbring...",
    image: "/Timbring.jpg",
    links: [{ title: "Link", url: "https://www.timbring.com/" }],
  },
  {
    title: "Gamepedia",
    description:
      "Gamepedia es un sitio web donde los usuarios pueden acceder a información y ver capturas de pantalla de juegos, tanto clásicos como los últimos lanzamientos. Pueden buscar juegos por nombre, plataforma o género. Además, los usuarios tienen la opción de agregar juegos si así lo desean, y también pueden eliminarlos. Este proyecto es completamente responsive, lo que significa que se puede acceder sin problemas desde cualquier dispositivo. En la realización del proyecto, utilicé tecnologías como Node.js, MongoDB, Mongoose y Express para el Back-End, y React, Redux Toolkit, HTML y Bootstrap para el Front-End.",
    image: "/Gamepedia.jpg",
    links: [
      {
        title: "Repositorio Front-End",
        url: "https://github.com/LeandroLicata/PI-Videogames-Frontend",
      },
      {
        title: "Repositorio Back-End",
        url: "https://github.com/LeandroLicata/PI-Videogames-Backend",
      },
      {
        title: "Deploy",
        url: "https://gamepedia-gaming.vercel.app/",
      },
    ],
  },
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
            <div className="w-full md:flex">
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={`${project.title} Project Image`}
                  className="w-full mb-4 md:mb-0"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h1 className="text-xl font-bold mb-2 text-pink">
                  {project.title}
                </h1>
                <p className="mb-4 overflow-auto text-sm h-20">
                  {project.description}
                </p>
                <div className="">
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
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;
