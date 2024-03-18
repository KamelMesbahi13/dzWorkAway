import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "./Swiper.css";
import ImgWoman from "../../../../assets/TestimonialOne.png";
import ImgMan from "../../../../assets/TestimonialTwo.png";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Data = [
  {
    id: 1,
    Img: ImgMan,
    Testi:
      "DZWorkaway made my immigration journey smooth and hassle-free. Their attention to detail and personalized assistance were commendable. I'm grateful for their support in helping me secure my visa and embark on a new chapter in my life. Thank you, DZWorkaway",
    Testi_ar:
      "جعلت DZWorkaway رحلتي للهجرة سلسة وخالية من المتاعب. كان اهتمامهم بالتفاصيل ومساعدتهم الشخصية جديرة بالثناء. أنا ممتن لدعمهم في مساعدتي في الحصول على تأشيرتي والبدء في فصل جديد من حياتي. شكراً لك، DZWorkaway!",
    Testi_fr:
      "DZWorkaway a fait en sorte que mon voyage d'immigration se déroule en douceur et sans tracas. Leur attention aux détails et leur assistance personnalisée sont louables. Je leur suis reconnaissant de m'avoir aidé à obtenir mon visa et à entamer un nouveau chapitre de ma vie. Merci, DZWorkaway !",
    Name: "Sofiane Benmoussa",
    Name_ar: " سفيان بن موسى",
    Name_fr: "JSofiane Benmoussa",
  },

  {
    id: 2,
    Img: ImgWoman,
    Testi:
      "I had a wonderful experience with DZWorkaway. Their team was extremely helpful and guided me through every step of my immigration process. Thanks to their expertise, I now have a new beginning in a country I've always dreamt of. I highly recommend DZWorkaway for their professionalism and dedication.",
    Testi_ar:
      "الشهادة: لقد حظيت بتجربة رائعة مع DZWorkaway. كان فريقهم متعاوناً للغاية وأرشدني في كل خطوة من خطوات عملية الهجرة الخاصة بي. بفضل خبرتهم، لدي الآن بداية جديدة في بلد لطالما حلمت به. أنا أوصي بشدة بـ DZWorkaway لمهنيتهم وتفانيهم.",
    Testi_fr:
      "J'ai eu une expérience formidable avec DZWorkaway. Leur équipe a été extrêmement utile et m'a guidée à travers chaque étape de mon processus d'immigration. Grâce à leur expertise, j'ai maintenant un nouveau départ dans un pays dont j'ai toujours rêvé. Je recommande vivement DZWorkaway pour son professionnalisme et son dévouement",
    Name: "Nadia Belkacem",
    Name_ar: "نادية بلقاسم",
    Name_fr: "Nadia Belkacem",
  },

  {
    id: 3,
    Img: ImgMan,
    Testi:
      "DZWorkaway exceeded my expectations with their professionalism and efficiency. They provided me with accurate information, addressed all my concerns promptly, and made the entire immigration process seamless. I'm grateful for their support in helping me achieve my immigration goals. Thank you, DZWorkaway",
    Testi_ar:
      "لقد تجاوزت DZWorkaway توقعاتي باحترافيتهم وكفاءتهم. لقد زودوني بمعلومات دقيقة، وعالجوا جميع مخاوفي على الفور، وجعلوا عملية الهجرة بأكملها سلسة. أنا ممتن لدعمهم في مساعدتي على تحقيق أهدافي في الهجرة. شكراً لك، DZWorkaway!",
    Testi_fr:
      "DZWorkaway a dépassé mes attentes grâce à son professionnalisme et à son efficacité. Ils m'ont fourni des informations précises, ont répondu rapidement à toutes mes questions et ont fait en sorte que l'ensemble du processus d'immigration se déroule sans encombre. Je leur suis reconnaissant de m'avoir aidé à atteindre mes objectifs en matière d'immigration. Merci, DZWorkaway ",
    Name: "Youssef Hamdi",
    Name_ar: "يوسف حمدي",
    Name_fr: "Youssef Hamdi",
  },
  {
    id: 4,
    Img: ImgWoman,
    Testi:
      "I can't thank DZWorkaway enough for their exceptional service. They went above and beyond to ensure that my immigration process was successful. Their team's expertise and guidance were invaluable, and I'm now happily settled in my new home country. I highly recommend DZWorkaway to anyone seeking reliable immigration services.",
    Testi_ar:
      "لا أستطيع أن أشكر DZWorkaway بما فيه الكفاية على خدمتهم الاستثنائية. لقد ذهبوا إلى أبعد الحدود لضمان نجاح عملية الهجرة الخاصة بي. كانت خبرة فريقهم وتوجيهاتهم لا تقدر بثمن، وأنا الآن مستقرة بسعادة في بلدي الجديد. أوصي بشدة بشركة DZWorkaway لأي شخص يبحث عن خدمات هجرة موثوقة",
    Testi_fr:
      "Je ne saurais trop remercier DZWorkaway pour son service exceptionnel. Ils se sont surpassés pour s'assurer que mon processus d'immigration soit couronné de succès. L'expertise et les conseils de leur équipe ont été inestimables, et je suis maintenant bien installée dans mon nouveau pays d'origine. Je recommande vivement DZWorkaway à tous ceux qui recherchent des services d'immigration fiables",
    Name: "Amira Djebbar",
    Name_ar: "أميرة جبار",
    Name_fr: "Amira Djebbar",
  },
];

export default function App() {
  const { i18n } = useTranslation();

  const modifiedData = Data.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Testi: data.Testi_ar,
        Name: data.Name_ar,
        Img: data.Img,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Testi: data.Testi_fr,
        Name: data.Name_fr,
        Img: data.Img,
      };
    }
    return data;
  });

  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 768 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="w-full mx-auto initialDirection md:w-3/4"
      >
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {modifiedData.map(({ id, Img, Testi, Name }) => {
            return (
              <SwiperSlide key={id}>
                <div className="w-full p-4 md:mx-auto mt-12 md:mt-20 border rtl:textRight border-grey shadow-lg mb-12 md:h-[22rem]">
                  <div className="p-4">
                    <div>
                      <LazyLoadImage
                        className="!w-10 !h-10 mb-4"
                        src={Img}
                        alt={Name}
                      />
                    </div>
                    <div>
                      <p>
                        <span>&#34;</span>
                        {Testi}
                        <span>&#34;</span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <h6>{Name}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </>
  );
}
