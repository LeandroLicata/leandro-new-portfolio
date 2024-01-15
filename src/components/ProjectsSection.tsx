import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Timbring",
    description: (
      <>
        <p>Sitio web en el trabajé durante 3 meses como pasante.</p>
        <p className="mt-2">
          <span className="text-pink">Timbring</span> es un Servicio de
          Optimización de Entregas en E-commerce: Mejorando la experiencia del
          comprador al resolver entregas fallidas.
        </p>
        <p className="mt-2">
          Desarrollé la página de inicio, incluyendo sus secciones, la barra de
          navegación y diseño responsivo utilizando{" "}
          <span className="text-pink">Next.js</span>,{" "}
          <span className="text-pink">TypeScript</span> y {" "}
          <span className="text-pink">Tailwind CSS</span>.
        </p>
        <p className="mt-2">
          Elaboré el formulario de registro, integrando todas sus validaciones y
          empleando <span className="text-pink">Redux Toolkit</span> para el
          manejo del estado global y las peticiones al backend.
        </p>
        <p className="mt-2">
          Brindé asistencia a mis compañeros, apoyándoles principalmente en
          temas relacionados con <span className="text-pink">Next</span> y{" "}
          <span className="text-pink">Redux Toolkit</span>.
        </p>
        <p className="mt-2">
          Migré la autenticación de <span className="text-pink">Auth0</span> a{" "}
          <span className="text-pink">NextAuth</span>. Esta migración permitió
          una autenticación más rápida y confiable para los usuarios, lo que
          contribuyó a una experiencia general más fluida en la plataforma.
        </p>
        <p className="mt-2">
          Desarrollé un sistema integral de recuperación de contraseñas
          utilizando la librería <span className="text-pink">Nodemailer</span>.
          Este sistema permite a los usuarios restablecer sus contraseñas de
          manera segura y eficiente en caso de olvido o pérdida de acceso a sus
          cuentas.
        </p>
      </>
    ),
    image: "/Timbring.jpg",
    links: [{ title: "Link", url: "https://www.timbring.com/" }],
  },
  {
    title: "Gamepedia",
    description: (
      <>
        <p>
          Proyecto personal que desarrollé utilizando la{" "}
          <span className="text-pink">API de RAWG</span>, en que los usarios
          pueden explorar una amplia variedad de videojuegos, viendo información
          detallada e imágenes de estos. Pudiendo realizar busquedas con
          diversos filtros y agregar sus propios juegos a la base de datos.
        </p>
        <p className="pt-2">
          Durante la ejecución de este proyecto, implementé diversas tecnologías
          en el desarrollo del <span className="text-pink">Back-End</span>, como{" "}
          <span className="text-pink">Node.js</span>,{" "}
          <span className="text-pink">MongoDB</span>,
          <span className="text-pink">Mongoose</span> y{" "}
          <span className="text-pink">Express</span>.
        </p>
        <p className="pt-2">
          En el <span className="text-pink">Front-End</span>, me apoyé de
          tecnologías como <span className="text-pink">React</span>,{" "}
          <span className="text-pink">Redux Toolkit</span>,{" "}
          <span className="text-pink">HTML</span> y{" "}
          <span className="text-pink">Bootstrap</span> para garantizar una
          experiencia de usuario atractiva y funcional.
        </p>
      </>
    ),
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
