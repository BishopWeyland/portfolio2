import HeroImg from "../assets/387513659_1303143767747528_7200099715514790149_n.jpg";

function Hero() {
  return (
    <>
      <div id="hero" className="h-screen">
        <div
          className="h-3/5 md:h-3/4 flex bg-cover bg-center text-left flex-col justify-end"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <h1 className="pl-4 mb-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-lexend font-bold text-white">
            Håkon
          </h1>
          <h2 className="pl-4 mb-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-lexend font-bold  text-white ">
            Willand
          </h2>
        </div>
        <h2 className="pl-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-lexend font-bold text-black">
          Engebretsen
        </h2>
        <div className="pl-4 mt-4">
          {" "}
          <span className="text-1xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-lexend">
            Front-end developer with experience with UX/UI{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
