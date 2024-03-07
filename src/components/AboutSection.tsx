import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section>
      <div className="about-section about-content-card text-light-blue p-5">
        <div className="text-xs md:text-sm overflow-auto h-[100%]">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-blue-neon"
          >
            Acerca de mí
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-5"
          >
            ¡Soy <span className="text-pink">Leandro</span>! Me formé como
            Técnico Electricista y Técnico en Armado y Reparación de PC y, tras
            años ejerciendo, me pasé al mundo de la Programación. Desde entonces
            disfruto creando experiencias web para los usuarios.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="pt-5"
          >
            Entre mis éxitos destaco que, durante mi tiempo en{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.timbring.com/"
              className="text-pink"
            >
              Timbring
            </a>
            , haber migrado exitosamente la autenticación a NextAuth y haber
            trabajado en la optimización del formulario de registro. Esto
            permitió que cientos de usuarios se registraran e iniciaran sesión
            de manera más rápida y eficiente.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="pt-5"
          >
            Cuento con experiencia en el desarrollo de aplicaciones web, y entre
            mis proyectos destacados se encuentra Gamepedia. Este proyecto me
            permitió combinar dos de mis pasiones: la programación y los
            videojuegos. En <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gamepedia-gaming.vercel.app/"
              className="text-pink"
            >Gamepedia</a>, ayudé a los usuarios a obtener
            información sobre cualquier videojuego y a ver capturas de pantalla
            de los mismos. ¡Te invito a echarle un vistazo!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
