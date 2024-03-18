import Data from "../../../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "./Swiper.css";
import ImgOne from "../../../../assets/HomePageOne.webp";
import ImgThree from "../../../../assets/HomePageThree.webp";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    heading: "Your Immigration Partner",
    heading_ar: "شريكك في الهجرة",
    heading_fr: "Votre Partenaire en Immigration",
    paragraph:
      "We help you navigate the immigration process for work, family, or training abroad with expert guidance. Our personalized approach ensures confidence in achieving your goals. Contact us now to start your journey toward a new life.",
    paragraph_fr:
      "Nous vous aidons à naviguer dans le processus d'immigration pour le travail, la famille ou la formation à l'étranger grâce à des conseils d'experts. Notre approche personnalisée vous permet d'atteindre vos objectifs en toute confiance. Contactez-nous dès maintenant pour commencer votre voyage vers une nouvelle vie.",
    paragraph_ar:
      "نحن نساعدك على الإبحار في عملية الهجرة للعمل أو الأسرة أو التدريب في الخارج مع إرشادات الخبراء. يضمن لك نهجنا الشخصي الثقة في تحقيق أهدافك. اتصل بنا الآن لبدء رحلتك نحو حياة جديدة.",
    Img: ImgOne,
    alt: "Background One",
  },
  {
    id: 2,
    heading: "Your Immigration Partner",
    heading_fr: "Votre Partenaire en Immigration",
    heading_ar: "شريكك في الهجرة",
    paragraph:
      "We help you navigate the immigration process for work, family, or training abroad with expert guidance. Our personalized approach ensures confidence in achieving your goals. Contact us now to start your journey toward a new life.",
    paragraph_fr:
      "Nous vous aidons à naviguer dans le processus d'immigration pour le travail, la famille ou la formation à l'étranger grâce à des conseils d'experts. Notre approche personnalisée vous permet d'atteindre vos objectifs en toute confiance. Contactez-nous dès maintenant pour commencer votre voyage vers une nouvelle vie.",
    paragraph_ar:
      "نحن نساعدك على الإبحار في عملية الهجرة للعمل أو الأسرة أو التدريب في الخارج مع إرشادات الخبراء. يضمن لك نهجنا الشخصي الثقة في تحقيق أهدافك. اتصل بنا الآن لبدء رحلتك نحو حياة جديدة.",
    Img: ImgThree,
    alt: "Background Three",
  },
];

export default function App() {
  const { i18n } = useTranslation();

  const modifiedData = data.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        heading: data.heading_ar,
        paragraph: data.paragraph_ar,
        Img: data.Img,
        alt: data.alt,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        heading: data.heading_fr,
        paragraph: data.paragraph_fr,
        Img: data.Img,
        alt: data.alt,
      };
    }
    return data;
  });

  const modifiedButton = Data.Home_Header_Button.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        button_one: data.button_one_ar,
        button_two: data.button_two_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        button_one: data.button_one_fr,
        button_two: data.button_two_fr,
      };
    }
    return data;
  });

  const Buttons = modifiedButton.map(({ id, button_one, button_two }) => {
    return (
      <div key={id}>
        <div>
          <div>
            <div className="flex mt-4">
              <a rel="noreferrer" target="_blank" href="/À Propos-de-Nous">
                <button className="ltr:mr-8 simpleButton">{button_one}</button>
              </a>
              <a target="_blank" rel="noreferrer" href="/Nos-Services">
                <button className="simpleButton rtl:mr-8">{button_two}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ltr:h-[25rem] rtl:h-[20rem] md:ltr:h-[30rem] md:rtl:h-[30rem] w-full">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          direction="vertical"
          modules={[Autoplay]}
          className="mySwiper"
        >
          {modifiedData.map(({ id, heading, paragraph, Img, alt }) => {
            return (
              <SwiperSlide key={id} className="relative text-white">
                <LazyLoadImage
                  className="h-[25rem] md:h-[30rem] w-full"
                  src={Img}
                  alt={alt}
                />
                <div className="absolute w-full md:w-1/2 p-8 lg:px-24 top-[0%] sm:top-[10%]">
                  <div>
                    <h1 className="mb-4 md:text-5xl">{heading}</h1>
                    <p>{paragraph}</p>
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
