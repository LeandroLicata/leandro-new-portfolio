import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  setCurrentSection: Dispatch<SetStateAction<string>>;
}

const Navbar = ({ setCurrentSection }: NavbarProps) => {
  return (
    <nav className="w-full fixed flex justify-center">
      <ul className="text-light-blue flex justify-between items-center space-x-9 text-lg p-4 bg-black">
        <li
          className="hover:text-pink cursor-pointer"
          onClick={() => setCurrentSection("home")}
        >
          Inicio
        </li>
        <li
          className="hover:text-pink cursor-pointer"
          onClick={() => setCurrentSection("about")}
        >
          Acerca
        </li>
        <li
          className="hover:text-pink cursor-pointer"
          onClick={() => setCurrentSection("projects")}
        >
          Proyectos
        </li>
        <li
          className="hover:text-pink cursor-pointer"
          onClick={() => setCurrentSection("skills")}
        >
          Tecnologías
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
