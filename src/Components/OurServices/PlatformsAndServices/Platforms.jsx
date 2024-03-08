import ImgOne from "../../../assets/Globe.png";
import ImgTwo from "../../../assets/Canada.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Services from "./Services";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    header: "All The World",
    Img: ImgOne,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
  {
    id: 2,
    header: "Canada",
    Img: ImgTwo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores nihil repudiandae, ut est maiores quam nostrum fugiat earum laboriosam.",
    button: "Apply",
  },
];

const Platforms = () => {
  return (
    <div className="mt-28">
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
        <div className="w-full md:w-3/4">
          <div>
            <h1 className="relative headingStyleLg">Our Platforms</h1>
          </div>
          <div>
            <p>
              Welcome to Our Immigration Platforms, your one-stop solution for
              streamlined immigration services. With expert guidance and
              user-friendly interfaces, we make your journey to new beginnings
              hassle-free.
            </p>
          </div>
        </div>
      </motion.div>
      <div>
        <div className="flex flex-col md:mt-12 md:flex-row md:items-center md:justify-between textCenter">
          {data.map(({ id, Img, header, description, button }) => {
            return (
              <div key={id}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="p-8 w-full mt-4 md:mt-0 md:w-[70%] shadow-lg duration-500 hover:shadow-xl hover:scale-[1.02]">
                    <div>
                      <div>
                        <div>
                          <LazyLoadImage
                            className="w-16 h-14"
                            src={Img}
                            alt={header}
                          />
                        </div>
                        <div>
                          <div className="mt-2">
                            <h6>{header}</h6>
                          </div>
                          <div>
                            <p>{description}</p>
                          </div>
                        </div>
                        <div>
                          <a href={`/Nos-Platforms/${id}`}>
                            <button className="mt-4 buttonCust">
                              {button}
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Platforms;
