import Data from "../../../data.json";
import { useState } from "react";
import Down from "../../../assets/DownArrow.png";
import Up from "../../../assets/UpArrow.png";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph =
    Data.AboutUs_Question_Heading_Paragraph.map((data) => {
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
            {" "}
            <div>
              <h1 className="relative mb-2">{header}</h1>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const [activeAccordion, setActiveAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setActiveAccordion((prev) => (prev === accordionId ? "" : accordionId));
  };

  const AccordionItem = ({ id, title, isOpen, onClick, children }) => {
    return (
      <div>
        <h2 id={id}>
          <button
            type="button"
            className="flex items-center justify-between gap-3 py-5"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={id}
            onClick={onClick}
          >
            <p className="text-xl">{title}</p>

            {isOpen ? (
              <LazyLoadImage
                className="w-10 h-10"
                src={Down}
                alt="Down Arrow"
              />
            ) : (
              <LazyLoadImage className="w-10 h-10" src={Up} alt="Up Arrow" />
            )}
          </button>
        </h2>
        <div id={`${id}-body`} className={`${isOpen ? "" : "hidden"} p-5`}>
          {children}
        </div>
      </div>
    );
  };

  AccordionItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  // -----------------------------------------------------------

  const modifiedDataQuestion = Data.AboutUs_Question.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        title: data.title_ar,
        description: data.description_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        title: data.title_fr,
        description: data.description_fr,
      };
    }
    return data;
  });

  const Questions = modifiedDataQuestion.map(({ id, title, description }) => {
    return (
      <div key={id}>
        <div className="w-full md:w-3/4">
          <AccordionItem
            id={`accordion-collapse-heading-${id}`}
            title={title}
            isOpen={activeAccordion === `accordion-collapse-body-${id}`}
            onClick={() => toggleAccordion(`accordion-collapse-body-${id}`)}
          >
            <div>
              <p>{description}</p>
            </div>
          </AccordionItem>
        </div>
      </div>
    );
  });

  // -----------------------------------------------------------

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      id="accordion-collapse"
      className="py-8 mb-20 text-white divide-y questionBack"
    >
      <div className="container">
        <div>
          <div>
            <div className="w-full mb-8 md:w-3/4">{HeadingsAndParagraphs}</div>
          </div>
        </div>
        <div>{Questions}</div>
      </div>
    </motion.div>
  );
};

export default Questions;
