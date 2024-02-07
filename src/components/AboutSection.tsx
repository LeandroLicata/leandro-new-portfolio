import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section>
      <div className="about-section about-content-card text-light-blue p-5 overflow-auto">
        <div className="text-sm">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-lg text-blue-neon">Acerca de mí</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="pt-5">
            ¡Hola! Soy <span className="text-pink">Leandro Licata</span>, un
            apasionado desarrollador web con una trayectoria única. Inicialmente
            formado como técnico electricista con orientación en electrónica y
            técnico en armado y reparación de PC, decidí dar un giro en mi vida
            en 2022 para seguir mi verdadera pasión: la programación.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="pt-5">
            Me gradué como{" "}
            <span className="text-pink">Full Stack Web Developer</span> en el
            bootcamp SoyHenry, donde adquirí sólidos conocimientos en
            JavaScript, HTML, CSS, Node, React, Redux y SQL, entre otras
            tecnologías. Mi viaje no se detuvo allí; continué mi formación,
            explorando herramientas como Bootstrap, Next, MongoDB y Cloudinary
            para ampliar mi conjunto de habilidades.
          </motion.p>
          {/* <p className="pt-5">
            Mi experiencia se ha enriquecido aún más trabajando en proyectos del
            mundo real en <span className="text-pink">Timbring</span>, donde
            perfeccioné mis habilidades y adquirí nuevas competencias en
            TypeScript, TailwindCSS y Nodemailer. Trabajar en equipo con
            metodologías ágiles Scrum fue una experiencia valiosa que reforzó mi
            enfoque colaborativo y orientado a resultados.
          </p> */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} className="pt-5">
            Actualmente, estoy en la búsqueda de nuevas oportunidades laborales
            en el mundo de la programación. Estoy convencido de que mi
            experiencia diversa y mis habilidades técnicas pueden hacer
            contribuciones significativas a cualquier proyecto en el que
            participe.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
