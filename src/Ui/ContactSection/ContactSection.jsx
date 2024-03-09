import Data from "../../data.json";
import Img from "../../assets/ContactSection.png";
import Check from "../../assets/check.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeadingsAndParagraphs = Data.ContactSection_Heading_Paragraph.map(
  ({ id, header, description }) => {
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
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="p-4"
            >
              <h1>{header}</h1>
              <p className="mt-2">{description} </p>
              <div>
                <div className="mt-4 md:mt-6">
                  {Data.ContactSection_Paragraphs.map(({ id, paragraph }) => {
                    return (
                      <div key={id}>
                        <div className="flex items-center my-4">
                          <div>
                            <LazyLoadImage
                              className="!w-6 h-6 mr-2"
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
                  })}
                  <div className="mt-4 md:mt-6">
                    <a target="_blank" href="/Contactez-Nous">
                      <button className="buttonCust">Contact US</button>
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

const ContactSection = () => {
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
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="textRight"
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
