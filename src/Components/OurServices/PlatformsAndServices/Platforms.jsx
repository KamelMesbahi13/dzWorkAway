import Data from "../../../data.json";
import ImgOne from "../../../assets/Globe.png";
import ImgTwo from "../../../assets/Canada.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Services from "./Services";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    header: "All The World",
    header_ar: "النيب سههص شيابض",
    header_fr: "All The World",

    Img: ImgOne,
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
  {
    id: 2,
    header: "Canada",
    header_ar: "النيب شيابض",
    header_fr: "All The World",
    Img: ImgTwo,
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

  const modifiedDataHeader = Data.Platform_Header.map((data) => {
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
  });

  const HeadingAndParagraph = modifiedDataHeader.map(
    ({ id, Header, Paragraph }) => {
      return (
        <div key={id}>
          <div>
            <h1 className="relative mb-2 lg:mb-0 before:absolute before:hidden rtl:lg:pr-20 ltr:lg:pl-20 before:md:block before:h-2 before:w-16 before:rtl:left-[93%] before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
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

  const modifiedDataContent = data.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        header: data.header_ar,
        description: data.description_ar,
        Img: data.Img,
        button: data.button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        header: data.header_fr,
        description: data.description_fr,
        Img: data.Img,
        button: data.button_fr,
      };
    }
    return data;
  });

  return (
    <div className="mt-28">
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
        <div className="w-full md:w-3/4">{HeadingAndParagraph}</div>
      </motion.div>
      <div>
        <div className="flex flex-col md:mt-12 md:flex-row md:items-center md:justify-between textCenter">
          {modifiedDataContent.map(
            ({ id, Img, header, description, button }) => {
              return (
                <div key={id}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="p-8 w-full mt-4 md:mt-0 md:w-[70%] shadow-lg duration-500 hover:shadow-xl hover:scale-[1.02]">
                      <div>
                        <div>
                          <div>
                            <LazyLoadImage
                              className="w-16 h-14"
                              src={Img}
                              alt={header}
                            />
                          </div>
                          <div>
                            <div className="mt-2">
                              <h6>{header}</h6>
                            </div>
                            <div>
                              <p>{description}</p>
                            </div>
                          </div>
                          <div>
                            <a rel="noreferrer" href={`/Nos-Platforms/${id}`}>
                              <button className="mt-4 buttonCust">
                                {button}
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Platforms;
