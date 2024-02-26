import { Swiper, SwiperSlide } from "swiper/react";
import ImgOne from "../../../../../assets/HomePageOne.jpg";
import ImgTwo from "../../../../../assets/HomePageTwo.jpg";
import ImgThree from "../../../../../assets/HomePageThree.jpg";
import Check from "../../../../../assets/check.png";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Swiper.css";

const Data = [
  {
    id: 1,
    Img: ImgOne,
    alt: "Background One",
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

  {
    id: 2,
    Img: ImgTwo,
    alt: "Background Two",
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

  {
    id: 3,
    Img: ImgThree,
    alt: "Background Three",
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
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Data.map(
            (
              {
                Img,
                alt,
                heading_eng,
                paragraph_eng,
                paragraph_one_check_eng,
                paragraph_two_check_eng,
                paragraph_three_check_eng,
              },
              i
            ) => {
              return (
                <SwiperSlide key={i} className="relative text-white">
                  <img
                    className="h-[60vh] sm:h-[80vh] lg:h-[100vh]"
                    src={Img}
                    alt={alt}
                  />
                  <div className="absolute w-full md:w-1/2 p-8 lg:px-24 top-[15%] sm:top-[20%]">
                    <div>
                      <h1 className="mb-4">{heading_eng}</h1>
                      <h6>{paragraph_eng}</h6>
                    </div>
                    <div>
                      <div className="mt-4">
                        <div className="flex">
                          <img
                            className="!w-6 h-6 mr-2"
                            src={Check}
                            alt="Check"
                          />
                          <p>{paragraph_one_check_eng}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex my-4">
                          <img
                            className="!w-6 h-6 mr-2"
                            src={Check}
                            alt="Check"
                          />
                          <p>{paragraph_two_check_eng}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex">
                          <img
                            className="!w-6 h-6 mr-2"
                            src={Check}
                            alt="Check"
                          />
                          <p>{paragraph_three_check_eng}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-4">
                      <button className="mr-8 simpleButton">
                        Book Appointment
                      </button>
                      <button className="simpleButton">
                        Check Our Services
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </>
  );
}
