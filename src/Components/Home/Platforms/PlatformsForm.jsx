import { useForm } from "react-hook-form";

const PlatformsForm = () => {
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
                <h6>Please fill out the form below with your information</h6>
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
                          <label htmlFor="firstName">First Name</label> <br />
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
                          <label htmlFor="lastName">Last Name</label> <br />
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
                        <label htmlFor="Email">Email</label> <br />
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
                        <label htmlFor="PhoneNumber">Phone Number</label> <br />
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
                        <label htmlFor="Address">Address</label> <br />
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
                        <label htmlFor="City">City</label> <br />
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
                        <label htmlFor="Zip">Zip / Postal Code</label> <br />
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
                        <label htmlFor="Cv">Your Cv</label> <br />
                        <input
                          required
                          className={`${inputStyle} w-full`}
                          type="file"
                        />
                      </div>

                      <div className="mt-6">
                        <label htmlFor="Message">Message</label> <br />
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

export default PlatformsForm;
