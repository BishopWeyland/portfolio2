import React from "react";
import Logo from "../assets/hwe.png";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 mx-4 mb-4 z-20 shadow-md ">
        <div className="flex justify-center">
          <div className="flex fixed top-2 left-2 shadow-md items-center mb-2 rounded-full bg-brand-white w-fit p-2">
            <img
              className="h-12 cursor-pointer"
              src={Logo}
              alt="Logo"
              onClick={() => scrollToSection("hero")}
            />
          </div>
        </div>

        <ul className="flex justify-between bg-brand-white p-3 rounded-md font-lexend font-bold">
          <li
            onClick={() => scrollToSection("projects-sm")}
            className="cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("about-me")}
            className="cursor-pointer"
          >
            About Me
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </nav>

      <nav className="hidden md:flex justify-between bg-brand-white items-center fixed top-0 left-0 right-0 px-40 z-20 shadow-md">
        <div>
          <img
            className="h-20 cursor-pointer"
            src={Logo}
            alt="Logo"
            onClick={() => scrollToSection("hero")}
          />
        </div>
        <div>
          <ul className="flex text-1xl font-lexend">
            <li
              onClick={() => scrollToSection("projects")}
              className="mr-6 cursor-pointer border-b-2 border-transparent hover:border-black"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("about-me")}
              className="mr-6 cursor-pointer border-b-2 border-transparent hover:border-black"
            >
              About Me
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer border-b-2 border-transparent hover:border-black"
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
