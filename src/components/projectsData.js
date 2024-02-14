const projectsData = [
  {
    title: "Timbring",
    description: (
      <div>
        <p>Sitio web en el trabajé durante 3 meses como pasante.</p>
        <p className="mt-2">
          <span className="text-pink">Timbring</span> es un Servicio de
          Optimización de Entregas en E-commerce: Mejorando la experiencia del
          comprador al resolver entregas fallidas.
        </p>
        <p className="mt-2">
          Desarrollé la página de inicio, incluyendo sus secciones, la barra de
          navegación y diseño responsivo utilizando{" "}
          <span className="text-pink">Next.js</span>,{" "}
          <span className="text-pink">TypeScript</span> y{" "}
          <span className="text-pink">Tailwind CSS</span>.
        </p>
        <p className="mt-2">
          Elaboré el formulario de registro, integrando todas sus validaciones y
          empleando <span className="text-pink">Redux Toolkit</span> para el
          manejo del estado global y las peticiones al backend.
        </p>
        <p className="mt-2">
          Brindé asistencia a mis compañeros, apoyándolos en temas relacionados
          con <span className="text-pink">Next</span> y{" "}
          <span className="text-pink">Redux Toolkit</span>.
        </p>
        <p className="mt-2">
          Migré la autenticación de <span className="text-pink">Auth0</span> a{" "}
          <span className="text-pink">NextAuth</span>. Esta migración permitió
          una autenticación más rápida y confiable para los usuarios, lo que
          contribuyó a una experiencia general más fluida en la plataforma.
        </p>
        <p className="mt-2">
          Desarrollé un sistema integral de recuperación de contraseñas
          utilizando la librería <span className="text-pink">Nodemailer</span>.
          Este sistema permite a los usuarios restablecer sus contraseñas de
          manera segura y eficiente en caso de olvido o pérdida de acceso a sus
          cuentas.
        </p>
      </div>
    ),
    image: "/Timbring.jpg",
    links: [{ title: "Link", url: "https://www.timbring.com/" }],
  },
  {
    title: "Cocktail App",
    description: (
      <div>
        <p>
          Proyecto personal de Front-End en desarrollo en el cual consumo datos
          de una <span className="text-pink">API(TheCocktailDB)</span>. De
          momento podemos buscar tragos por nombre. Planeo implementar mas
          funcionalidades como un filtro para poder buscar por ingredientes y
          categorías.
        </p>
        <p className="pt-2">
          Para realización de este proyecto utilicé{" "}
          <span className="text-pink">React</span> con{" "}
          <span className="text-pink">Styled Components</span>y{" "}
          <span className="text-pink">Redux Toolkit</span>.
        </p>
      </div>
    ),
    image: "/Cocktail_App.jpg",
    links: [
      {
        title: "Repositorio",
        url: "https://github.com/LeandroLicata/cocktail-app",
      },
      {
        title: "Deploy",
        url: "https://cocktail-app-blond.vercel.app/",
      },
    ],
  },
  {
    title: "Gamepedia",
    description: (
      <div>
        <p>
          Proyecto personal que desarrollé utilizando la{" "}
          <span className="text-pink">API de RAWG</span>, en que los usarios
          pueden explorar una amplia variedad de videojuegos, viendo información
          detallada e imágenes de estos. Pudiendo realizar busquedas con
          diversos filtros y agregar sus propios juegos a la base de datos.
        </p>
        <p className="pt-2">
          Durante la ejecución de este proyecto, implementé diversas tecnologías
          en el desarrollo del <span className="text-pink">Back-End</span>, como{" "}
          <span className="text-pink">Node.js</span>,{" "}
          <span className="text-pink">MongoDB</span>,
          <span className="text-pink">Mongoose</span> y{" "}
          <span className="text-pink">Express</span>.
        </p>
        <p className="pt-2">
          En el <span className="text-pink">Front-End</span>, me apoyé de
          tecnologías como <span className="text-pink">React</span>,{" "}
          <span className="text-pink">Redux Toolkit</span>,{" "}
          <span className="text-pink">HTML</span> y{" "}
          <span className="text-pink">Bootstrap</span> para garantizar una
          experiencia de usuario atractiva y funcional.
        </p>
      </div>
    ),
    image: "/Gamepedia.jpg",
    links: [
      {
        title: "Repositorio Front-End",
        url: "https://github.com/LeandroLicata/PI-Videogames-Frontend",
      },
      {
        title: "Repositorio Back-End",
        url: "https://github.com/LeandroLicata/PI-Videogames-Backend",
      },
      {
        title: "Deploy",
        url: "https://gamepedia-gaming.vercel.app/",
      },
    ],
  },
  {
    title: "Novelty Books",
    description: (
      <div>
        <p>
          Como parte de mi formación en programación, participé en un proyecto
          final grupal llamado <span className="text-pink">Novelty Books</span>{" "}
          junto a mis compañeros de <span className="text-pink">Henry</span>.
        </p>
        <p className="pt-2">
          En este proyecto utilizamos tecnologías como{" "}
          <span className="text-pink">JavaScript</span>,{" "}
          <span className="text-pink">MongoDB</span>,
          <span className="text-pink">Mongoose</span>,{" "}
          <span className="text-pink">Node</span>,{" "}
          <span className="text-pink">Express</span>,{" "}
          <span className="text-pink">Cloudinary</span>,{" "}
          <span className="text-pink">NodeMailer</span>,{" "}
          <span className="text-pink">React</span>,{" "}
          <span className="text-pink">Next</span>,{" "}
          <span className="text-pink">Next Auth</span>,{" "}
          <span className="text-pink">Stripe</span>,{" "}
          <span className="text-pink">Bootstrap</span>,{" "}
          <span className="text-pink">CSS</span> y{" "}
          <span className="text-pink">HTML5</span> para desarrollar un
          e-commerce de libros físicos.
        </p>
      </div>
    ),
    image: "/Novelty_Books.jpg",
    links: [
      {
        title: "Repositorio Front-End",
        url: "https://github.com/Chitichi/PFFront",
      },
      {
        title: "Repositorio Back-End",
        url: "https://github.com/Arthaz1245/ProyectoFinalGrupo14Backend",
      },
      {
        title: "Video Presentación",
        url: "https://www.youtube.com/watch?v=6JF0WrhJlw0",
      },
    ],
  },
];

export default projectsData;
