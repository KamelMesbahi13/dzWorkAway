import Data from "../../../data.json";
import ImgOne from "../../../assets/Arrima.png";
import ImgTwo from "../../../assets/EntréeExpress.jpg";
import ImgThree from "../../../assets/NewBrunswick.png";
import ImgFour from "../../../assets/Flag_of_New_Zealand.svg.png";
import PlaneTwo from "../../../assets/PlaneTwo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const dataOne = [
  {
    id: 1,
    headerOne: "Arrima",
    headerOne_ar: "اريما",
    headerOne_fr: "Arrima",
    headerTwo: "Entrée Express",
    headerTwo_ar: "انتري اكسبرس",
    headerTwo_fr: "Entrée Express",
    ImgOne: ImgOne,
    ImgTwo: ImgTwo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    description_ar:
      "يبساينلار بسنترا سبتمايئن اكسبيعال سبخلهتاىشي لشخيهئالس لاخهيالش ثخهلاسبلا سيخلعاس لخقثعللاق صقخعللاخ شيخبالقل خشثهلاقل سقخعلسق خعلاسحرلا سخبعلاصقخعل سخعللاسيهعر سعلرسلااب شخعثبش خعيب",
    description_fr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
    button_ar: "التيهضه",
    button_fr: "Apply",
  },
];

const dataTwo = [
  {
    id: 2,
    headerThree: "New Zélande",
    headerThree_ar: "نيو زيلاند",
    headerThree_fr: "New Zélande",
    headerFour: "New Brunswick",
    headerFour_ar: "نيو هينبتش",
    headerFour_fr: "New Brunswick",
    ImgThree: ImgThree,
    ImgFour: ImgFour,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    description_ar:
      "يبساينلار بسنترا سبتمايئن اكسبيعال سبخلهتاىشي لشخيهئالس لاخهيالش ثخهلاسبلا سيخلعاس لخقثعللاق صقخعللاخ شيخبالقل خشثهلاقل سقخعلسق خعلاسحرلا سخبعلاصقخعل سخعللاسيهعر سعلرسلااب شخعثبش خعيب",
    description_fr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
    button_ar: "التيهضه",
    button_fr: "Apply",
  },
];

const Platforms = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeader = Data.Services_Service_Header_Paragraph.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Header: data.Header_ar,
          Paragraph: data.Paragraph_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Header: data.Header_fr,
          Paragraph: data.Paragraph_fr,
        };
      }
      return data;
    }
  );

  const HeadingAndParagraph = modifiedDataHeader.map(
    ({ id, Header, Paragraph }) => {
      return (
        <div key={id}>
          <div>
            <h1 className="relative mb-2 lg:mb-0 before:absolute before:hidden rtl:lg:pr-20 ltr:lg:pl-20 before:md:block before:h-2 before:w-16 before:rtl:left-[95%] before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
              {Header}
            </h1>
          </div>
          <div>
            <p className="md:mt-4 lg:mt-0">{Paragraph}</p>
          </div>
        </div>
      );
    }
  );

  const modifiedDataContentOne = dataOne.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        headerOne: data.headerOne_ar,
        headerTwo: data.headerTwo_ar,
        description: data.description_ar,
        ImgOne: data.ImgOne,
        ImgTwo: data.ImgTwo,
        button: data.button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        headerOne: data.headerOne_fr,
        headerTwo: data.headerTwo_fr,
        description: data.description_fr,
        ImgOne: data.ImgOne,
        ImgTwo: data.ImgTwo,
        button: data.button_fr,
      };
    }
    return data;
  });

  const dataOneRendering = modifiedDataContentOne.map(
    ({ id, headerOne, headerTwo, ImgOne, ImgTwo, description, button }) => {
      return (
        <div key={id}>
          <div className="p-8 w-full mt-4 md:mt-0 md:w-[70%] shadow-lg duration-500 hover:shadow-xl hover:scale-[1.02]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:pt-8"
            >
              <div className="flex items-center justify-center">
                <div>
                  <LazyLoadImage
                    className="w-20 h-16"
                    src={ImgOne}
                    alt={headerOne}
                  />
                </div>
                <div>
                  <span className="mx-4 text-4xl font-bold text-secondColor">
                    /
                  </span>
                </div>
                <div>
                  <LazyLoadImage
                    className="w-20 h-16"
                    src={ImgTwo}
                    alt={headerTwo}
                  />
                </div>
              </div>
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

  const modifiedDataContentTwo = dataTwo.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        headerThree: data.headerThree_ar,
        headerFour: data.headerFour_ar,
        description: data.description_ar,
        ImgThree: data.ImgThree,
        ImgFour: data.ImgFour,
        button: data.button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        headerThree: data.headerThree_fr,
        headerFour: data.headerFour_fr,
        description: data.description_fr,
        ImgThree: data.ImgThree,
        ImgFour: data.ImgFour,
        button: data.button_fr,
      };
    }
    return data;
  });

  const dataTwoRendering = modifiedDataContentTwo.map(
    ({
      id,
      headerThree,
      headerFour,
      ImgThree,
      ImgFour,
      description,
      button,
    }) => {
      return (
        <div key={id}>
          <div className="p-8 w-full mt-4 md:mt-0 md:w-[70%] shadow-lg duration-500 hover:shadow-xl hover:scale-[1.02]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:pt-8"
            >
              <div className="flex items-center justify-center">
                <div>
                  <LazyLoadImage
                    className="w-20 h-16"
                    src={ImgThree}
                    alt={headerFour}
                  />
                </div>
                <div>
                  <span className="mx-4 text-4xl font-bold text-secondColor">
                    /
                  </span>
                </div>
                <div>
                  <LazyLoadImage
                    className="w-20 h-16"
                    src={ImgFour}
                    alt={headerThree}
                  />
                </div>
              </div>
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mb-8"
          >
            {HeadingAndParagraph}
          </motion.div>

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

export default Platforms;
