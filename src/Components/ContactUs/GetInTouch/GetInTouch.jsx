import Data from "../../../data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useForm } from "react-hook-form";
import CallUsImage from "../../../assets/PhoneCall.png";
import VisitUsImage from "../../../assets/Location.png";
import { motion } from "framer-motion";

const HeadingsAndParagraphs = Data.ContactUs_GetInTouch__Heading_Paragraph.map(
  ({ id, header, description }) => {
    return (
      <div key={id}>
        <div>
          <div>
            <h1 className="relative mb-2 headingStyleLg">{header} </h1>
          </div>

          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
);

const GetInTouch = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const inputStyles = `w-full mt-5 rounded-md focus:outline-none bg-grey px-5 py-3`;

  return (
    <div className="mt-12 md:mt-20">
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
            className="mt-8 mb-10 md:mt-12 md:mb-20 md:w-3/4"
          >
            {HeadingsAndParagraphs}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="py-6 border-2 shadow-xl md:px-8 md:py-12 md:border-4 md:pt-0 border-grey"
          >
            {Data.ContactUs_GetInTouch_Data.map(
              ({
                id,
                Title,
                CallUs,
                CallUs_Title,
                CallUs_paragraph,
                Paragraph,
                VisitUs,
                VisitUs_Title,
                VisitUs_paragraph,
                Privacy_Policy_Text,
              }) => {
                return (
                  <div key={id}>
                    <div className="flex flex-col md:pt-8 md:justify-between md:flex-row">
                      <div className="w-full px-4 md:px-8 md:w-[40%]">
                        <div>
                          <div className="mb-4">
                            <h1 className="mb-2">{Title}</h1>
                          </div>
                          <div>
                            <p>{Paragraph}</p>
                          </div>
                        </div>
                        <form
                          target="_blank"
                          className="mb-8 text-center md:mb-0"
                          onSubmit={onSubmit}
                          action="https://formsubmit.co/684a89368411730fd8bf45a2693316d9"
                          method="POST"
                        >
                          <input
                            type="text"
                            placeholder="Name"
                            className={inputStyles}
                            {...register("name", {
                              required: true,
                              minLength: 5,
                              maxLength: 100,
                            })}
                          />
                          {errors.name && (
                            <p className="mt-1 text-mainColor">
                              {errors.name.type === "required" &&
                                "This field is require"}
                              {errors.name.type === "maxLength" &&
                                "Max Length is 100 character"}
                              {errors.name &&
                                errors.name.type === "minLength" &&
                                "Name should be more than 5 characters"}
                            </p>
                          )}
                          <input
                            type="text"
                            placeholder="Email"
                            className={inputStyles}
                            {...register("email", {
                              required: true,
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                          />
                          {errors.email && (
                            <p className="mt-1 text-mainColor">
                              {errors.email.type === "required" &&
                                "This field is require"}
                              {errors.email.type === "pattern" &&
                                "Invalid Email Address"}
                            </p>
                          )}
                          <textarea
                            placeholder="Message"
                            className={inputStyles}
                            rows={4}
                            cols={50}
                            {...register("message", {
                              required: true,
                              minLength: 5,
                              maxLength: 2000,
                            })}
                          />
                          {errors.message && (
                            <p className="mt-1 text-mainColor">
                              {errors.message.type === "required" &&
                                "This field is require"}
                              {errors.message.type === "maxLength" &&
                                "Max length is 2000 char"}
                              {errors.name &&
                                errors.name.type === "minLength" &&
                                "Min Length should be more than 5 characters"}
                            </p>
                          )}
                          <div>
                            <button className="w-full mt-4 buttonCust">
                              Submit
                            </button>
                          </div>
                        </form>
                        <div>
                          <div className="my-4">
                            <a
                              className="italic font-bold"
                              href="/Confidentialité"
                              target="_blank"
                            >
                              {Privacy_Policy_Text}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-[40%] px-8">
                        <div>
                          <div>
                            <div>
                              <h6>
                                <span className="mr-2 text-sm md:text-xl text-secondColor">
                                  &#x25CF;
                                </span>
                                {CallUs_Title}
                              </h6>
                            </div>
                            <div className="my-4">
                              <p>{CallUs_paragraph}</p>
                            </div>
                            <div className="flex items-center">
                              <div>
                                <a
                                  href="tel:+2135555555"
                                  className="flex items-center"
                                >
                                  <div className="mr-4">
                                    <LazyLoadImage
                                      className="w-7 h-7"
                                      src={CallUsImage}
                                      alt={CallUs_Title}
                                    />
                                  </div>
                                  <p>{CallUs}</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-1 my-8 md:my-12 bg-secondColor"></div>
                        <div>
                          <div>
                            <h6>
                              <span className="mr-2 text-sm md:text-xl text-secondColor">
                                &#x25CF;
                              </span>
                              {VisitUs_Title}
                            </h6>
                          </div>
                          <div className="my-4">
                            <p>{VisitUs_paragraph}</p>
                          </div>
                          <div className="flex items-center">
                            <div className="mr-4">
                              <LazyLoadImage
                                className="w-10 sm:w-14 lg:w-7 h-7"
                                src={VisitUsImage}
                                alt={VisitUs_Title}
                              />
                            </div>
                            <p>{VisitUs}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
