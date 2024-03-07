import Data from "../../../data.json";
import { motion } from "framer-motion";

const HeadingsAndParagraphs =
  Data.OurServices_Introduction__Heading_Paragraph.map(
    ({ id, header, description }) => {
      return (
        <div key={id}>
          <div>
            {" "}
            <div>
              <h1 className="relative headingStyleLg">{header}</h1>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    }
  );

const Introduction = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mt-12 md:mt-20"
      >
        <div>
          <div className="w-full md:w-3/4">{HeadingsAndParagraphs}</div>
        </div>
      </motion.div>
    </>
  );
};

export default Introduction;
