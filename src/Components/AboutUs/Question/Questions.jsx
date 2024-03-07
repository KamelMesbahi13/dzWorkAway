import Data from "../../../data.json";
import { useState } from "react";
import Down from "../../../assets/DownArrow.png";
import Up from "../../../assets/UpArrow.png";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

// const data = [
//   {
//     id: 1,
//     title: "What services does your immigration agency offer?",
//     description:
//       "At Dz Work Away, we offer a wide range of immigration services tailored to meet the diverse needs of our clients. Our services include visa applications, permanent residency applications, citizenship applications, immigration consultations, family sponsorship, work permits, study permits, and more. Whether you're an individual, family, or employer, we're here to provide comprehensive support and guidance throughout your immigration journey.",
//   },

//   {
//     id: 2,
//     title: "What sets your immigration agency apart from others?",
//     description:
//       "At Dz Work Away, we distinguish ourselves through our unwavering commitment to excellence, personalized approach, and dedication to client satisfaction. Our team of experienced immigration professionals combines in-depth knowledge with a client-centric mindset to deliver exceptional service and results. We prioritize transparency, communication, and integrity in everything we do, ensuring that our clients receive the support and guidance they need to achieve their immigration goals.",
//   },

//   {
//     id: 3,
//     title: "How experienced is your team in handling immigration matters?",
//     description:
//       "Our team at Dz Work Away comprises seasoned immigration professionals with extensive experience in handling a wide range of immigration matters. We stay abreast of the latest developments in immigration law, policies, and procedures to provide our clients with accurate and up-to-date guidance. Whether you're navigating a complex visa application or seeking advice on citizenship requirements, you can trust our team to offer knowledgeable and reliable assistance every step of the way.",
//   },

//   {
//     id: 4,
//     title: "What can clients expect when working with your immigration agency?",
//     description:
//       "When you choose Dz Work Away, you can expect a personalized and comprehensive approach to immigration services. From the initial consultation to the successful completion of your immigration process, we're here to provide guidance, support, and peace of mind. Our dedicated team will work closely with you to understand your unique circumstances, address your concerns, and develop a tailored immigration strategy that aligns with your goals. With [Your Agency Name], you'll have a trusted partner by your side, committed to helping you navigate the complexities of immigration with confidence and ease.",
//   },
// ];

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
            className="flex items-center justify-between gap-3 py-5"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={id}
            onClick={onClick}
          >
            <h6>{title}</h6>

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
            <div className="w-full mb-8 md:w-3/4">
              <div>
                <h1 className="relative mb-2 md:headingStyleMd lg:headingStyleLg">
                  Answers to Your Immigration Questions
                </h1>
              </div>
              <div>
                <p>
                  Discover Clear Solutions: Your Top Immigration Questions
                  Answered. Get quick, concise answers to common immigration
                  inquiries, curated by our expert team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {Data.AboutUs_Question.map(({ id, title, description }) => {
            return (
              <div key={id}>
                <div className="w-full md:w-3/4">
                  <AccordionItem
                    id={`accordion-collapse-heading-${id}`}
                    title={title}
                    isOpen={activeAccordion === `accordion-collapse-body-${id}`}
                    onClick={() =>
                      toggleAccordion(`accordion-collapse-body-${id}`)
                    }
                  >
                    <div>
                      <p>{description}</p>
                    </div>
                  </AccordionItem>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Questions;
