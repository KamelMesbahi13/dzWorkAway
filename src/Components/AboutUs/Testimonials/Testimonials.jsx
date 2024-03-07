import Data from "../../../data.json";
import Swiper from "./Swiper/Swiper";
import { motion } from "framer-motion";

const HeadingsAndParagraphs = Data.AboutUs_Testimonial_Heading_Paragraph.map(
  ({ id, header, description }) => {
    return (
      <div key={id}>
        <div>
          <div>
            <div>
              <h1 className="relative mb-2 lg:headingStyleLg">{header}</h1>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const Testimonials = () => {
  return (
    <div className="mt-12 md:mt-28">
      <div>
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
            className="w-full md:w-3/4"
          >
            {HeadingsAndParagraphs}
          </motion.div>
        </div>
      </div>
      <Swiper />
    </div>
  );
};

export default Testimonials;
