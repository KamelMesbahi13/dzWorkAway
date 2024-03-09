import { useForm } from "react-hook-form";
import Data from "../../../data.json";

const Heading = Data.ServicesForm_Heading.map(({ id, Paragraph }) => {
  return (
    <div key={id}>
      <div>
        <p>{Paragraph}</p>
      </div>
    </div>
  );
});

const Name = Data.Form_Name.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="firstName">
      {Title}
    </label>
  );
});

const LastName = Data.Form_LastName.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="lastName">
      {Title}
    </label>
  );
});

const Email = Data.Form_Email.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="Email">
      {Title}
    </label>
  );
});

const PhoneNumber = Data.Form_Phone_Number.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="PhoneNumber">
      {Title}
    </label>
  );
});

const Address = Data.Form_Address.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="Address">
      {Title}
    </label>
  );
});

const City = Data.Form_City.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="City">
      {Title}
    </label>
  );
});

const Zip = Data.Form_Zip.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="Zip">
      {Title}
    </label>
  );
});

const Cv = Data.Form_Cv.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="Cv">
      {Title}
    </label>
  );
});

const Message = Data.Form_Message.map(({ id, Title }) => {
  return (
    <label key={id} htmlFor="Message">
      {Title}
    </label>
  );
});

const ServicesForm = () => {
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
    }
  };

  return (
    <>
      <div className="mt-12 md:mt-20">
        <div className="p-4 border-2 md:px-20 md:py-12 border-grey">
          <div>
            <div>
              <div className="mb-12 md:mb-36 textCenter">
                <h6>{Heading}</h6>
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
                          required
                          className={`${inputStyle} w-full`}
                          type="file"
                        />
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
