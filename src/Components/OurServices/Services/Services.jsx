import ImgOne from "../../../assets/Experience.png";
import ImgTwo from "../../../assets/Priority.png";
import ImgThree from "../../../assets/Advice.png";
import ImgFour from "../../../assets/Support.png";
import Shape from "../../../assets/OurServicesShape.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    Img: ImgOne,
    Heading: "Document Preparation",
    Description:
      "With extensive experience guiding countless clients, we offer seasoned expertise to navigate your journey seamlessly. Trust in our track record and let us streamline your path to success.",
  },

  {
    id: 2,
    Img: ImgTwo,
    Heading: "Career Counseling",
    Description:
      "Your needs come first. We prioritize understanding your goals, challenges, and aspirations to deliver tailored solutions and exceptional service, ensuring your satisfaction and success.",
  },

  {
    id: 3,
    Img: ImgThree,
    Heading: "Visa Guidance",
    Description:
      "Trust our guidance. We offer tailored advice to help you navigate life's complexities with confidence and clarity.",
  },

  {
    id: 4,
    Img: ImgFour,
    Heading: "Application Assistance",
    Description:
      "Our support is unwavering. We're here to guide you through challenges and celebrate your successes, offering personalized assistance every step of the way.",
  },
];

const WhyUs = () => {
  return (
    <>
      <div>
        <div className="container flex flex-col mt-20 lg:flex-row">
          <div className="w-full lg:mr-8 lg:w-3/4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div>
                <h1 className="relative mb-2 lg:mb-0 md:headingStyleMd lg:headingStyleLg">
                  Our Services
                </h1>
              </div>
              <div>
                <p className="md:mt-4 lg:mt-0">
                  At DZ Work Away, we understand that the decision to immigrate
                  is one of the most significant steps you will ever take. That
                  is why we are committed to making your journey as smooth and
                  successful as possible. Here is why you should choose us:
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="grid w-full grid-cols-1 mt-8 lg:mt-32 gap-y-6 lg:gap-20 lg:grid-cols-2"
          >
            {data.map(({ id, Img, Heading, Description }) => {
              return (
                <div key={id}>
                  <div>
                    <div className="p-4 duration-300 shadow-xl lg:h-[28rem] md:cardServices xl:h-[22rem] hover:text-white lg:p-8">
                      <div className="relative w-16 h-16 bg-white rounded-full">
                        <LazyLoadImage
                          className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                          src={Img}
                          alt={Heading}
                        />
                      </div>
                      <div>
                        <div className="mt-2">
                          <h6>{Heading}</h6>
                        </div>
                        <div>
                          <p>{Description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="relative">
          <LazyLoadImage
            className="absolute h-[25rem] w-full bottom-96 md:bottom-52 -z-10"
            src={Shape}
            alt="Shape"
          />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
