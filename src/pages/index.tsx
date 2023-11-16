import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main
    // style={{ backgroundImage: 'url("/wp.jpg")' }}
    >
      <div className="flex h-screen items-center bg-black">
        {/* <div className="transform -rotate-90 w-1/3">
          <h1 className="text-white text-5xl">
            FULL <span className="text-red-600">STACK</span>
          </h1>
          <h1 className="text-white text-5xl transform rotate-180 mt-2">
            DEV<span className="text-red-600">ELOPER</span>
          </h1>
        </div> */}
        <img
          src="/profile.gif"
          width={320}
          // className="border-4 border-white shadow-lg"
        />
        <div className="flex flex-col pl-2">
          {/* <h1 className="text-pink text-4xl">Leandro Licata</h1>
          <h2 className="text-blue text-3xl">Full Stack Web Developer</h2> */}
          <p className="text-light-blue text-2xl">
            Hola, soy <span className="text-pink">Leandro</span>, un apasionado
            desarrollador full stack. Transformo ideas en experiencias
            digitales. Descubre más sobre mi viaje y habilidades explorando mi
            historia en el desarrollo web.
          </p>
        </div>
      </div>
    </main>
  );
}
