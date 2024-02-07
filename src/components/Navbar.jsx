import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";


const Navbar = ({ setCurrentSection }) => {
  return (
    <nav className="w-full fixed flex justify-center">
      <ul className="text-light-blue flex justify-between items-center space-x-9 text-lg p-4 bg-black">
        <motion.li
          className="hover:text-pink cursor-pointer"
          onClick={() => setCurrentSection("home")}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Inicio
        </motion.li>
        <motion.li
          className="hover:text-pink cursor-pointer"
          onClick={() => setCurrentSection("about")}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Acerca
        </motion.li>
        <motion.li
          className="hover:text-pink cursor-pointer"
          onClick={() => setCurrentSection("projects")}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Proyectos
        </motion.li>
        <motion.li
          className="hover:text-pink cursor-pointer"
          onClick={() => setCurrentSection("skills")}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Tecnologías
        </motion.li>
      </ul>
    </nav>
  );
};
export default Navbar;
