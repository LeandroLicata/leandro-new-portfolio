import { FaLinkedin, FaGithub, FaWhatsapp, FaFilePdf } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section>
      <div className="greetings content-card px-10 py-10 flex">
        <div className="greetings-title text-light-blue text-2xl md:text-3xl flex-1">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hola!
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Mi nombre es
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-pink"
          >
            Leandro Licata
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            // className="text-blue-neon"
          >
            Desarrollador Web
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="pt-5 text-lg md:text-xl"
          >
            Transformo ideas en experiencias digitales.
          </motion.h1>
          <div className="pb-3 md:pb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-4xl md:text-5xl pt-8 flex space-x-4 text-blue-neon justify-center"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/leandro-licata/"
                className="hover:text-pink hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LeandroLicata"
                className="hover:text-pink hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.link/5lfkn0"
                className="hover:text-pink hover:scale-125"
              >
                <FaWhatsapp />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:leandrolicata1@gmail.com"
                className="hover:text-pink hover:scale-125"
              >
                <FiMail />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/Leandro Licata CV.pdf"
                className="hover:text-pink hover:scale-125"
              >
                <FaFilePdf />
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:block greetings-title flex-0 flex items-center justify-center relative"
        >
          <div className="static-overlay"></div>
          <img
            src="/profile.jpeg"
            width={320}
            className="border-4 border-gradient relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
