import Data from "../../../data.json";
import ImgOne from "../../../assets/Arrima.png";
import ImgTwo from "../../../assets/Entree.webp";
import ImgThree from "../../../assets/NewBrunswick.png";
import ImgFour from "../../../assets/Flag_of_New_Zealand.svg.png";
import PlaneTwo from "../../../assets/PlaneTwo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const DataImgsOne = [
  {
    id: 1,
    ImgOne: ImgOne,
    ImgTwo: ImgTwo,
    alt: "Arrima / EntréeExpress",
  },
];

const ImagesOne = DataImgsOne.map(({ id, ImgOne, ImgTwo, alt }) => {
  return (
    <div key={id}>
      <div>
        <div>
          <div className="flex items-center justify-center">
            <div>
              <LazyLoadImage className="w-20 h-16" src={ImgOne} alt={alt} />
            </div>
            <div>
              <span className="mx-4 text-4xl font-bold text-secondColor">
                /
              </span>
            </div>
            <div>
              <LazyLoadImage className="w-20 h-16" src={ImgTwo} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const DataImgsTwo = [
  {
    id: 1,
    ImgThree: ImgThree,
    ImgFour: ImgFour,
    alt: "NewBrunswick / New Zealand",
  },
];

const ImagesTwo = DataImgsTwo.map(({ id, ImgThree, ImgFour, alt }) => {
  return (
    <div key={id}>
      <div>
        <div className="flex items-center justify-center">
          <div>
            <LazyLoadImage className="w-20 h-16" src={ImgThree} alt={alt} />
          </div>
          <div>
            <span className="mx-4 text-4xl font-bold text-secondColor">/</span>
          </div>
          <div>
            <LazyLoadImage className="w-20 h-16" src={ImgFour} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
});

const Services = () => {
  const { i18n } = useTranslation();

  // -----------------------------------------------------

  const modifiedDataHeaderAndParagraph = Data.Platforms_Heading_Paragraphs.map(
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="mb-8"
              >
                <h1 className="relative w-full mb-4 sm:mb-12 lg:mb-4 md:w-1/2 xl:headingStyleLg">
                  {heading}{" "}
                </h1>
                <p className="w-full md:w-3/4">{description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      );
    }
  );

  // -----------------------------------------------------

  const modifiedDataBoxOne = Data.Platforms_One.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        headerOne: data.headerOne_ar,
        headerTwo: data.headerTwo_ar,
        description: data.description_ar,
        button: data.button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        headerOne: data.headerOne_fr,
        headerTwo: data.headerTwo_fr,
        description: data.description_fr,
        button: data.button_fr,
      };
    }
    return data;
  });

  const dataOneRendering = modifiedDataBoxOne.map(
    ({ id, headerOne, headerTwo, description, button }) => {
      return (
        <div key={id}>
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
              {ImagesOne}
              <div className="w-full h-[2px] mt-4 bg-grey"></div>
              <div>
                <div className="flex items-center justify-center">
                  <p className="my-4 text-lg font-bold md:text-xl">
                    {headerOne}
                  </p>
                  <div>
                    <span className="mx-4 text-2xl font-bold text-secondColor">
                      -
                    </span>
                  </div>
                  <p className="my-4 text-lg font-bold md:text-xl">
                    {headerTwo}
                  </p>
                </div>
                <div>
                  <p className="md:w-[90%] mb-4">{description}</p>
                </div>
              </div>
              <div>
                <a rel="noreferrer" href={`/Nos-Services/${id}`}>
                  <button className="buttonCust">{button}</button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }
  );

  // -----------------------------------------------------

  const modifiedDataBoxTwo = Data.Platforms_Two.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        headerThree: data.headerThree_ar,
        headerFour: data.headerFour_ar,
        description: data.description_ar,
        button: data.button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        headerThree: data.headerThree_fr,
        headerFour: data.headerFour_fr,
        description: data.description_fr,
        button: data.button_fr,
      };
    }
    return data;
  });

  const dataTwoRendering = modifiedDataBoxTwo.map(
    ({ id, headerThree, headerFour, description, button }) => {
      return (
        <div key={id}>
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
              {ImagesTwo}
              <div className="w-full h-[2px] mt-4 bg-grey"></div>
              <div>
                <div className="flex items-center justify-center">
                  <p className="my-4 text-lg font-bold md:text-xl">
                    {headerThree}
                  </p>
                  <div>
                    <span className="mx-4 text-2xl font-bold text-secondColor">
                      -
                    </span>
                  </div>
                  <p className="my-4 text-lg font-bold md:text-xl">
                    {headerFour}
                  </p>
                </div>
                <div>
                  <p className="md:w-[90%] mb-4">{description}</p>
                </div>
              </div>
              <div>
                <a rel="noreferrer" href={`/Nos-Services/${id}`}>
                  <button className="buttonCust">{button}</button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <div className="mt-16 md:mt-28">
        <div>
          <div>{HeadingsAndParagraphs}</div>
          <div className="relative hidden md:block">
            <LazyLoadImage
              className="absolute left-[60%] w-[40%] bottom-4 md:left-[50%] md:w-[25%]"
              src={PlaneTwo}
              alt="plane"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 textCenter">
            {dataOneRendering}
            {dataTwoRendering}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
