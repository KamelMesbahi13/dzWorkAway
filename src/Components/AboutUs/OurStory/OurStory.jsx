import Data from "../../../data.json";
import Img from "../../../assets/OurStoryImg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const OurStory = () => {
  const { i18n } = useTranslation();

  const modifiedDataOurStory = Data.AboutUs_OurStory.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        header: data.header_ar,
        description: data.description_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        header: data.header_fr,
        description: data.description_ar,
      };
    }
    return data;
  });

  const HeadingsAndParagraphs = modifiedDataOurStory.map(
    ({ id, header, description }) => {
      return (
        <div key={id}>
          <div>
            <div>
              <h1 className="mb-8 textCenter">{header}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <div>
        <div>
          <div className="relative mt-8 mb-20 sm:52">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="textCenter lg:text-left"
            >
              <LazyLoadImage src={Img} alt="Our Story Image" />
            </motion.div>
            <div className="lg:absolute bg-white shadow-xl duration-500 hover:shadow-2xl px-8 py-12 rounded-lg lg:top-1/4 lg:w-[70%] lg:left-[20%]">
              {HeadingsAndParagraphs}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
