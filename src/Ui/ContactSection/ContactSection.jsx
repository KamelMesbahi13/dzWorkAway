import Data from "../../data.json";
import Img from "../../assets/ContactSection.webp";
import Check from "../../assets/check.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { i18n } = useTranslation();

  const modifiedDataParagraphs = Data.ContactSection_Paragraphs.map((data) => {
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

  const paragraphsCheck = modifiedDataParagraphs.map(({ id, paragraph }) => {
    return (
      <div key={id}>
        <div className="flex items-center my-4">
          <div>
            <LazyLoadImage
              className="!w-6 h-6 rtl:ml-2 ltr:mr-2"
              src={Check}
              alt="Check"
            />
          </div>
          <div>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  });

  const modifiedDataHeaderParagraph = Data.ContactSection_Heading_Paragraph.map(
    (data) => {
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
    }
  );

  const HeadingsAndParagraphs = modifiedDataHeaderParagraph.map(
    ({ id, header, description, button }) => {
      return (
        <div key={id}>
          <div>
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
                className="p-4 rtl:textRight"
              >
                <h1>{header}</h1>
                <p className="mt-2">{description} </p>
                <div>
                  <div className="mt-4 md:mt-6">
                    {paragraphsCheck}
                    <div className="mt-4 md:mt-6">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="/Contactez-Nous"
                      >
                        <button className="buttonCust">{button}</button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <div className="mt-20 border-2 shadow-xl md:mt-40 border-grey">
        <div>
          <div className="flex flex-col justify-between lg:flex-row">
            <div>{HeadingsAndParagraphs}</div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="ltr:textRight rtl:textLeft"
            >
              <LazyLoadImage
                className="w-full lg:w-[80%]"
                src={Img}
                alt="Logo"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
