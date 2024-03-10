import Data from "../../../data.json";
import Vision from "../../../assets/Vision.png";
import Mission from "../../../assets/Mission.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Img from "../../../assets/aboutHome.webp";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeader = Data.AboutUs_Heading.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        heading: data.heading_ar,
        paragraph: data.paragraph_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        heading: data.heading_fr,
        paragraph: data.paragraph_fr,
      };
    }
    return data;
  });

  const Heading = modifiedDataHeader.map(({ id, heading }) => {
    return (
      <div key={id}>
        <h1 className="relative p-0 mt-4 mb-2 md:mb-8 md:mt-0 lg:headingStyleLg">
          {heading}
        </h1>{" "}
      </div>
    );
  });

  // ----------------------------------------------------

  const modifiedDataParagraphOne = Data.AboutUs_Paragraph_One.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        paragraph: data.paragraph_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        paragraph: data.paragraph_fr,
      };
    }
    return data;
  });

  const ParagraphOne = modifiedDataParagraphOne.map(({ id, paragraph }) => {
    return (
      <div key={id}>
        <div>
          <p>{paragraph}</p>{" "}
        </div>
      </div>
    );
  });

  // ---------------------------------------------------

  const modifiedDataParagraphVision = Data.AboutUs_Paragraph_Two_Vision.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          header: data.header_ar,
          paragraph: data.paragraph_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          header: data.header_fr,
          paragraph: data.paragraph_fr,
        };
      }
      return data;
    }
  );

  const ParagraphTwoVision = modifiedDataParagraphVision.map(
    ({ id, header, paragraph }) => {
      return (
        <div key={id}>
          <div>
            <p className="mb-1 text-lg font-bold rtl:textRight md:text-xl">
              {header}
            </p>
            <p>{paragraph}</p>
          </div>
        </div>
      );
    }
  );

  // ---------------------------------------------------

  const modifiedDataParagraphMission = Data.AboutUs_Paragraph_Two_Mission.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          header: data.header_ar,
          paragraph: data.paragraph_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          header: data.header_fr,
          paragraph: data.paragraph_fr,
        };
      }
      return data;
    }
  );

  const ParagraphTwoMission = modifiedDataParagraphMission.map(
    ({ id, header, paragraph }) => {
      return (
        <div key={id}>
          <div>
            <p className="mb-1 text-lg font-bold rtl:textRight md:text-xl">
              {header}
            </p>
            <p>{paragraph}</p>
          </div>
        </div>
      );
    }
  );

  // ---------------------------------------------------

  // ---------------------------------------------------

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

            <div className="relative w-full lg:w-1/2 rtl:textRight">
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
                          className="w-10 h-10 rtl:ml-4 ltr:mr-4"
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
