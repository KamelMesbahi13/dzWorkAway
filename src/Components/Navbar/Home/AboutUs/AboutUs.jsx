import Img from "../../../../assets/aboutHome.jpg";
import Vision from "../../../../assets/Vision.png";
import Mission from "../../../../assets/Mission.png";

const AboutUs = () => {
  return (
    <>
      <div className="h-[100vh] pt-12 md:pt-20">
        <div className="container">
          <div className="flex flex-col items-center textCenter md:text-left md:justify-between md:flex-row">
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
              <div className="flex flex-col justify-between mt-8 md:flex-row">
                <div className="flex items-center md:w-[80%] shadow-md p-4 duration-500 hover:shadow-lg">
                  <img className="w-10 h-10 mr-4" src={Vision} alt="" />
                  <div>
                    <h6 className="mb-1 font-bold">Our Vision</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex items-center md:w-[80%] shadow-md p-4 duration-500 hover:shadow-lg">
                  <img className="w-10 h-10 mr-4" src={Mission} alt="" />
                  <div>
                    <h6 className="mb-1 font-bold">Our Mission</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="textCenter">
                <button className="mt-4 md:mt-8 buttonCust">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
