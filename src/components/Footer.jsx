import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        id="contact"
        className="bg-brand-blue justify-between flex flex-row px-4 pt-10 h-96 lg:px-36"
      >
        <div>
          {" "}
          <h2 className="text-white mb-6 text-3xl font-lexend font-bold lg:text-4xl">
            Contact
          </h2>
          <a
            className=" bg-brand-beige p-4 rounded-md text-1xl font-lexend font-bold hover:bg-white lg:text-2xl"
            href="mailto:willand27@hotmail.com"
          >
            Get in touch
          </a>
        </div>
        <div className="flex flex-row self-end mb-24 md:mb-10">
          <a className="text-white" href="https://github.com/BishopWeyland">
            <FaGithub size={40} />
          </a>
          <a
            className="text-white ml-7"
            href="linkedin.com/in/håkon-willand-engebretsen-03148a229"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
