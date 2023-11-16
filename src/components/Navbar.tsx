import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  setCurrentSection: Dispatch<SetStateAction<string>>;
}

const Navbar = ({ setCurrentSection }: NavbarProps) => {
  return (
    <nav className="w-full fixed flex justify-center">
      <ul className="text-light-blue flex justify-between items-center space-x-11 text-xl p-4">
        <li
          className="hover:text-pink"
          onClick={() => setCurrentSection("home")}
        >
          Home
        </li>
        <li
          className="hover:text-pink"
          onClick={() => setCurrentSection("about")}
        >
          About
        </li>
        <li
          className="hover:text-pink"
          onClick={() => setCurrentSection("projects")}
        >
          Proyectos
        </li>
        <li
          className="hover:text-pink"
          onClick={() => setCurrentSection("skills")}
        >
          Skills
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
