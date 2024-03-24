import Data from "../../../data.json";
import ImgOne from "../../../assets/Globe.png";
import ImgTwo from "../../../assets/Canada.jpg";
import Plane from "../../../assets/Plane.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const DataImgsOne = [
  {
    id: 1,
    Img: ImgOne,
    alt: "Globe",
  },
];

const DataImgsTwo = [
  {
    id: 1,
    Img: ImgTwo,
    alt: "Canada",
  },
];

const Services = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph = Data.Services_Heading_Paragraphs.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          heading: data.heading_ar,
          description: data.description_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          heading: data.heading_fr,
          description: data.description_fr,
        };
      }
      return data;
    }
  );

  const HeadingsAndParagraphs = modifiedDataHeaderAndParagraph.map(
    ({ id, heading, description }) => {
      return (
        <div key={id}>
          <div>
            <div>
              {" "}
              <div className="mb-8">
                <h1 className="relative w-full mb-4 sm:mb-12 lg:mb-4 md:w-1/2 xl:headingStyleLg">
                  {heading}{" "}
                </h1>
                <p className="w-full md:w-3/4">{description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  const modifiedDataBoxOne = Data.Services_One.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        header: data.header_ar,
        description: data.description_ar,
        button: data.button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        header: data.header_fr,
        description: data.description_fr,
        button: data.button_fr,
      };
    }
    return data;
  });

  const BoxOne = modifiedDataBoxOne.map(
    ({ id, header, description, button }) => {
      return (
        <div key={id}>
          <div>
            <div>
              <div>
                {DataImgsOne.map((el, i) => {
                  return (
                    <div key={i}>
                      <LazyLoadImage
                        key={i}
                        className="w-20 h-16"
                        src={el.Img}
                        alt={el.alt}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-full h-[2px] mt-4 bg-grey"></div>
              <div>
                <div>
                  <p className="my-4 text-lg font-bold md:text-xl">{header}</p>
                </div>
                <div>
                  <p className="md:w-[90%] mb-4">{description}</p>
                </div>
              </div>

              <div>
                <a rel="noreferrer" href={`/Nos-Platforms/${id}`}>
                  <button className="buttonCust">{button}</button>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  const modifiedDataBoxTwo = Data.Services_Two.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        header: data.header_ar,
        description: data.description_ar,
        button: data.button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        header: data.header_fr,
        description: data.description_fr,
        button: data.button_fr,
      };
    }
    return data;
  });

  const BoxTwo = modifiedDataBoxTwo.map(
    ({ id, header, description, button }) => {
      return (
        <div key={id}>
          <div>
            <div>
              <div>
                {DataImgsTwo.map((el, i) => {
                  return (
                    <div key={i}>
                      <LazyLoadImage
                        key={i}
                        className="w-20 h-16"
                        src={el.Img}
                        alt={el.alt}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-full h-[2px] mt-4 bg-grey"></div>
              <div>
                <div>
                  <p className="my-4 text-lg font-bold md:text-xl">{header}</p>
                </div>
                <div>
                  <p className="md:w-[90%] mb-4">{description}</p>
                </div>
              </div>

              <div>
                <a rel="noreferrer" href={`/Nos-Platforms/${id}`}>
                  <button className="buttonCust">{button}</button>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <div className="mt-16 md:mt-28">
        <div>
          <div className="relative hidden md:block">
            <LazyLoadImage
              className="absolute left-[60%] w-[40%] bottom-12 md:left-[70%] md:w-[25%]"
              src={Plane}
              alt="plane"
            />
          </div>

          <div>{HeadingsAndParagraphs}</div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 textCenter">
            <div>
              <div className="duration-500 hover:scale-[1.01] hover:shadow-2xl card rounded-md p-8 w-full md:w-[60%] shadow-xl rtl:md:h-[30rem] md:h-[40rem] bg-white">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="md:pt-8 card-content"
                >
                  {BoxOne}
                </motion.div>
              </div>
            </div>

            <div>
              <div className="duration-500 hover:scale-[1.01] hover:shadow-2xl card rounded-md p-8 w-full md:w-[60%] shadow-xl rtl:md:h-[30rem] md:h-[40rem] bg-white">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="md:pt-8 card-content"
                >
                  {BoxTwo}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
