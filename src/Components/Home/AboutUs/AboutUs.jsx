import Data from "../../../data.json";
import Vision from "../../../assets/Vision.png";
import Mission from "../../../assets/Mission.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Img from "../../../assets/aboutHome.webp";

const Heading = Data.AboutUs_Heading.map(({ id, heading }) => {
  return (
    <div key={id}>
      <h1 className="relative p-0 mt-4 mb-2 md:mb-8 md:mt-0 lg:pl-20 md:headingStyleMd lg:headingStyleLg">
        {heading}
      </h1>{" "}
    </div>
  );
});

const ParagraphOne = Data.AboutUs_Paragraph_One.map(({ id, paragraph }) => {
  return (
    <div key={id}>
      <div>
        <p>{paragraph}</p>{" "}
      </div>
    </div>
  );
});

const ParagraphTwoVision = Data.AboutUs_Paragraph_Two_Vision.map(
  ({ id, header, paragraph }) => {
    return (
      <div key={id}>
        <div>
          <p className="mb-1 text-lg font-bold md:text-xl">{header}</p>
          <p>{paragraph}</p>
        </div>
      </div>
    );
  }
);

const ParagraphTwoMission = Data.AboutUs_Paragraph_Two_Mission.map(
  ({ id, header, paragraph }) => {
    return (
      <div key={id}>
        <div>
          <p className="mb-1 text-lg font-bold md:text-xl">{header}</p>
          <p>{paragraph}</p>
        </div>
      </div>
    );
  }
);

const AboutUs = () => {
  return (
    <>
      <div className="pt-12 pb-8 md:pt-20 md:pb-0 aboutHomeBack">
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
                  {Heading}
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
                  <div>{ParagraphOne}</div>

                  <div className="text-left">
                    <div className="flex flex-col justify-between mt-8 md:flex-row">
                      <div className="flex items-center md:w-[80%] shadow-md p-4 duration-500 hover:shadow-lg">
                        <LazyLoadImage
                          className="w-10 h-10 mr-4"
                          src={Vision}
                          alt="Vision"
                        />
                        <div>{ParagraphTwoVision}</div>
                      </div>
                      <div className="flex items-center md:w-[80%] shadow-md p-4 duration-500 hover:shadow-lg">
                        <LazyLoadImage
                          className="w-10 h-10 mr-4"
                          src={Mission}
                          alt="Mission"
                        />
                        <div>{ParagraphTwoMission}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
