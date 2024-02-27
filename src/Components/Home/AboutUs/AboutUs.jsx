import Img from "../../../assets/aboutHome.jpg";
import Vision from "../../../assets/Vision.png";
import Mission from "../../../assets/Mission.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="pt-12 md:pt-20">
        <div className="container">
          <div className="flex flex-col items-center textCenter md:text-left md:justify-between md:flex-row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <LazyLoadImage
                className="w-[80%] md:w-[90%]"
                src={Img}
                alt="About"
              />
            </motion.div>

            <div className="relative w-full lg:w-1/2">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <h1 className="relative p-0 mt-4 mb-2 md:mb-8 md:mt-0 lg:pl-20 md:headingStyleMd lg:headingStyleLg">
                    Welcome to immigration Advisory services
                  </h1>{" "}
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <div>
                    <p>
                      Quisque dignissim enim diam, eget pulvinar ex viverra id.
                      Nulla a lobortis lectus, id volutpat magna. Morbi
                      consequat porttitor fermentum. Nulla vestibulum tincidunt
                      viverra. Vestibulum accumsan molestie lorem, non laoreet
                      massa. Duis at dui sem. Vivamus ut gravida libero
                    </p>
                  </div>
                  <div className="flex flex-col justify-between mt-8 md:flex-row">
                    <div className="flex items-center md:w-[80%] shadow-md p-4 duration-500 hover:shadow-lg">
                      <img className="w-10 h-10 mr-4" src={Vision} alt="" />
                      <div>
                        <h6 className="mb-1">Our Vision</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center md:w-[80%] shadow-md p-4 duration-500 hover:shadow-lg">
                      <img className="w-10 h-10 mr-4" src={Mission} alt="" />
                      <div>
                        <h6 className="mb-1 font-bold">Our Mission</h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 120 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="textCenter"
              >
                <button className="mt-4 md:mt-8 buttonCust">
                  Discover More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
