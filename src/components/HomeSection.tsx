const HomeSection = () => {
  return (
    <section className="">
      <div className="greetings content-card px-10 py-10 flex">
        <div className="greetings-title text-light-blue text-3xl flex-1">
          <h1 className="">Hola!</h1>
          <h1 className="">
            Mi Nombre es <span className="text-pink">Leandro</span>
          </h1>
          <h1 className="">Soy Desarrollador Web</h1>
          {/* <h1 className="">Transformo ideas en experiencias digitales.</h1> */}
        </div>
        <div className="greetings-title flex-0 flex items-center justify-center">
          <img src="/profile.jpeg" width={320} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
