import { motion } from "framer-motion";

const Navbar = ({ setCurrentSection }) => {
  const navItems = [
    <motion.li
      key="home"
      className="hover:text-pink cursor-pointer"
      onClick={() => setCurrentSection("home")}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Inicio
    </motion.li>,
    <motion.li
      key="about"
      className="hover:text-pink cursor-pointer"
      onClick={() => setCurrentSection("about")}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Acerca
    </motion.li>,
    <motion.li
      key="projects"
      className="hover:text-pink cursor-pointer"
      onClick={() => setCurrentSection("projects")}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Proyectos
    </motion.li>,
    <motion.li
      key="skills"
      className="hover:text-pink cursor-pointer"
      onClick={() => setCurrentSection("skills")}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      Tecnologías
    </motion.li>,
  ];

  return (
    <nav className="w-full fixed flex justify-center">
      <div className="hidden md:block">
        <ul className="text-light-blue flex justify-between items-center space-x-9 text-lg p-4 bg-black">
          {navItems.map((item) => item)}
        </ul>
      </div>
      <div className="md:hidden">
        <ul className=" grid grid-cols-2 gap-3 text-light-blue text-md p-3 bg-black justify-between items-center">
          {navItems.map((item) => item)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
