import Data from "../../../data.json";
import Img from "../../../assets/AboutUsImg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph =
    Data.AboutUs_Introduction_Heading_Paragraph.map((data) => {
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
          description: data.description_fr,
        };
      }
      return data;
    });

  const HeadingsAndParagraphs = modifiedDataHeaderAndParagraph.map(
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
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <h1 className="relative xl:headingStyleLg">{header}</h1>
              <p className="mt-4">{description}</p>
            </motion.div>
          </div>
        </div>
      );
    }
  );

  const modifiedDataHeaderAndParagraphTwo =
    Data.AboutUs_Introduction_Paragraph_Two.map((data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          description: data.description_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          description: data.description_fr,
        };
      }
      return data;
    });

  const ParagraphTwo = modifiedDataHeaderAndParagraphTwo.map(
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
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <p>{description}</p>
            </motion.div>
          </div>
        </div>
      );
    }
  );

  // --------------------------------------

  // --------------------------------------

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
