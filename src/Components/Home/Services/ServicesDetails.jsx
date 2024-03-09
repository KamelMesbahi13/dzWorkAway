import Data from "../../../data.json";
import ServicesForm from "./ServicesForm";
import { useParams } from "react-router-dom";
import ServicesDetailsHeader from "./ServicesDetailHeader";
import Title from "../../../GeneralFunctions/Title";
import { motion } from "framer-motion";

const ParagraphOne = Data.ServicesDetails_Paragraph_One.map(
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

const ParagraphTwo = Data.ServicesDetails_Paragraph_Two.map(
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

const ServicesDetails = () => {
  Title("Dz Work Away | Détails des services");

  const { servicesId } = useParams();
  const services = Data.ServicesDetails.find(
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
                  <h1 className="relative mb-2 headingStyleLg">
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
                <div className="relative pl-4 before:absolute lg:pl-8 before:md:block before:h-full before:w-2 before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
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
