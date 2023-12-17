import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import CarouselSM from "../components/CarouselSM";
import AboutMe from "../components/AboutMe";

function Home() {
  return (
    <>
      <Hero />
      <div className="hidden md:block">
        {" "}
        <Carousel />
      </div>
      <div className="md:hidden">
        <CarouselSM />
      </div>
      <AboutMe />
    </>
  );
}

export default Home;
