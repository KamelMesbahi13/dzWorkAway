import Data from "../../../data.json";
import Img from "../../../assets/AboutUsImg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const HeadingsAndParagraphs = Data.AboutUs_Introduction_Heading_Paragraph.map(
  ({ id, header, description }) => {
    return (
      <div key={id}>
        <div>
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
            <h1 className="relative md:headingStyleMd lg:headingStyleLg">
              {header}
            </h1>
            <p className="mt-4">{description}</p>
          </motion.div>
        </div>
      </div>
    );
  }
);

const ParagraphTwo = Data.AboutUs_Introduction_Paragraph_Two.map(
  ({ id, description }) => {
    return (
      <div key={id}>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>{description}</p>
          </motion.div>
        </div>
      </div>
    );
  }
);

const Introduction = () => {
  return (
    <>
      <div className="py-8 md:pt-8 bg-grey">
        <div className="container">
          <div className="flex-col justify-between md:flex-row md:flex">
            <div className="w-full md:w-[45%]">{HeadingsAndParagraphs}</div>
            <div className="block w-1/2 h-1 mx-auto my-8 bg-secondColor md:hidden"></div>
            <div className="w-full md:w-[45%]">{ParagraphTwo}</div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 md:mt-8"
          >
            <div>
              <LazyLoadImage
                className="rounded-xl"
                src={Img}
                alt="About Us Image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
