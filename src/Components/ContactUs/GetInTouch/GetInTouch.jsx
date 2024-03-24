import Data from "../../../data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useForm } from "react-hook-form";
import CallUsImage from "../../../assets/PhoneCall.png";
import VisitUsImage from "../../../assets/Location.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const GetInTouch = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const modifiedDataHeader = Data.ContactUs_GetInTouch__Heading_Paragraph.map(
    (data) => {
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
    }
  );

  const modifiedDataContent = Data.ContactUs_GetInTouch_Data.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
        Paragraph: data.Paragraph_ar,
        CallUs_Title: data.CallUs_Title_ar,
        CallUs_paragraph: data.CallUs_paragraph_ar,
        CallUs: data.CallUs,
        VisitUs_Title: data.VisitUs_Title_ar,
        VisitUs_paragraph: data.VisitUs_paragraph_ar,
        VisitUs: data.VisitUs,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
        Paragraph: data.Paragraph_fr,
        CallUs_Title: data.CallUs_Title_fr,
        CallUs_paragraph: data.CallUs_paragraph_fr,
        CallUs: data.CallUs,
        VisitUs_Title: data.VisitUs_Title_fr,
        VisitUs_paragraph: data.VisitUs_paragraph_fr,
        VisitUs: data.VisitUs,
      };
    }
    return data;
  });

  const HeadingsAndParagraphs = modifiedDataHeader.map(
    ({ id, header, description }) => {
      return (
        <div key={id}>
          <div>
            <div>
              <h1 className="relative mb-2 lg:mb-0 before:absolute before:hidden rtl:lg:pr-20 ltr:lg:pl-20 before:md:block before:h-2 before:w-16 before:rtl:left-[93%] before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                {header}{" "}
              </h1>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const modifiedDataPlaceholder = Data.Form_Placeholder.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Name: data.Name_ar,
        Email: data.Email_ar,
        Message: data.Message_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        d: data.id,
        Name: data.Name_fr,
        Email: data.Email_fr,
        Message: data.Message_fr,
      };
    }
    return data;
  });

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

  const modifiedDataButton = Data.GetInTouch_Button.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Button: data.Button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Button: data.Button_fr,
      };
    }
    return data;
  });

  const Button = modifiedDataButton.map(({ Button, id }) => {
    return (
      <div key={id}>
        <button className="w-full mt-4 buttonCust">{Button}</button>
      </div>
    );
  });

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
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
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
            {modifiedDataContent.map(
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
                          action="https://formsubmit.co/2152ba7aded3a92b403693cf179cf3bd"
                          method="POST"
                        >
                          <input
                            type="text"
                            placeholder={modifiedDataPlaceholder.map(
                              (el) => el.Name
                            )}
                            className={inputStyles}
                            {...register("name", {
                              required: true,
                              minLength: 3,
                              maxLength: 100,
                            })}
                          />
                          {errors.name && (
                            <p className="mt-1 text-mainColor">
                              {errors.name.type === "required" &&
                                `${t("required")}`}
                              {errors.name.type === "maxLength" &&
                                `${t("maxLengthOne")}`}
                              {errors.name &&
                                errors.name.type === "minLength" &&
                                `${t("minLengthOne")}`}
                            </p>
                          )}
                          <input
                            type="text"
                            placeholder={modifiedDataPlaceholder.map(
                              (el) => el.Email
                            )}
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
                                `${t("required")}`}
                              {errors.email.type === "pattern" &&
                                `${t("email")}`}
                            </p>
                          )}
                          <textarea
                            placeholder={modifiedDataPlaceholder.map(
                              (el) => el.Message
                            )}
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
                                `${t("required")}`}
                            </p>
                          )}
                          {Button}
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
                                <span className="text-sm ltr:mr-2 rtl:ml-2 md:text-xl text-secondColor">
                                  &#x25CF;
                                </span>
                                {CallUs_Title}
                              </h6>
                            </div>
                            <div className="my-4">
                              <p>{CallUs_paragraph}</p>
                            </div>
                            <div className="flex items-center initialDirection">
                              <div>
                                <a
                                  href="tel:+213550510061"
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
                              <span className="text-sm ltr:mr-2 rtl:ml-2 md:text-xl text-secondColor">
                                &#x25CF;
                              </span>
                              {VisitUs_Title}
                            </h6>
                          </div>
                          <div className="my-4">
                            <p>{VisitUs_paragraph}</p>
                          </div>
                          <div className="flex items-center initialDirection">
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
