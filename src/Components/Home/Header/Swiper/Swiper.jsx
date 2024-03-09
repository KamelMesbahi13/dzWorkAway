import Data from "../../../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "./Swiper.css";
import ImgOne from "../../../../assets/HomePageOne.webp";
// import ImgTwo from "../../../../assets/HomePageTwo.webp";
// import ImgThree from "../../../../assets/HomePageThree.webp";
import Check from "../../../../assets/check.png";
// import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    heading: "Immigration visa Consulting",
    heading_ar: "This Text Is On Arabic",
    paragraph_ar: "This Paragraph Is On Arabic",

    paragraph: "Expert Guidance for a Seamless Immigration Journey",
    paragraph_check: "Meeting Your Unique Needs",
    paragraph_check_ar: "This Check Paragraph is on arabic",

    Img: ImgOne,
    alt: "Background One",
  },

  {
    id: 2,
    heading: "Immigration visa Consulting",
    paragraph: "Expert Guidance for a Seamless Immigration Journey",
    paragraph_check: "Meeting Your Unique Needs",

    // Img: ImgTwo,
    // alt: "Background Two",
  },

  {
    id: 3,
    heading: "Immigration visa Consulting",
    paragraph: "Expert Guidance for a Seamless Immigration Journey",
    paragraph_check: "Meeting Your Unique Needs",

    // Img: ImgThree,
    // alt: "Background Three",
  },
];

const Paragraphs = Data.Home_Header_Swipper.map(({ id, paragraph_check }) => {
  return (
    <div key={id}>
      <div>
        <div>
          <div className="flex">
            <LazyLoadImage className="!w-6 h-6 mr-2" src={Check} alt="Check" />
            <p>{paragraph_check}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

const Buttons = Data.Home_Header_Button.map(
  ({ id, button_one, button_two }) => {
    return (
      <div key={id}>
        <div>
          <div>
            <div className="flex mt-4">
              <a target="_blank" href="/À Propos-de-Nous">
                <button className="mr-8 simpleButton">{button_one}</button>
              </a>
              <a target="_blank" href="/Nos-Services">
                <button className="simpleButton">{button_two}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default function App() {
  // const { i18n } = useTranslation();

  // const data = Data.Home_Header_Swipper.map((data) => {
  //   if (i18n.language == "ar") {
  //     return {
  //       id: data.id,
  //       heading: data.heading_ar,
  //       paragraph: data.paragraph_ar,
  //       paragraph_check: data.paragraph_check_ar,
  //     };
  //   }

  // if (i18n.language == 'fr') {
  //   return {
  //     id: teacher.id,
  //     image: teacher.image,
  //     job: teacher.job_fr,
  //     name: teacher.name_fr,
  //     introduction: teacher.introduction_fr,
  //   };
  // }

  // return data;
  // });

  return (
    <>
      <div className=" h-[75vh] md:h-[100vh] w-full">
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map(({ id, heading, paragraph, Img, alt }) => {
            return (
              <SwiperSlide key={id} className="relative text-white">
                <LazyLoadImage
                  className="h-[75vh] w-full md:h-[100vh]"
                  src={Img}
                  alt={alt}
                />
                <div className="absolute w-full md:w-1/2 p-8 lg:px-24 top-[15%] sm:top-[20%]">
                  <div>
                    <h1 className="mb-4 md:text-5xl">{heading}</h1>
                    <h6>{paragraph}</h6>
                  </div>
                  <div>
                    <div className="mt-4">{Paragraphs}</div>
                  </div>
                  <div>{Buttons}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
