// import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ServicesDetailsHeader from "./ServicesDetailHeader";
import ServicesForm from "./ServicesForm";
import Data from "../../../data.json";

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
              <div className="w-full md:w-3/4">
                <div>
                  <h1 className="relative mb-2 headingStyleLg">
                    {headerOne} <span className="text-secondColor"> / </span>{" "}
                    {headerTwo}
                  </h1>
                </div>
                <div>{ParagraphOne}</div>
              </div>
            </div>
            <div>
              <div className="mt-12">
                <div className="relative pl-4 before:absolute lg:pl-8 before:md:block before:h-full before:w-2 before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                  {ParagraphTwo}
                </div>
              </div>
            </div>
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
