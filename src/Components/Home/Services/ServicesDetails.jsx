import Data from "../../../data.json";
import ServicesForm from "./ServicesForm";
import { useParams } from "react-router-dom";
import ServicesDetailsHeader from "./ServicesDetailHeader";
import Title from "../../../GeneralFunctions/Title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServicesDetails = () => {
  Title("Dz Work Away | Détails des services");

  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph = Data.ServicesDetails_Paragraph_One.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Paragraph: data.Paragraph_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Paragraph: data.Paragraph_fr,
        };
      }
      return data;
    }
  );

  const ParagraphOne = modifiedDataHeaderAndParagraph.map(
    ({ id, Paragraph }) => {
      return (
        <div key={id}>
          <div>
            <div>
              <p>{Paragraph}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const modifiedDataHeaderAndParagraphTwo =
    Data.ServicesDetails_Paragraph_Two.map((data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Paragraph: data.Paragraph_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Paragraph: data.Paragraph_fr,
        };
      }
      return data;
    });

  const ParagraphTwo = modifiedDataHeaderAndParagraphTwo.map(
    ({ id, Paragraph }) => {
      return (
        <div key={id}>
          <div>
            <div>
              <p>{Paragraph}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const modifiedDataHeader = Data.ServicesDetails_Header.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        headerOne: data.headerOne_ar,
        headerTwo: data.headerTwo_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        headerOne: data.headerOne_fr,
        headerTwo: data.headerTwo_fr,
      };
    }
    return data;
  });

  const { servicesId } = useParams();
  const services = modifiedDataHeader.find(
    (services) => services.id == servicesId
  );
  const { headerOne, headerTwo } = services;

  return (
    <>
      <div>
        <ServicesDetailsHeader headerOne={headerOne} headerTwo={headerTwo} />
        <div className="container">
          <div className="mt-20">
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
                <div>
                  <h1 className="relative mb-2 lg:mb-0 before:absolute before:hidden rtl:lg:pr-20 ltr:lg:pl-20 before:md:block before:h-2 before:w-16 before:rtl:left-[93%] before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                    {headerOne} <span className="text-secondColor"> / </span>{" "}
                    {headerTwo}
                  </h1>
                </div>
                <div>{ParagraphOne}</div>
              </motion.div>
            </div>
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
              <div className="mt-12">
                <div className="relative ltr:pl-4 rtl:pr-4 before:absolute ltr:lg:pl-8 rtl:lg:pr-8 before:md:block before:h-full before:w-2 before:ltr:left-0  before:rtl:left-[100%] before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                  {ParagraphTwo}
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <ServicesForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
