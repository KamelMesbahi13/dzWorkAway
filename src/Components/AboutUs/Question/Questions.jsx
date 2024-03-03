import { useState } from "react";
import Down from "../../../assets/DownArrow.png";
import PropTypes from "prop-types";

const data = [
  {
    id: 1,
    title: "What services does your immigration agency offer?",
    description:
      "At Dz Work Away, we offer a wide range of immigration services tailored to meet the diverse needs of our clients. Our services include visa applications, permanent residency applications, citizenship applications, immigration consultations, family sponsorship, work permits, study permits, and more. Whether you're an individual, family, or employer, we're here to provide comprehensive support and guidance throughout your immigration journey.",
  },

  {
    id: 2,
    title: "What sets your immigration agency apart from others?",
    description:
      "At Dz Work Away, we distinguish ourselves through our unwavering commitment to excellence, personalized approach, and dedication to client satisfaction. Our team of experienced immigration professionals combines in-depth knowledge with a client-centric mindset to deliver exceptional service and results. We prioritize transparency, communication, and integrity in everything we do, ensuring that our clients receive the support and guidance they need to achieve their immigration goals.",
  },

  {
    id: 3,
    title: "How experienced is your team in handling immigration matters?",
    description:
      "Our team at Dz Work Away comprises seasoned immigration professionals with extensive experience in handling a wide range of immigration matters. We stay abreast of the latest developments in immigration law, policies, and procedures to provide our clients with accurate and up-to-date guidance. Whether you're navigating a complex visa application or seeking advice on citizenship requirements, you can trust our team to offer knowledgeable and reliable assistance every step of the way.",
  },

  {
    id: 4,
    title: "What can clients expect when working with your immigration agency?",
    description:
      "When you choose Dz Work Away, you can expect a personalized and comprehensive approach to immigration services. From the initial consultation to the successful completion of your immigration process, we're here to provide guidance, support, and peace of mind. Our dedicated team will work closely with you to understand your unique circumstances, address your concerns, and develop a tailored immigration strategy that aligns with your goals. With [Your Agency Name], you'll have a trusted partner by your side, committed to helping you navigate the complexities of immigration with confidence and ease.",
  },
];

const Questions = () => {
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
            className="flex items-center justify-between w-full gap-3 py-5 font-medium"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={id}
            onClick={onClick}
          >
            <span>{title}</span>
            <img
              src={Down}
              alt="Arrow Down"
              className={`w-10 h-10 rotate-${isOpen ? "0" : "180"} shrink-0`}
            ></img>
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

  return (
    <div id="accordion-collapse" className="divide-y">
      {data.map(({ id, title, description }) => {
        return (
          <div key={id}>
            <div>
              <AccordionItem
                id={`accordion-collapse-heading-${id}`}
                title={title}
                isOpen={activeAccordion === `accordion-collapse-body-${id}`}
                onClick={() => toggleAccordion(`accordion-collapse-body-${id}`)}
              >
                <p>{description}</p>
              </AccordionItem>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
