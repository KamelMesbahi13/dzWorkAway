import Data from "../../../data.json";
import { useParams } from "react-router-dom";
import PlatformsDetailsHeader from "./PlatformsDetailsHeader";
import PlatformsForm from "./PlatformsForm";
import Title from "../../../GeneralFunctions/Title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    header: "All The World",
  },
  {
    id: 2,
    header: "Canada",
  },
];

const PlatformsDetails = () => {
  Title("Dz Work Away | Détails des plateformes");

  const { i18n } = useTranslation();

  // -----------------------------------------------------------

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

  // ----------------------------------------------------------

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

  // ----------------------------------------------------------

  const { platformId } = useParams();
  const platform = data.find((platform) => platform.id == platformId);
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
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="w-full md:w-3/4"
              >
                <div>
                  <h1 className="relative mb-2 headingStyleLg">{header}</h1>
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
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-12"
              >
                <div className="relative pl-4 before:absolute lg:pl-8 before:md:block before:h-full before:w-2 before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                  <div>{ParagraphTwo}</div>
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
