import Data from "../../../data.json";
import Quality from "../../../assets/Quality.png";
import Speed from "../../../assets/Speed.png";
import Reliability from "../../../assets/Reliability.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const HeadingsAndParagraphs = Data.OurServices_HighService__Heading.map(
  ({ id, header }) => {
    return (
      <div key={id}>
        <div>
          <div>
            <h1 className="textCenter">{header}</h1>
          </div>
        </div>
      </div>
    );
  }
);

const data = [
  {
    id: 1,
    Title: "Quality",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Quality,
  },

  {
    id: 2,
    Title: "Speed",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Speed,
  },

  {
    id: 3,
    Title: "Reliability",
    Content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum laborum quisquam nihil. Itaque consectetur neque consequuntur et fuga dignissimos, eos rem! Provident veniam temporibus non beatae laudantium consectetur error!",
    Icon: Reliability,
  },
];

const HighService = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="py-8 mt-16 text-white md:py-16 md:mt-28 bestServicesBack"
      >
        <div>
          <div>
            <div className="w-full px-20 mx-auto md:w-3/4">
              {HeadingsAndParagraphs}
            </div>
            <div>
              <div>
                <div>
                  {data.map(({ id, Title, Content, Icon }) => {
                    return (
                      <div key={id}>
                        <div className="container my-3 md:my-6">
                          <div className="px-4 py-6 duration-500 md:border-b-2 md:border-opacity-0 md:py-12 md:border-b-grey md:hover:border-opacity-100">
                            <div className="flex flex-col items-center justify-between p-4 shadow-sm md:shadow shadow-grey md:p-0 border-grey md:border-0 md:flex-row">
                              <div>
                                <LazyLoadImage src={Icon} alt={Title} />
                              </div>
                              <div className="w-full md:w-1/2">
                                <div>
                                  <h6>{Title}</h6>
                                </div>
                                <div>
                                  <p>{Content}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HighService;
