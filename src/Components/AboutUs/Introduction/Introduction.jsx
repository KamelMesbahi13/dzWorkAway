import Img from "../../../assets/AboutUsImg.jpg";

const Introduction = () => {
  return (
    <>
      <div className="mt-8">
        <div>
          <div className="flex-col justify-between md:flex-row md:flex">
            <div className="w-full md:w-[45%]">
              <h1 className="relative md:headingStyleMd lg:headingStyleLg">
                Welcome To <span className="italic">Dz Work Away</span>
              </h1>
              <p className="mt-4">
                Welcome to our immigration agency! We are passionate about
                helping individuals and families achieve their dreams of living
                and working in Canada and other countries.
              </p>
            </div>
            <div className="block w-1/2 h-1 mx-auto my-8 bg-secondColor md:hidden"></div>
            <div className="w-full md:w-[45%]">
              <p>
                At <span className="italic font-bold">Dz Work Away</span>, we
                are dedicated to helping individuals and families achieve their
                dreams of living and working in Canada and beyond. With our
                expert team and personalized approach, we are here to guide you
                every step of the way. From consultations to applications, trust
                us to make your immigration journey smooth and successful.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <img src={Img} alt="About Us Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
