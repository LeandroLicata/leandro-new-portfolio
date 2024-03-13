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
            ¡Hola! Soy <span className="text-pink">Leandro</span>. Inicialmente,
            me formé como Técnico Electricista y Técnico en Armado y Reparación
            de PC, pero con el tiempo, me sumergí en el mundo de la
            Programación, donde encontré mi verdadera pasión. Desde entonces, me
            encanta crear experiencias web para los usuarios.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="pt-5"
          >
            Uno de mis logros más destacados fue durante mi tiempo en{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.timbring.com/"
              className="text-pink"
            >
              Timbring
            </a>
            , donde lideré con éxito la migración de la autenticación a NextAuth
            y trabajé en la optimización del formulario de registro. Este cambio
            permitió que cientos de usuarios se registraran e iniciaran sesión
            de manera más rápida y eficiente.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="pt-5"
          >
            Tengo experiencia en el desarrollo de aplicaciones web, y uno de mis
            proyectos más notables es{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gamepedia-gaming.vercel.app/"
              className="text-pink"
            >
              Gamepedia
            </a>
            . Este proyecto me permitió combinar dos de mis mayores pasiones: la
            programación y los videojuegos. En Gamepedia, ayudé a los usuarios a
            acceder a información detallada sobre cualquier videojuego y
            disfrutar de capturas de pantalla. ¡Te invito a explorarlo!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
