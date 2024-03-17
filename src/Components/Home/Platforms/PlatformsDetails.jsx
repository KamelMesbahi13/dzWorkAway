import Data from "../../../data.json";
import { useParams } from "react-router-dom";
import PlatformsDetailsHeader from "./PlatformsDetailsHeader";
import PlatformsForm from "./PlatformsForm";
import Title from "../../../GeneralFunctions/Title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PlatformsDetails = () => {
  Title("Dz Work Away | Détails des plateformes");

  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph = Data.Platforms_Paragraph_One.map(
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

  const modifiedDataHeaderAndParagraphTwo = Data.Platforms_Paragraph_Two.map(
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

  const modifiedDataHeader = Data.PlatformDetails_Header.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        header: data.header_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        header: data.header_fr,
      };
    }
    return data;
  });

  const { platformId } = useParams();
  const platform = modifiedDataHeader.find(
    (platform) => platform.id == platformId
  );
  const { header } = platform;

  return (
    <>
      <motion.div>
        <PlatformsDetailsHeader header={header} />
        <div className="container">
          <div className="mt-20">
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
                className="w-full md:w-3/4"
              >
                <div>
                  <h1 className="relative mb-2 lg:mb-0 before:absolute before:hidden rtl:lg:pr-20 ltr:lg:pl-20 before:md:block before:h-2 before:w-16 before:rtl:left-[93%] before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                    {header}
                  </h1>
                </div>
                <div>{ParagraphOne}</div>
              </motion.div>
            </div>
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
                className="mt-12"
              >
                <div className="relative ltr:pl-4 rtl:pr-4 before:absolute ltr:lg:pl-8 rtl:lg:pr-8 before:md:block before:h-full before:w-2 before:ltr:left-0  before:rtl:left-[100%] before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                  {ParagraphTwo}
                </div>
              </motion.div>
            </div>
          </div>
          <PlatformsForm />
        </div>
      </motion.div>
    </>
  );
};

export default PlatformsDetails;
