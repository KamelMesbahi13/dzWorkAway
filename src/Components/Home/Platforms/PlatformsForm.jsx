import { useState } from "react";
import { useForm } from "react-hook-form";
import Data from "../../../data.json";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loader from "../../../Ui/Loader/Loader";
import Success from "../../../Ui/Success/Success";
import Failed from "../../../Ui/Failed/Failed";

const PlatformsForm = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

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

  const modifiedDataButton = Data.ServicesForm_Button.map((data) => {
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
        <div className="mt-4 textCenter">
          <button className="buttonCust">{Button}</button>
        </div>
      </div>
    );
  });

  const inputStyle = `p-2 mt-1 border-b-2 outline-none border-mainColor`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }

    if (isValid) {
      const formData = new FormData(e.target);
      try {
        setLoading(true);
        await axios.post(
          "https://script.google.com/macros/s/AKfycby1TB6CIB3sCfT5sr-0iHKlvgaNUwkhmS_L6STsR90cziVnos4Sxhen_NAbEXYhW8Q/exec",
          formData
        );
        await axios.post("https://api.dzworkaway.com/api/clients", formData);
        setSuccess(true);
        location.reload();
      } catch (error) {
        setLoading(false);
        setFailed(true);
      }
    }
  };

  return (
    <>
      <div className="relative">
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
                    action="#"
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
                                minLength: 3,
                                maxLength: 30,
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
                          </div>
                          <div>
                            {LastName} <br />
                            <input
                              className={`${inputStyle} w-full`}
                              type="text"
                              name="lastName"
                              {...register("lastName", {
                                required: true,
                                minLength: 3,
                                maxLength: 30,
                              })}
                            />
                            {errors.lastName && (
                              <p className="mt-1 text-mainColor">
                                {errors.lastName.type === "required" &&
                                  `${t("required")}`}
                                {errors.lastName.type === "maxLength" &&
                                  `${t("maxLengthOne")}`}
                                {errors.lastName &&
                                  errors.lastName.type === "minLength" &&
                                  `${t("minLengthOne")}`}
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
                              minLength: 7,
                              maxLength: 15,
                            })}
                          />
                          {errors.PhoneNumber && (
                            <p className="mt-1 text-mainColor">
                              {errors.PhoneNumber.type === "required" &&
                                `${t("required")}`}
                              {errors.PhoneNumber.type === "minLength" &&
                                `${t("minLengthTwo")}`}
                              {errors.PhoneNumber.type === "maxLength" &&
                                `${t("maxLengthTwo")}`}
                              {errors.PhoneNumber.type === "pattern" &&
                                `${t("phone_number")}`}
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
                              minLength: 5,
                              maxLength: 100,
                            })}
                          />
                          {errors.Address && (
                            <p className="mt-1 text-mainColor">
                              {errors.Address.type === "required" &&
                                `${t("required")}`}
                              {errors.Address.type === "maxLength" &&
                                `${t("maxLengthThree")}`}

                              {errors.Address &&
                                errors.Address.type === "minLength" &&
                                `${t("minLengthThree")}`}
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
                              maxLength: 30,
                            })}
                          />
                          {errors.City && (
                            <p className="mt-1 text-mainColor">
                              {errors.City.type === "required" &&
                                `${t("required")}`}
                              {errors.City.type === "maxLength" &&
                                `${t("maxLengthOne")}`}
                              {errors.City &&
                                errors.City.type === "minLength" &&
                                `${t("minLengthOne")}`}
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
                              minLength: 5,
                              maxLength: 5,
                            })}
                          />
                          {errors.Zip && (
                            <p className="mt-1 text-mainColor">
                              {errors.Zip.type === "required" &&
                                `${t("required")}`}
                              {errors.Zip.type === "minLength" &&
                                `${t("minLengthFour")}`}
                              {errors.Zip.type === "maxLength" &&
                                `${t("maxLengthFour")}`}
                              {errors.Zip.type === "pattern" && `${t("Zip")}`}
                            </p>
                          )}
                        </div>

                        <div className="mt-6">
                          {Cv} <br />
                          <input
                            className={`${inputStyle} w-full`}
                            type="file"
                            accept="application/pdf"
                            name="Cv"
                            {...register("Cv", {
                              required: true,
                            })}
                          />
                          {errors.Cv && (
                            <p className="mt-1 text-mainColor">
                              {errors.Cv.type === "required" &&
                                `${t("required")}`}
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
                      {Button}
                    </div>
                    <div className="mt-4 textCenter">
                      {loading && <Loader className="py-16" />}
                    </div>
                    <div className="textCenter">
                      <div>{success && <Success className="py-16" />}</div>
                      <div>{failed && <Failed className="py-16" />}</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformsForm;
