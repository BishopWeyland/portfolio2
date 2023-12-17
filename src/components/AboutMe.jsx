import AboutImg from "../assets/366753641_2541354836065991_8786974332816739446_n.jpg";

function AboutMe() {
  return (
    <>
      <div
        id="about-me"
        className="flex-col px-4 pt-10  h-full w-full flex lg:flex-row   lg:h-screen lg:px-36 lg:pt-20 "
      >
        <div className="flex flex-col">
          <h2 className="text-3xl font-lexend font-bold mb-7 lg:text-4xl">
            About me
          </h2>
          <div className="flex flex-col">
            <p className="font-lexend text-black mb-4 ">
              My name is Håkon W. Engebretsen. I finished the 2 year front-end
              development course at Noroff in December 2023. I have been working
              in kindergarten for a decade now. I was ready for change and
              started doing a front-end course on Udemy and really enjoyed it. A
              couple of months later I began my studies at Noroff.
            </p>
            <p className="font-lexend text-black mb-10 ">
              With my experience in kindergarten I’ve learned teamwork and
              customer service. I am 30 years, married and we just bought our
              first apartment. In my spare time I enjoy painting, listening to
              records and cooking.
            </p>

            <h3 className="text-2xl font-lexend font-bold mb-7 lg:text-3xl">
              My experience
            </h3>
            <div className="flex">
              <ul className="font-lexend mr-7">
                <li>UX Design</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Wordpress</li>
              </ul>

              <ul className="font-lexend">
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
        <img
          className="flex h-96 self-center lg:h-3/4 object-contain my-5 lg:self-start rounded-md lg:ml-10 lg:my-0"
          src={AboutImg}
          alt=""
        />
      </div>
    </>
  );
}

export default AboutMe;
