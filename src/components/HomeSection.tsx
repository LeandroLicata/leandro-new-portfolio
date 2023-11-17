import { FaLinkedin, FaGithub, FaWhatsapp, FaFilePdf } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const HomeSection = () => {
  return (
    <section className="">
      <div className="greetings content-card px-10 py-10 flex">
        <div className="greetings-title text-light-blue text-3xl flex-1">
          <h1 className="">Hola!</h1>
          <h1 className="">
            Mi Nombre es 
          </h1><span className="text-pink">Leandro Licata</span>
          <h1 className="">Desarrollador Web</h1>
          <h1 className="pt-5 text-xl">Transformo ideas en experiencias digitales.</h1>
          <div className="text-5xl pt-8 flex space-x-4 text-blue-neon justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/leandro-licata/"
            >
              <FaLinkedin className="hover:text-pink" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LeandroLicata"
            >
              <FaGithub className="hover:text-pink" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.link/5lfkn0"
            >
              <FaWhatsapp className="hover:text-pink" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:leandrolicata1@gmail.com"
            >
              <FiMail className="hover:text-pink" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Leandro Licata CV.pdf"
              className="hover:text-pink"
            >
              <FaFilePdf />
            </a>
          </div>
        </div>
        <div className="greetings-title flex-0 flex items-center justify-center">
          <img src="/profile.jpeg" width={320} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
