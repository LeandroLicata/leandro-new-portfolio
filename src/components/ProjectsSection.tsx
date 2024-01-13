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
      "Gamepedia es un sitio web integral que proporciona información detallada y visualmente enriquecedora sobre una amplia variedad de videojuegos. Durante la ejecución de este proyecto, implementé tecnologías avanzadas en el desarrollo del Back-End, como Node.js, MongoDB, Mongoose y Express. Además, para enriquecer aún más la base de datos con datos actualizados sobre los videojuegos, integré la API RAWG. Vale destacar que los usuarios también tienen la opción de agregar sus propios videojuegos, brindando así una experiencia más personalizada y participativa. En el Front-End, me apoyé en tecnologías modernas como React, Redux Toolkit, HTML y Bootstrap para garantizar una experiencia de usuario atractiva y funcional.",
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
                <p className="mb-4 overflow-auto text-sm h-[16rem]">
                  {project.description.split(" ").map((word, wordIndex) =>
                    // Aplicar color solo a ciertas palabras
                    word === "Gamepedia" ||
                    word === "React" ||
                    word === "Node.js," ? (
                      <span key={wordIndex} className="text-pink">
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={wordIndex}>{word} </span>
                    )
                  )}
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
