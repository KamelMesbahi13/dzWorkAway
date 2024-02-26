import Img from "../../../../assets/aboutHome.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="backAboutHome h-[100vh] pt-20">
        <div className="container">
          <div className="flex flex-col textCenter md:text-left md:justify-between md:flex-row">
            <div>
              <img className="w-[80%] md:w-[90%]" src={Img} alt="About" />
            </div>

            <div className="relative w-full lg:w-1/2">
              <div>
                <h1 className="relative p-0 mt-4 mb-2 md:mb-8 md:mt-0 lg:pl-20 md:headingStyleMd lg:headingStyleLg">
                  Welcome to immigration Advisory services
                </h1>{" "}
              </div>
              <div>
                <p>
                  Quisque dignissim enim diam, eget pulvinar ex viverra id.
                  Nulla a lobortis lectus, id volutpat magna. Morbi consequat
                  porttitor fermentum. Nulla vestibulum tincidunt viverra.
                  Vestibulum accumsan molestie lorem, non laoreet massa. Duis at
                  dui sem. Vivamus ut gravida libero s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
