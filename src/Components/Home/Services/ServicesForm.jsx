import { useForm } from "react-hook-form";
import Data from "../../../data.json";
import { useTranslation } from "react-i18next";

const ServicesForm = () => {
  const { i18n } = useTranslation();

  const modifiedHeader = Data.ServicesForm_Heading.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Paragraph: data.Paragraph_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Paragraph: data.Paragraph_fr,
      };
    }
    return data;
  });

  const Heading = modifiedHeader.map(({ id, Paragraph }) => {
    return (
      <div key={id}>
        <div>
          <h6>{Paragraph}</h6>
        </div>
      </div>
    );
  });

  // ----------------------------------------------------------

  const modifiedName = Data.Form_Name.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const Name = modifiedName.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="firstName">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedLastName = Data.Form_LastName.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const LastName = modifiedLastName.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="lastName">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedEmail = Data.Form_Email.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const Email = modifiedEmail.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="Email">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedPhoneNumber = Data.Form_Phone_Number.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const PhoneNumber = modifiedPhoneNumber.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="PhoneNumber">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedAddress = Data.Form_Address.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const Address = modifiedAddress.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="Address">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedCity = Data.Form_City.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const City = modifiedCity.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="City">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedZip = Data.Form_Zip.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const Zip = modifiedZip.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="Zip">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedCv = Data.Form_Cv.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const Cv = modifiedCv.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="Cv">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedDegree = Data.Form_Degree.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const Degree = modifiedDegree.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="Degree">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedPassport = Data.Form_Passport.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const Passport = modifiedPassport.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="Degree">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const modifiedMessage = Data.Form_Message.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
      };
    }
    return data;
  });

  const Message = modifiedMessage.map(({ id, Title }) => {
    return (
      <label key={id} htmlFor="Message">
        {Title}
      </label>
    );
  });

  // ----------------------------------------------------------

  const inputStyle = `p-2 mt-1 border-b-2 outline-none border-mainColor`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
      const isSuccess = true;
      if (isSuccess) {
        alert("Form submitted successfully!");
        window.location.reload();
      } else {
        alert("Form submission failed. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="mt-12 md:mt-20">
        <div className="p-4 border-2 md:px-20 md:py-12 border-grey">
          <div>
            <div>
              <div className="mb-12 md:mb-36 textCenter">
                <div>{Heading}</div>
              </div>
              <div>
                <form
                  target="_blank"
                  onSubmit={onSubmit}
                  action="https://script.google.com/macros/s/AKfycbxbI570PN0fuJ_S0gyH3ALZgnpThLZbVuzKXsc3NOcbv6vFfRYyieH5R5_-HV0bLQN4/exec"
                  method="POST"
                >
                  <div>
                    <div>
                      <div className="flex flex-col justify-between md:flex-row">
                        <div>
                          {Name} <br />
                          <input
                            className={`${inputStyle} mb-6 md:mb-0 w-full`}
                            type="text"
                            name="name"
                            {...register("name", {
                              required: true,
                              minLength: 5,
                              maxLength: 30,
                            })}
                          />
                          {errors.name && (
                            <p className="mt-1 text-mainColor">
                              {errors.name.type === "required" &&
                                "This field is require"}
                              {errors.name.type === "maxLength" &&
                                "Max Length is 30 character"}
                              {errors.name &&
                                errors.name.type === "minLength" &&
                                "Name should be more than 5 characters"}
                            </p>
                          )}
                        </div>
                        <div>
                          {LastName} <br />
                          <input
                            className={`${inputStyle} w-full`}
                            type="text"
                            name="lastName"
                            {...register("lastName", {
                              required: true,
                              minLength: 5,
                              maxLength: 30,
                            })}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-mainColor">
                              {errors.lastName.type === "required" &&
                                "This field is require"}
                              {errors.lastName.type === "maxLength" &&
                                "Max Length is 30 character"}
                              {errors.lastName &&
                                errors.lastName.type === "minLength" &&
                                "Name should be more than 5 characters"}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mt-6">
                        {Email} <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="email"
                          name="email"
                          {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                      </div>

                      <div className="mt-6">
                        {PhoneNumber} <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="text"
                          name="PhoneNumber"
                          {...register("PhoneNumber", {
                            required: true,
                            pattern: /^[0-9]+$/,
                            minLength: 5,
                            maxLength: 100,
                          })}
                        />
                        {errors.PhoneNumber && (
                          <p className="mt-1 text-mainColor">
                            {errors.PhoneNumber.type === "required" &&
                              "This field is required"}
                            {errors.PhoneNumber.type === "minLength" &&
                              "Phone number should be more than 5 characters"}
                            {errors.PhoneNumber.type === "maxLength" &&
                              "Max length is 100 characters"}
                            {errors.PhoneNumber.type === "pattern" &&
                              "Please enter a valid phone number"}
                          </p>
                        )}
                      </div>

                      <div className="mt-6">
                        {Address} <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="text"
                          name="address"
                          {...register("Address", {
                            required: true,
                            minLength: 3,
                            maxLength: 100,
                          })}
                        />
                        {errors.Address && (
                          <p className="mt-1 text-mainColor">
                            {errors.Address.type === "required" &&
                              "This field is require"}
                            {errors.Address.type === "maxLength" &&
                              "Max Length is 100 character"}
                            {errors.Address &&
                              errors.Address.type === "minLength" &&
                              "Name should be more than 3 characters"}
                          </p>
                        )}{" "}
                      </div>

                      <div className="mt-6">
                        {City} <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="text"
                          name="city"
                          {...register("City", {
                            required: true,
                            minLength: 5,
                            maxLength: 50,
                          })}
                        />
                        {errors.City && (
                          <p className="mt-1 text-mainColor">
                            {errors.City.type === "required" &&
                              "This field is require"}
                            {errors.City.type === "maxLength" &&
                              "Max Length is 50 character"}
                            {errors.City &&
                              errors.City.type === "minLength" &&
                              "Name should be more than 5 characters"}
                          </p>
                        )}
                      </div>

                      <div className="mt-6">
                        {Zip} <br />
                        <input
                          type="number"
                          name="zip"
                          className={`${inputStyle} w-full`}
                          {...register("Zip", {
                            required: true,
                            pattern: /^[0-9]+$/,
                            minLength: 2,
                            maxLength: 20,
                          })}
                        />
                        {errors.Zip && (
                          <p className="mt-1 text-mainColor">
                            {errors.Zip.type === "required" &&
                              "This field is required"}
                            {errors.Zip.type === "minLength" &&
                              "Phone number should be more than 2 characters"}
                            {errors.Zip.type === "maxLength" &&
                              "Max length is 20 characters"}
                            {errors.Zip.type === "pattern" &&
                              "Please enter a valid phone number"}
                          </p>
                        )}
                      </div>

                      <div className="mt-6">
                        {Cv} <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="file"
                          name="Cv"
                          {...register("Cv", {
                            required: true,
                          })}
                        />
                        {errors.Cv && (
                          <p className="mt-1 text-mainColor">
                            {errors.Cv.type === "required" &&
                              "This field is require"}
                          </p>
                        )}
                      </div>

                      <div className="mt-6">
                        {Degree} <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="file"
                          name="Degree"
                          {...register("Degree", {
                            required: true,
                          })}
                        />
                        {errors.Degree && (
                          <p className="mt-1 text-mainColor">
                            {errors.Degree.type === "required" &&
                              "This field is require"}
                          </p>
                        )}
                      </div>

                      <div className="mt-6">
                        {Passport} <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="file"
                          name="Passport"
                          {...register("Passport", {
                            required: true,
                          })}
                        />
                        {errors.Passport && (
                          <p className="mt-1 text-mainColor">
                            {errors.Passport.type === "required" &&
                              "This field is require"}
                          </p>
                        )}
                      </div>

                      <div className="mt-6">
                        {Message} <br />
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          className="w-full p-4 mt-2 border-2 outline-none border-mainColor"
                        />
                      </div>
                    </div>
                    <div className="mt-4 textCenter">
                      <button className="buttonCust">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesForm;
