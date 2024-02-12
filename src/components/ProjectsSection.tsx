import React, { MouseEventHandler, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import projectsData from "./projectsData";
import { motion, AnimatePresence } from "framer-motion";

interface ArrowProps {
  onClick: MouseEventHandler;
}

const arrowStyles: React.CSSProperties = {
  position: "absolute",
  top: "40%",
  transform: "translateY(-50%)",
  zIndex: 1,
  cursor: "pointer",
  fontSize: "90px",
  color: "white",
};

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, rotate: 360 }}
    transition={{ duration: 0.5, delay: 1.5 }}
    style={{ ...arrowStyles, right: "-100px" }}
    onClick={onClick}
    className="hidden md:block"
  >
    <SlArrowRight />
  </motion.div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, rotate: -360 }}
    transition={{ duration: 0.5, delay: 1.5 }}
    style={{ ...arrowStyles, left: "-100px" }}
    onClick={onClick}
    className="hidden md:block"
  >
    <SlArrowLeft />
  </motion.div>
);

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => setCurrentSlide(currentSlide + 1)} />,
    prevArrow: <PrevArrow onClick={() => setCurrentSlide(currentSlide - 1)} />,
  };

  return (
    <section className="work-content-card relative">
      <Slider
        {...settings}
        beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
      >
        {projectsData.map((project, index) => (
          <div key={index} className="p-4 md:p-8 text-light-blue">
            <AnimatePresence mode="wait">
              {index === currentSlide && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:order-firs order-last">
                      <motion.img
                        key={index}
                        initial={{ opacity: 0, scale: 1.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        src={project.image}
                        alt={`${project.title} Project Image`}
                        className="w-full mb-4 md:mb-0"
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="pt-3"
                      >
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-neon hover:text-pink text-xs md:text-sm text-center"
                          >
                            {link.title}
                            <FaExternalLinkAlt className="ml-1" />{" "}
                          </a>
                        ))}
                      </motion.div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 md:order-last order-first">
                      <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-lg md:text-xl font-bold mb-2 text-pink"
                      >
                        {project.title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mb-4 overflow-auto text-xs md:text-sm h-[10rem] md:h-[16.5rem] pr-1"
                      >
                        {project.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;
