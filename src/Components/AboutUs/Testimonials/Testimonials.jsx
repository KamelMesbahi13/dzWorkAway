import Swiper from "./Swiper/Swiper";

const Testimonials = () => {
  return (
    <div className="mt-12 md:mt-28">
      <div>
        <div>
          <div className="w-full md:w-3/4">
            <div>
              <h1 className="relative lg:headingStyleLg">
                What Our Clients Said About US
              </h1>
            </div>
            <div>
              <p>
                Thanks to <span className="italic font-bold">Dz Work Away</span>
                my immigration process was smooth and stress-free. Their
                personalized support and expertise made all the difference.
                Highly recommend!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Swiper />
    </div>
  );
};

export default Testimonials;
