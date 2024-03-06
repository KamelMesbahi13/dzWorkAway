const PlatformsForm = () => {
  const inputStyle = `p-2 mt-1 border-b-2 outline-none border-mainColor`;

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
                <form action="submit">
                  <div>
                    <div>
                      <div className="flex flex-col justify-between md:flex-row">
                        <div>
                          <label htmlFor="firstName">First Name</label> <br />
                          <input
                            className={`${inputStyle} mb-6 md:mb-0 w-full`}
                            type="text"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName">Last Name</label> <br />
                          <input
                            className={`${inputStyle} w-full`}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <label htmlFor="Email">Email</label> <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="email"
                        />
                      </div>

                      <div className="mt-6">
                        <label htmlFor="PhoneNumber">Phone Number</label> <br />
                        <input className={`${inputStyle} w-full`} type="tel" />
                      </div>

                      <div className="mt-6">
                        <label htmlFor="Address">Address</label> <br />
                        <input className={`${inputStyle} w-full`} type="text" />
                      </div>

                      <div className="mt-6">
                        <label htmlFor="City">City</label> <br />
                        <input className={`${inputStyle} w-full`} type="text" />
                      </div>

                      <div className="mt-6">
                        <label htmlFor="Zip">Zip / Postal Code</label> <br />
                        <input
                          className={`${inputStyle} w-full`}
                          type="number"
                        />
                      </div>

                      <div className="mt-6">
                        <label htmlFor="Cv">Your Cv</label> <br />
                        <input className={`${inputStyle} w-full`} type="file" />
                      </div>

                      <div className="mt-6">
                        <label htmlFor="Message">Message</label> <br />
                        <textarea
                          name="Message"
                          id="Message"
                          cols="30"
                          rows="10"
                          className="w-full p-4 mt-2 border-2 outline-none border-mainColor"
                        ></textarea>
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
