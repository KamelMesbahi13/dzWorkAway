import { LazyLoadImage } from "react-lazy-load-image-component";
import { useForm } from "react-hook-form";
import CallUsImage from "../../../assets/Phone.png";
import VisitUsImage from "../../../assets/Location.png";

const data = [
  {
    id: 1,
    Title: "Contact Our Team ",
    Paragraph:
      "Reach out to our team for prompt assistance and dedicated support.",
    CallUs_Title: "Call us",
    CallUs_paragraph:
      "Contact us for personalized support. Call now to speak to our dedicated team.",
    CallUs: "055555555",

    VisitUs_Title: "Visit us",
    VisitUs_paragraph:
      "Come visit us! Our doors are open to you for any questions or advice. Looking forward to meeting you.",
    VisitUs: "Numéro 1, Résidence Zidan, Bloc 1, Boumerdès 35000",
  },
];

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
          <div className="mt-8 mb-10 md:mt-12 md:mb-20 md:w-3/4">
            <div>
              <h1 className="relative mb-2 headingStyleLg">
                If You Have Any Question Drop A Message Or Visit Us
              </h1>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis ipsa excepturi est mollitia voluptatem nihil illum?
                Eaque laudantium natus laboriosam doloremque officiis
                necessitatibus tempora incidunt eum consequatur animi? Ut,
                quasi.
              </p>
            </div>
          </div>
          <div className="py-6 border-2 shadow-xl md:px-8 md:py-12 md:border-4 md:pt-0 border-grey">
            {data.map(
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
              }) => {
                return (
                  <div key={id}>
                    <div className="flex flex-col md:items-center md:justify-between md:flex-row">
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
                          action=""
                          method="POST"
                        >
                          <input
                            type="text"
                            placeholder="Nom"
                            className={inputStyles}
                            {...register("name", {
                              required: true,
                              maxLength: 100,
                            })}
                          />
                          {errors.name && (
                            <p className="mt-1 text-primary-500">
                              {errors.name.type === "required" &&
                                "This field is require"}
                              {errors.name.type === "maxLength" &&
                                "Max Length is 100 character"}
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
                            <p className="mt-1 text-primary-500">
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
                              maxLength: 2000,
                            })}
                          />
                          {errors.message && (
                            <p className="mt-1 text-primary-500">
                              {errors.message.type === "required" &&
                                "This field is require"}
                              {errors.message.type === "maxLength" &&
                                "Max length is 2000 char"}
                            </p>
                          )}
                          <div>
                            <button className="w-full mt-4 buttonCust">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="w-full md:w-[40%] p-8">
                        <div>
                          <div>
                            <div>
                              <h6>
                                <span className="mr-2 text-xl text-secondColor">
                                  &#x25CF;
                                </span>
                                {CallUs_Title}
                              </h6>
                            </div>
                            <div className="my-4">
                              <p>{CallUs_paragraph}</p>
                            </div>
                            <div className="flex items-center">
                              <div className="mr-2">
                                <a href="tel:+2135555555" className="flex">
                                  <LazyLoadImage
                                    className="w-7 h-7"
                                    src={CallUsImage}
                                    alt={CallUs_Title}
                                  />
                                  <p className="ml-4">{CallUs}</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-1 my-12 bg-secondColor"></div>
                        <div className="">
                          <div>
                            <h6>
                              <span className="mr-2 text-xl text-secondColor">
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
                                className="w-7 h-7"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
