import Img from "../../assets/ContactSection.png";
import Check from "../../assets/check.png";
import { motion } from "framer-motion";

const paragraphs = [
  {
    id: 1,
    paragraph: "Entering & Leaving From Country",
  },
  {
    id: 2,
    paragraph: "Entering & Leaving From Country",
  },
  {
    id: 3,
    paragraph: "Entering & Leaving From Country",
  },
];

const ContactSection = () => {
  return (
    <>
      <div className="mt-20 border-2 shadow-xl md:mt-40 border-grey">
        <div>
          <div className="flex flex-col justify-between lg:flex-row">
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
              <h1>Fly Your Dream Destination</h1>
              <p className="mt-2">
                Idea of denouncing pleasure & praising pain was born.
              </p>
              <div>
                <div className="mt-4 md:mt-6">
                  {paragraphs.map(({ id, paragraph }) => {
                    return (
                      <div key={id}>
                        <div className="flex items-center my-4">
                          <div>
                            <img
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
                    <button className="buttonCust">Contact US</button>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <img className="w-full lg:w-[80%]" src={Img} alt="Logo" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
