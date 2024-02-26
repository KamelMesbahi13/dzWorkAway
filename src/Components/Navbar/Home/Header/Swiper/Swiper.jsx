import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import ImgOne from "../../../../../assets/HomePageOne.jpg";
import ImgTwo from "../../../../../assets/HomePageTwo.jpg";
import ImgThree from "../../../../../assets/HomePageThree.jpg";
import Check from "../../../../../assets/check.png";

import "swiper/css";
import "./Swiper.css";

const HeaderData = [
  {
    id: 1,
    heading_fr: "Immigration visa Consulting",
    heading_eng: "Immigration visa Consulting",
    heading_ar: "Immigration visa Consulting",

    paragraph_fr: "Expert Guidance for a Seamless Immigration Journey",
    paragraph_eng: "Expert Guidance for a Seamless Immigration Journey",
    paragraph_ar: "Expert Guidance for a Seamless Immigration Journey",

    paragraph_one_check_fr: "Expert Legal Support",
    paragraph_one_check_eng: "Meeting Your Unique Needs",
    paragraph_one_check_ar: "Tailored Immigration Solutions",

    paragraph_two_check_fr: "Expert Legal Support",
    paragraph_two_check_eng: "Meeting Your Unique Needs",
    paragraph_two_check_ar: "Tailored Immigration Solutions",

    paragraph_three_check_fr: "Expert Legal Support",
    paragraph_three_check_eng: "Meeting Your Unique Needs",
    paragraph_three_check_ar: "Tailored Immigration Solutions",
  },
];

export default function App() {
  return (
    <>
      <div className=" h-[60vh] sm:h-[100vh] w-full">
        <Swiper
          name="header"
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Data.map(({ img, alt, description, heading }, i) => {
            return (
              <SwiperSlide key={i} className="relative">
                <img
                  className="h-[60vh] sm:h-[80vh] lg:h-[100vh]"
                  src={img}
                  alt={alt}
                />
                <div className="absolute px-12 top-1/3 sm:top-1/2">
                  <h6>{heading}</h6>
                  <h1>{description}</h1>
                  <a href="#">
                    <button className="mt-4 border-none bg-second-color text-main-color hover:bg-main-color hover:text-second-color">
                      Buy Now
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
